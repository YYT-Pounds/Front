<script lang="tsx" setup>
/**
 * 搜索组件
 */
import {h, resolveComponent} from 'vue'
import {SearchFormItemModel} from "@/model/base/config/search-form/search-form-item";

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
    modelValue: item.prop,
    onInput(value: any) {
      item.prop = value
    },
    props: item.props,
  })
}

</script>

<template>
  <div class="search-form">
    <render v-for="(item,index) of props.searchForm" :key="index" :item="item" class="form-item"></render>
    <el-button class="form-button">重置</el-button>
    <el-button type="primary" class="form-button">筛选</el-button>
  </div>
</template>

<style lang="scss" scoped>
.search-form {
  flex:0;
  display: flex;
  .form-item {
    width: 150px;
    padding: 5px;
  }

  .form-button{
    margin:5px;
  }
}
</style>