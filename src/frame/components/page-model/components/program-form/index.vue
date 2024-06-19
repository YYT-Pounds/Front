<script lang="tsx">
/**
 * 功能组件
 */
export default {
  name: "program-form"
}
</script>

<script lang="tsx" setup>
import {h, resolveComponent, defineProps} from 'vue'
import {ProgramFormItemBaseModel, ProgramFormItemModel} from "@/frame/model/base/config/program-form/program-form-item";

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
  const {type, event, props} = item
  const Type = resolveComponent(type)
  return h(Type, {
        onClick: event,
        ...Object.assign({}, props)
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
  flex: 0;
  margin-top: 5px;
  display: flex;

  .form-item {
    margin: 5px;
    height: 40px;
    width: 100px;
  }
}
</style>