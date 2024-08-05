<script lang="tsx">
/**
 * 基础单表格页面
 */
export default {
  name: "page-model"
}
</script>

<script lang="tsx" setup>
import {ref, defineProps, watch} from "vue";
import PageModelManager from "./page-model-manager.ts";
import SearchForm from "@/frame/components/base/search-form/index.vue";
import ProgramForm from "@/frame/components/base/program-form/index.vue";
import Table from "@/frame/components/base/table/index.vue";
import Form from "@/frame/view/dialog-sheet-form/index.vue"
import {processRequest} from "@/frame/apis";

/**
 * 定义props
 */
const props = defineProps<{
  PageModel: PageModelManager<any>;
}>()

/**
 * 基础单表格页面模型
 */
const pageModel = ref<PageModelManager<any>>()

/**
 * 监听
 */
watch(() => props.PageModel, function (newValue: any) {
  if (newValue) {
    pageModel.value = newValue
  }
}, {
  deep: true,
  immediate: true,
})

/**
 * 组件实例
 */
const searchFormRef = ref()
const programFormRef = ref()
const tableRef = ref()
const formRef = ref()

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
 * 获取搜索框数据
 */
const getSearchFormData = () => {
  return searchFormRef.value.getSearchFormData()
}

/**
 * 获取表格所选项
 */
const getTableSelectData = () => {
  return tableRef.value.getSelectionData()
}

/**
 * 获取表格数据
 */
const getTableData = () => {
  return tableRef.value.getTableData()
}

/**
 * 设置表格数据
 */
const setTableData = (data: any[]) => {
  tableRef.value.setTableData(data)
}

/**
 * 获取表单数据
 */
const getFormData = () => {
  return formRef.value.getFormData()
}

/**
 * 设置表单数据
 */
const setFormData = (data: any) => {
  formRef.value.setFormData(data)
}

/**
 * 刷新表格
 */
const refreshTableData = async () => {
  const pageData = tableRef.value.getPaginationData()
  const searchData = searchFormRef.value.getSearchFormData()
  const result: any = await processRequest.get(pageModel.value?.url as string, {
    ...pageData,
    ...searchData
  })
  setTableData(result)
}

/**
 * 暴露
 */
defineExpose({
  handleAdd,
  handleEdit,
  refreshTableData,
  getSearchFormData,
  getTableSelectData,
  getTableData,
  setTableData,
  getFormData,
  setFormData
})
</script>

<template>
  <div class="content-logout">
    <div v-if="pageModel?.searchForm" class="search-form">
      <slot name="search-form">
        <SearchForm ref="searchFormRef" :searchFormModel="pageModel?.searchForm" @refreshTableData="refreshTableData"/>
      </slot>
    </div>
    <div v-if="pageModel?.programForm" class="program-form">
      <slot name="program-form">
        <ProgramForm ref="programFormRef" :programFormModel="pageModel?.programForm"/>
      </slot>
    </div>
    <div v-if="pageModel?.table" class="table">
      <slot name="table">
        <Table ref="tableRef" :table="pageModel?.table" @refreshTableData="refreshTableData"/>
      </slot>
    </div>
    <div v-if="pageModel?.form" class="form">
      <Form ref="formRef" :dialogSheetFormModel="pageModel?.form"/>
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