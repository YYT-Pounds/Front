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
 * 初始化数据
 */
const init = () => {
  refreshTableData()
}

/**
 * 获取表格数据
 */
const tableData = ref()
const refreshTableData = async (params?: any) => {
  const result = await request({
    url: props.config.url,
    method: props.config.method,
    params: {...params, ...props.config.otherParams}
  })
  tableData.value = result.data
}

/**
 * 提取数据
 */
const searchForm = ref(props.config.searchForm)
const programForm = ref(props.config.programForm)
const table = ref(props.config.table)

init()

/**
 * 暴露
 */
defineExpose({
  refreshTableData
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
      <Table :table="table" :tableData="tableData"></Table>
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