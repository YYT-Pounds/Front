<script>
export default {
  name: "admin"
}
</script>

<script setup>
import {adminNew, adminSelect, adminUpdate, adminDelete} from "../../api";
import {ref, reactive} from 'vue'
import {ElMessage} from "element-plus";

const searchForm = reactive({
  name: "",
  account: "",
  contact: "",
})

const selectData = async () => {
  const result = await adminSelect();
  let a = []
  result.data.map(item => {
    if (item.name.indexOf(searchForm.name) !== -1 && searchForm.name !== "" || item.account.indexOf(searchForm.account) !== -1 && searchForm.account !== "" || item.contact.indexOf(searchForm.contact) !== -1 && searchForm.contact !== ""){
      a.push(item)
    }
  })
  tableData.data = a
}

const getData = async () => {
  const result = await adminSelect();
  tableData.data = result.data
}

getData()

const newData = async () => {
  centerDialogVisible.value = false
  const result = await adminNew({...form});
  tableData.data.push(result.data)
  await getData()
  ElMessage.success("新增成功")
  form = reactive({
    name: "",
    account: "",
    password: "",
    contact: "",
    note: ""
  })
}

const bindData = (row) => {
  form = reactive(Object.assign({}, row))
  centerDialogVisible2.value = true
}

const updateData = async () => {
  await adminUpdate({...form});
  centerDialogVisible2.value = false
  await getData()
  ElMessage.success("修改成功")
  form = reactive({
    name: "",
    account: "",
    password: "",
    contact: "",
    note: ""
  })
}

const deleteData = async (id) => {
  await adminDelete({id: id})
  await getData()
  ElMessage.success("删除成功")
}

const tableData = reactive({
      data: []
    }
)

let form = reactive({
  name: "",
  account: "",
  password: "",
  contact: "",
  note: ""
})

const centerDialogVisible = ref(false)
const centerDialogVisible2 = ref(false)
</script>

<template>
  <el-dialog
      v-model="centerDialogVisible"
      align-center
      title="新增"
      width="800"
  >
    <div class="dialog-item">
      <span class="item-text">管理员姓名：</span>
      <el-input v-model="form.name" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">管理员账号：</span>
      <el-input v-model="form.account" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">管理员密码：</span>
      <el-input v-model="form.password" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">联系方式：</span>
      <el-input v-model="form.contact" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">备注：</span>
      <el-input v-model="form.note" class="item-content"></el-input>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="newData">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-dialog
      v-model="centerDialogVisible2"
      align-center
      title="编辑"
      width="800"
  >
    <div class="dialog-item">
      <span class="item-text">管理员姓名：</span>
      <el-input v-model="form.name" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">管理员账号：</span>
      <el-input v-model="form.account" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">管理员密码：</span>
      <el-input v-model="form.password" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">联系方式：</span>
      <el-input v-model="form.contact" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">备注：</span>
      <el-input v-model="form.note" class="item-content"></el-input>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="updateData">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
  <div class="page-wrap">
    <div class="page-container">
      <div class="page-header">
        <div class="input">
          <el-input v-model="searchForm.name" class="input-logout" placeholder="请输入管理员姓名"></el-input>
        </div>
        <div class="input">
          <el-input v-model="searchForm.account" class="input-logout" placeholder="请输入管理员账号"></el-input>
        </div>
        <div class="input">
          <el-input v-model="searchForm.contact" class="input-logout" placeholder="请输入管理员联系方式"></el-input>
        </div>
        <div class="button">
          <el-button class="button-logout" type="info" @click="getData">重置</el-button>
        </div>
        <div class="button">
          <el-button class="button-logout" type="primary" @click="selectData">筛选</el-button>
        </div>
      </div>
      <div class="page-main">
        <div class="button">
          <el-button class="button-logout" type="primary" @click="centerDialogVisible = true">新增</el-button>
        </div>
      </div>
      <div class="page-body">
        <div class="table">
          <el-table :data="tableData.data" border stripe style="width: 1500px;height: 650px">
            <el-table-column label="管理员姓名" minWidth="120" prop="name"/>
            <el-table-column label="管理账号" minWidth="120" prop="account"/>
            <el-table-column label="管理员密码" minWidth="120" prop="password"/>
            <el-table-column label="管理员联系方式" minWidth="180" prop="contact"/>
            <el-table-column label="管理员备注" minWidth="200" prop="note"/>
            <el-table-column fixed="right" label="操作栏" width="120">
              <template #default="scope">
                <el-button link size="small" type="primary" @click="bindData(scope.row)">编辑</el-button>
                <el-button link size="small" type="primary" @click="deleteData(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped src="../../style/health.less">

</style>
