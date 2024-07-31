<script lang="tsx">
/**
 * 搜索组件
 */
export default {
  name: "search-form"
}
</script>

<script lang="tsx" setup>
import {h, ref, resolveComponent, watch} from "vue";
import SearchFormManager from "@/frame/components/search-form/search-form-manager.ts";

/**
 * 定义props
 */
const props = defineProps<{
  searchFormModel: SearchFormManager<any>
}>()

/**
 * 定义emit
 */
const emit = defineEmits<{
  (e: 'refreshTableData', value?: boolean): void
}>()

/**
 * 搜索表单组件
 */
const searchFormModel: any = ref()

/**
 * 搜索表单数据
 */
const searchFormData: any = ref({})

/**
 * 渲染
 */
function render({item}: any) {
  const {type, prop, props} = item
  const Type = resolveComponent(type)
  return h(Type, {
    modelValue: searchFormData.value[prop],
    onInput: (value: any) => searchFormData.value[prop] = value,
    ...Object.assign({}, props)
  })
}

/**
 * 重置
 */
const handleReset = () => {
  searchFormData.value = {};
  emit('refreshTableData', false)
}

/**
 * 筛选
 */
const handleSearch = () => {
  emit('refreshTableData', true)
}

/**
 * 获取筛选值
 */
const getSearchFormData = () => {
  return searchFormData.value
}

/**
 * 监视
 */
watch(() => props.searchFormModel, function (newValue: any) {
  if (newValue) {
    searchFormModel.value = newValue
  }
}, {
  deep: true,
  immediate: true
})

/**
 * 暴露
 */
defineExpose({
  getSearchFormData
})
</script>

<template>
  <div class="search-form">
    <div v-for="(item,index) of searchFormModel" v-show="!item.hide" :key="index" class="form-item">
      <component :is="item.renderFn" v-if="item.renderFn"/>
      <render v-else :item="item"></render>
    </div>
    <el-button class="form-button" @click="handleReset">重置</el-button>
    <el-button class="form-button" type="primary" @click="handleSearch">筛选</el-button>
  </div>
</template>

<style lang="scss" scoped>
.search-form {
  flex: 0;
  display: flex;

  .form-item {
    width: 180px;
    padding: 5px;
  }

  .form-button {
    margin: 5px;
  }
}
</style>