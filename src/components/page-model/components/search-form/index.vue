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
    style: {
      width: '200px'
    }
  })
}
</script>

<template>
  <div class="search-form">
    <render v-for="(item,index) of props.searchForm" :key="index" :item="item" class="form-item"></render>
  </div>
</template>

<style lang="scss" scoped>

</style>