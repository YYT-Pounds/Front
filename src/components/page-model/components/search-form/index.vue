<script lang="tsx" setup>
/**
 * 搜索组件
 */
import {h, ref, resolveComponent, defineEmits, defineProps} from 'vue'
import {SearchFormItemModel} from "@/model/base/config/search-form/search-form-item";

/**
 * 定义emit
 */
const emit = defineEmits<{
  (e: 'refreshTableData', value: any): void
}>()

/**
 * 定义props
 */
const props = defineProps<{
  searchForm?: SearchFormItemModel[]
}>()

/**
 * 使用映射接收数据
 */
let searchObj: any = ref({})

/**
 * 初始化
 */
function render({item}: any) {
  const {type, prop, props: {placeholder, clearable}} = item
  const Type = resolveComponent(type)
  return h(Type, {
    modelValue: searchObj.value[prop],
    onInput: (value: any) => searchObj.value[prop] = value,
    placeholder,
    clearable
  })
}

/**
 * 重置
 */
const handleReset = () => {
  emit('refreshTableData', {})
}

/**
 * 筛选
 */
const handleSearch = () => {
  emit('refreshTableData', searchObj.value)
}

</script>

<template>
  <div class="search-form">
    <render v-for="(item,index) of props.searchForm" :key="index" :item="item" class="form-item"></render>
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