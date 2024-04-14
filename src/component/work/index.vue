<script>
export default {
  name: "work"
}
</script>

<script setup>
import {reactive, ref} from "vue";
import {workNew, workDelete, workSelect, workUpdate} from "../../api";
import {ElMessage} from "element-plus";

const searchForm = reactive({
  name: "",
  event: "",
  need: "",
  note: ""
})

const selectData = async () => {
  const result = await workSelect();
  let a = []
  result.data.map(item => {
    if (item.name.indexOf(searchForm.name) !== -1 && searchForm.name !== "" || item.event.indexOf(searchForm.event) !== -1 && searchForm.event !== "" || item.need.indexOf(searchForm.need) !== -1 && searchForm.need !== "" || item.note.indexOf(searchForm.note) !== -1 && searchForm.note !== ""){
      a.push(item)
    }
  })
  tableData.data = a
}

const getData = async () => {
  const result = await workSelect();
  tableData.data = result.data
}

getData()

const newData = async () => {
  centerDialogVisible.value = false
  const result = await workNew({...form});
  tableData.data.push(result.data)
  await getData()
  form = reactive({
    user:"",
    name:"",
    event:"",
    need:"",
    note:""
  })
  ElMessage.success("新增成功")
}

const bindData = (row) => {
  form = reactive(Object.assign({},row))
  centerDialogVisible2.value = true
}

const updateData = async () => {
  await workUpdate({...form});
  centerDialogVisible2.value = false
  await getData()
  form = reactive({
    user:"",
    name:"",
    event:"",
    need:"",
    note:""
  })
  ElMessage.success("修改成功")
}

const deleteData = async (id) => {
  await workDelete({id:id})
  await getData()
  ElMessage.success("删除成功")
}

const tableData = reactive({
      data: []
    }
)

let form = reactive({
  user:"",
  name:"",
  event:"",
  need:"",
  note:""
})

const centerDialogVisible = ref(false)
const centerDialogVisible2 = ref(false)
</script>

<template>
  <el-dialog
      v-model="centerDialogVisible"
      title="新增/编辑"
      width="800"
      align-center
  >
    <div class="dialog-item">
      <span class="item-text">用户id：</span>
      <el-input v-model="form.user" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户姓名：</span>
      <el-input v-model="form.name" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">工单事件：</span>
      <el-input v-model="form.event" class="item-content"></el-input>
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
      title="新增/编辑"
      width="800"
      align-center
  >
    <div class="dialog-item">
      <span class="item-text">用户id：</span>
      <el-input v-model="form.user" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">用户姓名：</span>
      <el-input v-model="form.name" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">工单事件：</span>
      <el-input v-model="form.event" class="item-content"></el-input>
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
          <el-input class="input-logout" v-model="searchForm.event" placeholder="请输入工单事件"></el-input>
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
            <el-table-column label="用户姓名" prop="name" minWidth="120"/>
            <el-table-column label="工单事件" prop="event" minWidth="800"/>
            <el-table-column label="特需" prop="need" minWidth="180"/>
            <el-table-column label="备注" prop="note" minWidth="180"/>
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
