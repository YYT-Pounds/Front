<script lang="tsx" setup>
/**
 * 搜索组件
 */
import {h, resolveComponent} from 'vue'
import {SearchFormItemModel} from "@/model/base/config/search-form/search-form-item";

/**
 * 定义emit
 */
const emit = defineEmits<{
  (e: 'refresh', value: any): void
}>()

/**
 * 定义props
 */
const props = defineProps<{
  searchForm?: SearchFormItemModel[]
}>()

/**
 * 初始化
 */
function render({item}: any) {
  const type = resolveComponent(item.type)
  return h(type, {
    modelValue: eval(`${item.prop}`),
    onInput: (value: any) => {
      item.prop = value
    },
    placeholder: item.props.placeholder,
    clearable: item.props.clearable
  })
}

/**
 * 重置
 */
const handleReset = () => {
  emit('refresh', {})
}

/**
 * 筛选
 */
const handleSearch = () => {
  let list: any = []
  props.searchForm?.map((item: SearchFormItemModel) => {
    list.push(item.prop)
    return item
  })
  emit('refresh', {
    ...list
  })
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
    width: 150px;
    padding: 5px;
  }

  .form-button {
    margin: 5px;
  }
}
</style>