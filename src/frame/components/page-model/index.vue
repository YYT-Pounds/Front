<script lang="tsx">
/**
 * 主题-表格
 */
export default {
  name: "page-model"
}
</script>

<script lang="tsx" setup>
import SearchForm from './components/search-form/index.vue'
import ProgramForm from './components/program-form/index.vue'
import Table from './components/table/index.vue'
import Form from './components/form/index.vue'
import {ConfigMainModel} from "@/frame/model/base/config/config";
import {ref, defineProps} from "vue";
import request from '@/frame/apis/request'
import {ElMessage, ElMessageBox} from "element-plus";


/**
 * 定义prop
 */
const props = defineProps<ConfigMainModel>()

/**
 * 提取数据
 */
const searchForm = ref(props.config.searchForm)
const programForm = ref(props.config.programForm)
const table = ref(props.config.table)
const form = ref(props.config.form)

/**
 * 组件实例
 */
const searchFormRef = ref()
const programFormRef = ref()
const tableRef = ref()
const formRef = ref()

/**
 * 获取表格数据
 */
const tableData = ref<any[]>()
const rows = ref<any[]>()
const pageIndex = ref<number>(1)
const pageSize = ref<number>(20)
const searchParams = ref<any>()

/**
 * 刷新表格
 */
const refreshTableData = async (params?: any) => {
  searchParams.value = params
  const result = await request({
    url: props.config.url,
    method: props.config.method,
    params: {...params, ...props.config.otherParams, pageIndex: pageIndex.value, pageSize: pageSize.value}
  })
  tableData.value = result.data
}

/**
 * 添加数据
 */
const addTableData = async (params?: any) => {
  await request({
    url: props.config.url,
    method: "post",
    params: {...params}
  })
  ElMessage.success("新增成功")
  await refreshTableData(searchParams.value)
}

/**
 * 更新数据
 */
const editTableData = async (params?: any) => {
  await request({
    url: props.config.url,
    method: "put",
    params: {...params}
  })
  ElMessage.success("编辑成功")
  await refreshTableData(searchParams.value)
}

/**
 * 删除数据
 */
const deleteTableData = async (params?: any) => {
  await ElMessageBox.confirm("是否确认删除该条数据?", "删除", {type: "error"})
  await request({
    url: props.config.url,
    method: "delete",
    params: {
      id: params.id
    }
  })
  ElMessage.success("删除成功")
  await refreshTableData(searchParams.value)
}

/**
 * 表格多选数据回调
 */
const handleSelectionChange = (value: any[]) => {
  rows.value = value
}

/**
 * 监听页码变化与页码数据量大小变化
 */
const handlePageDataChange = (index: number, size: number) => {
  pageIndex.value = index
  pageSize.value = size
  refreshTableData()
}

/**
 * 提取表格选中数据
 */
const getRowsData = () => {
  return rows.value
}

/**
 * 内置事件 -- 新增
 */
const handleAdd = () => {
  formRef.value.show({})
}

/**
 * 内置事件 -- 编辑
 */
const handleEdit = (row: any) => {
  formRef.value.show({row})
}

/**
 * 暴露
 */
defineExpose({
  refreshTableData,
  getRowsData,
  handleAdd,
  handleEdit,
  addTableData,
  editTableData,
  deleteTableData
})
</script>

<template>
  <div class="content-logout">
    <div class="search-form">
      <slot name="search-form">
        <SearchForm v-if="searchForm" ref="searchFormRef" :searchForm="searchForm"
                    @refreshTableData="refreshTableData"></SearchForm>
      </slot>
    </div>
    <div class="program-form">
      <slot name="program-form">
        <ProgramForm v-if="programForm" ref="programFormRef" :programForm="programForm"></ProgramForm>
      </slot>
    </div>
    <div class="table">
      <slot name="table">
        <Table v-if="table" ref="tableRef" :table="table" :tableData="tableData"
               @handlePageDataChange="handlePageDataChange"
               @handleSelectionChange="handleSelectionChange"></Table>
      </slot>
    </div>
    <div class="form">
      <Form v-if="form" ref="formRef" :form="form" @addTableData="addTableData" @editTableData="editTableData"></Form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-logout {
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: auto;
}
</style>