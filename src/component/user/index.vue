<script>
export default {
  name: "user"
}
</script>

<script setup>
import {reactive, ref} from "vue";
import {userDelete, userNew, userSelect, userUpdate} from "../../api";
import {ElMessage} from "element-plus";

const searchForm = reactive({
  name: "",
  sex: "",
  age: "",
  admin: "",
})

const selectData = async () => {
  const result = await userSelect();
  let a = []
  result.data.map(item => {
    if (item.name.indexOf(searchForm.name) !== -1 && searchForm.name !== "" || item.sex.indexOf(searchForm.sex) !== -1 && searchForm.sex !== "" || item.age.indexOf(searchForm.age) !== -1 && searchForm.age !== "" || item.admin.indexOf(searchForm.admin) !== -1 && searchForm.admin !== ""){
      a.push(item)
    }
  })
  tableData.data = a
}

const getData = async () => {
  const result = await userSelect();
  tableData.data = result.data
}

getData()

const newData = async () => {
  centerDialogVisible.value = false
  const result = await userNew({...form});
  tableData.data.push(result.data)
  await getData()
  form = reactive({
    name: "",
    sex: "",
    age: "",
    address: "",
    contact: "",
    admin: "",
    link: "",
    need: "",
    note: ""
  })
  ElMessage.success("新增成功")
}

const bindData = (row) => {
  form = reactive(Object.assign({},row))
  centerDialogVisible2.value = true
}

const updateData = async () => {
  await userUpdate({...form});
  centerDialogVisible2.value = false
  await getData()
  form = reactive({
    name: "",
    sex: "",
    age: "",
    address: "",
    contact: "",
    admin: "",
    link: "",
    need: "",
    note: ""
  })
  ElMessage.success("修改成功")
}

const deleteData = async (id) => {
  await userDelete({id: id})
  await getData()
  ElMessage.success("删除成功")
}

const tableData = reactive({
  data: []
})

let form = reactive({
  name: "",
  sex: "",
  age: "",
  address: "",
  contact: "",
  admin: "",
  link: "",
  need: "",
  note: ""
})

const centerDialogVisible = ref(false)
const centerDialogVisible2 = ref(false)
</script>

<template>
  <el-dialog
      v-model="centerDialogVisible"
      align-center
      title="新增/编辑"
      width="800"
  >
    <div class="dialog-item">
      <span class="item-text">用户姓名：</span>
      <el-input v-model="form.name" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户性别：</span>
      <el-input v-model="form.sex" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户年龄：</span>
      <el-input v-model="form.age" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户住址：</span>
      <el-input v-model="form.address" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户联系方式：</span>
      <el-input v-model="form.contact" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">管理员姓名：</span>
      <el-input v-model="form.admin" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">管理联系方式：</span>
      <el-input v-model="form.link" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户特需：</span>
      <el-input v-model="form.need" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户备注：</span>
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
      title="新增/编辑"
      width="800"
  >
    <div class="dialog-item">
      <span class="item-text">用户姓名：</span>
      <el-input v-model="form.name" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户性别：</span>
      <el-input v-model="form.sex" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户年龄：</span>
      <el-input v-model="form.age" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户住址：</span>
      <el-input v-model="form.address" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户联系方式：</span>
      <el-input v-model="form.contact" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">管理员姓名：</span>
      <el-input v-model="form.admin" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">管理联系方式：</span>
      <el-input v-model="form.link" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户特需：</span>
      <el-input v-model="form.need" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户备注：</span>
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
          <el-input class="input-logout" v-model="searchForm.name" placeholder="请输入用户姓名"></el-input>
        </div>
        <div class="input">
          <el-input class="input-logout" v-model="searchForm.admin" placeholder="请输入管理员姓名"></el-input>
        </div>
        <div class="input">
          <el-input class="input-logout" v-model="searchForm.sex" placeholder="请输入性别"></el-input>
        </div>
        <div class="input">
          <el-input class="input-logout" v-model="searchForm.age" placeholder="请输入年龄"></el-input>
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
            <el-table-column label="用户id" prop="id" width="120"/>
            <el-table-column label="用户姓名" prop="name" width="120"/>
            <el-table-column label="用户性别" prop="sex" width="120"/>
            <el-table-column label="用户年龄" prop="age" width="100"/>
            <el-table-column label="用户住址" prop="address" width="300"/>
            <el-table-column label="用户联系方式" prop="contact" width="180"/>
            <el-table-column label="管理员姓名" prop="admin" width="180"/>
            <el-table-column label="管理员联系方式" prop="link" width="150"/>
            <el-table-column label="用户特需" prop="need" width="120"/>
            <el-table-column label="用户备注" prop="note" width="200"/>
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
