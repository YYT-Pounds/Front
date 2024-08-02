<script lang="tsx">
/**
 * 功能框
 */
export default {
  name: "program-form"
}
</script>

<script lang="tsx" setup>
import ProgramFormManager from "@/frame/components/base/program-form/program-form-manager.ts";
import {resolveComponent, h, ref, watch} from "vue";

/**
 * 定义props
 */
const props = defineProps<{
  programFormModel?: ProgramFormManager
}>()

/**
 * 功能表单组件
 */
const programFormModel: any = ref()

/**
 * 初始化
 */
function render({item}: any) {
  const {eType, event, props} = item
  const Type = resolveComponent(eType)
  return h(Type, {
        onClick: event,
        ...Object.assign({}, props)
      },
      () => item.label)
}

/**
 * 监视
 */
watch(() => props.programFormModel, function (newValue: any) {
  if (newValue) {
    programFormModel.value = newValue
  }
}, {
  deep: true,
  immediate: true
})
</script>

<template>
  <div class="program-form">
    <div v-for="(item,index) of programFormModel.els" :key="index">
      <component :is="item.renderFn" v-if="item.renderFn"/>
      <render v-else :item="item" class="form-item"></render>
    </div>
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