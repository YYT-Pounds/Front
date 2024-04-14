<script>
export default {
  name: "meal"
}
</script>

<script setup>
import {reactive, ref} from "vue";
import {mealNew, mealDelete, mealSelect, mealUpdate} from "../../api";
import {ElMessage} from "element-plus";

const searchForm = reactive({
  name: "",
  breakfast: "",
  lunch: "",
  dinner: "",
  need: "",
  note: ""
})

const selectData = async () => {
  const result = await mealSelect();
  let a = []
  result.data.map(item => {
    if (item.name.indexOf(searchForm.name) !== -1 && searchForm.name !== "" || item.breakfast.indexOf(searchForm.breakfast) !== -1 && searchForm.breakfast !== "" || item.lunch.indexOf(searchForm.lunch) !== -1 && searchForm.lunch !== "" || item.dinner.indexOf(searchForm.dinner) !== -1 && searchForm.dinner !== "" || item.need.indexOf(searchForm.need) !== -1 && searchForm.need !== "" || item.note.indexOf(searchForm.note) !== -1 && searchForm.note !== ""){
      a.push(item)
    }
  })
  tableData.data = a
}

const getData = async () => {
  const result = await mealSelect();
  tableData.data = result.data
}

getData()

const newData = async () => {
  centerDialogVisible.value = false
  const result = await mealNew({...form});
  tableData.data.push(result.data)
  await getData()
  form = reactive({
    user: "",
    name: "",
    breakfast: "",
    lunch: "",
    dinner: "",
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
  await mealUpdate({...form});
  centerDialogVisible2.value = false
  await getData()
  form = reactive({
    user: "",
    name: "",
    breakfast: "",
    lunch: "",
    dinner: "",
    need: "",
    note: ""
  })
  ElMessage.success("修改成功")
}

const deleteData = async (id) => {
  await mealDelete({id:id})
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
  breakfast: "",
  lunch: "",
  dinner: "",
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
      <span class="item-text">早餐：</span>
      <el-input v-model="form.breakfast" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">午餐：</span>
      <el-input v-model="form.lunch" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">晚餐：</span>
      <el-input v-model="form.dinner" class="item-content"></el-input>
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
      <span class="item-text">早餐：</span>
      <el-input v-model="form.breakfast" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">午餐：</span>
      <el-input v-model="form.lunch" class="item-content"></el-input>
    </div>
    <div class="dialog-item">
      <span class="item-text">晚餐：</span>
      <el-input v-model="form.dinner" class="item-content"></el-input>
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
          <el-input class="input-logout" v-model="searchForm.name" placeholder="请输入用户姓名"></el-input>
        </div>
        <div class="input">
          <el-input class="input-logout" v-model="searchForm.breakfast" placeholder="请输入早餐"></el-input>
        </div>
        <div class="input">
          <el-input class="input-logout" v-model="searchForm.lunch" placeholder="请输入午餐"></el-input>
        </div>
        <div class="input">
          <el-input class="input-logout" v-model="searchForm.dinner" placeholder="请输入晚餐"></el-input>
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
            <el-table-column label="早餐" minWidth="180" prop="breakfast"/>
            <el-table-column label="午饭" minWidth="180" prop="lunch"/>
            <el-table-column label="晚餐" minWidth="180" prop="dinner"/>
            <el-table-column label="特需" minWidth="200" prop="note"/>
            <el-table-column label="备注" minWidth="200" prop="note"/>
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
