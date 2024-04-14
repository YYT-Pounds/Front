<script>
export default {
  name: "health"
}
</script>

<script setup>
import {reactive, ref} from "vue";
import {healthNew, healthUpdate, healthDelete, healthSelect} from "../../api";
import {ElMessage} from "element-plus";

const searchForm = reactive({
  name: "",
  morning: "",
  noon: "",
  night: "",
  sleep: "",
  need: "",
  note: ""
})

const selectData = async () => {
  const result = await healthSelect();
  let a = []
  result.data.map(item => {
    if (item.name.indexOf(searchForm.name) !== -1 && searchForm.name !== "" || item.morning.indexOf(searchForm.morning) !== -1 && searchForm.morning !== "" || item.noon.indexOf(searchForm.noon) !== -1 && searchForm.noon !== "" || item.night.indexOf(searchForm.night) !== -1 && searchForm.night !== "" || item.sleep.indexOf(searchForm.sleep) !== -1 && searchForm.sleep !== "" || item.need.indexOf(searchForm.need) !== -1 && searchForm.need !== "" || item.note.indexOf(searchForm.note) !== -1 && searchForm.note !== ""){
      a.push(item)
    }
  })
  tableData.data = a
}

const getData = async () => {
  const result = await healthSelect();
  tableData.data = result.data
}

getData()

const newData = async () => {
  centerDialogVisible.value = false
  const result = await healthNew({...form});
  tableData.data.push(result.data)
  await getData()
  form = reactive({
    user: "",
    name: "",
    morning: "",
    noon: "",
    night: "",
    sleep: "",
    need: "",
    note: ""
  })
  ElMessage.success("新增成功")
}

const bindData = (row) => {
  form = reactive(Object.assign({}, row))
  centerDialogVisible2.value = true
}

const updateData = async () => {
  await healthUpdate({...form});
  centerDialogVisible2.value = false
  await getData()
  form = reactive({
    user: "",
    name: "",
    morning: "",
    noon: "",
    night: "",
    sleep: "",
    need: "",
    note: ""
  })
  ElMessage.success("修改成功")
}

const deleteData = async (id) => {
  await healthDelete({id: id})
  await getData()
  ElMessage.success("删除成功")
}

const tableData = reactive({
      data: []
    }
)

let form = reactive({
  user: "",
  name: "",
  morning: "",
  noon: "",
  night: "",
  sleep: "",
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
      <span class="item-text">用户Id：</span>
      <el-input v-model="form.user" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户姓名：</span>
      <el-input v-model="form.name" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">早上：</span>
      <el-input v-model="form.morning" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">中午：</span>
      <el-input v-model="form.noon" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">晚上：</span>
      <el-input v-model="form.night" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">睡前：</span>
      <el-input v-model="form.sleep" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">特需：</span>
      <el-input v-model="form.need" class="item-content"></el-input>
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
      title="新增/编辑"
      width="800"
  >
    <div class="dialog-item">
      <span class="item-text">用户Id：</span>
      <el-input v-model="form.user" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户姓名：</span>
      <el-input v-model="form.name" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">早上：</span>
      <el-input v-model="form.morning" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">中午：</span>
      <el-input v-model="form.noon" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">晚上：</span>
      <el-input v-model="form.night" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">睡前：</span>
      <el-input v-model="form.sleep" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">特需：</span>
      <el-input v-model="form.need" class="item-content"></el-input>
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
          <el-input class="input-logout" v-model="searchForm.name" placeholder="请输入姓名"></el-input>
        </div>
        <div class="input">
          <el-input class="input-logout" v-model="searchForm.morning" placeholder="请输入早上"></el-input>
        </div>
        <div class="input">
          <el-input class="input-logout" v-model="searchForm.noon" placeholder="请输入中午"></el-input>
        </div>
        <div class="input">
          <el-input class="input-logout" v-model="searchForm.night" placeholder="请输入晚上"></el-input>
        </div>
        <div class="input">
          <el-input class="input-logout" v-model="searchForm.sleep" placeholder="请输入睡前"></el-input>
        </div>
        <div class="input">
          <el-input class="input-logout" v-model="searchForm.need" placeholder="请输入特需"></el-input>
        </div>
        <div class="input">
          <el-input class="input-logout" v-model="searchForm.note" placeholder="请输入备注"></el-input>
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
            <el-table-column label="用户姓名" minWidth="120" prop="name"/>
            <el-table-column label="早上" minWidth="120" prop="morning"/>
            <el-table-column label="中午" minWidth="120" prop="noon"/>
            <el-table-column label="晚上" minWidth="120" prop="night"/>
            <el-table-column label="睡前" minWidth="120" prop="sleep"/>
            <el-table-column label="特需" minWidth="180" prop="need"/>
            <el-table-column label="备注" minWidth="180" prop="note"/>
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
