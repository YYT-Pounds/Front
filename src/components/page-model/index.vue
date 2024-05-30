<script lang="tsx" setup>
/**
 * 主题-表格
 */
import SearchForm from './components/search-form/index.vue'
import ProgramForm from './components/program-form/index.vue'
import Table from './components/table/index.vue'
import {ConfigMainModel} from "@/model/base/config/config";
import {ref} from "vue";
import request from '@/apis/request'

/**
 * 定义prop
 */
const props = defineProps<ConfigMainModel>()

/**
 * 获取表格数据
 */
const tableData = ref()
const rows = ref()
const pageIndex = ref(1)
const pageSize = ref(20)

/**
 * 刷新表格
 */
const refreshTableData = async (params?: any) => {
  const result = await request({
    url: props.config.url,
    method: props.config.method,
    params: {...params, ...props.config.otherParams, pageIndex: pageIndex.value, pageSize: pageSize.value}
  })
  tableData.value = result.data
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
 * 提取数据
 */
const searchForm = ref(props.config.searchForm)
const programForm = ref(props.config.programForm)
const table = ref(props.config.table)

/**
 * 暴露
 */
defineExpose({
  refreshTableData,
  getRowsData
})
</script>

<template>
  <div class="content-logout">
    <div class="search-form">
      <SearchForm :searchForm="searchForm" @refreshTableData="refreshTableData"></SearchForm>
    </div>
    <div class="program-form">
      <ProgramForm :programForm="programForm"></ProgramForm>
    </div>
    <div class="table">
      <Table :table="table" :tableData="tableData" @handlePageDataChange="handlePageDataChange"
             @handleSelectionChange="handleSelectionChange"></Table>
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