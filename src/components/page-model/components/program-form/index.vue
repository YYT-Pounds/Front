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
      },
      [h('span', item.label)])
}
</script>

<template>
  <div class="program-form">
    <render v-for="(item,index) of props.programForm" :key="index" :item="item" class="form-item"></render>
  </div>
</template>

<style lang="scss" scoped>
.program-form {
  flex:0;
  margin-top: 5px;
  display: flex;

  .form-item {
    margin: 5px;
    height: 35px;
    width: 100px;
  }
}
</style>