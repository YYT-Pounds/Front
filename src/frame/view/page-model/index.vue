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
 * 暴露
 */
defineExpose({
  searchFormRef,
  programFormRef,
  tableRef,
  formRef,
  handleAdd,
  handleEdit,
})
</script>

<template>
  <div class="content-logout">
    <div v-if="pageModel?.searchForm" class="search-form">
      <slot name="search-form">
        <SearchForm ref="searchFormRef" :searchFormModel="pageModel?.searchForm"/>
      </slot>
    </div>
    <div v-if="pageModel?.programForm" class="program-form">
      <slot name="program-form">
        <ProgramForm ref="programFormRef" :programFormModel="pageModel?.programForm"></ProgramForm>
      </slot>
    </div>
    <div v-if="pageModel?.table" class="table">
      <slot name="table">
        <Table ref="tableRef" :table="pageModel?.table"></Table>
      </slot>
    </div>
    <div v-if="pageModel?.form" class="form">
      <Form ref="formRef" :dialogSheetFormModel="pageModel?.form"></Form>
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