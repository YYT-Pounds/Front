<script lang="tsx" setup>
/**
 * 功能组件
 */
import {h, resolveComponent} from 'vue'
import {ProgramFormItemModel} from "@/model/base/config/program-form/program-form-item";

/**
 * 定义props
 */
const props = defineProps<{
  programForm?: ProgramFormItemModel[]
}>()

/**
 * 初始化
 */
function render({item}: any) {
  const type = resolveComponent(item.type)
  return h(type, {
    onClick: item.event,
    props: item.props,
    style: {
      width: '200px'
    },
  })
}
</script>

<template>
  <div class="search-form">
    <render v-for="(item,index) of props.programForm" :key="index" :item="item" class="form-item"></render>
  </div>
</template>

<style lang="scss" scoped>

</style>