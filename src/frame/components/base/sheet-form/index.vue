<script lang="tsx">
/**
 * 表单组件
 */
export default {
  name: "sheet-form"
}
</script>

<script lang="tsx" setup>
import SheetFormManager from "./sheet-form-manager.ts";
import {h, ref, resolveComponent, defineProps, watch} from "vue";

/**
 * 定义props
 */
const props = defineProps<{
  SheetFormModel: SheetFormManager<any>;
}>()

/**
 * 表单模型
 */
const sheetFormModel = ref<SheetFormManager<any>>()

/**
 * 表单数据
 */
const sheetFormData = ref<any>({})

/**
 * 初始化
 */
const render = ({item}: any) => {
  const {eType, prop, props} = item;
  const Type = resolveComponent(eType)
  return h(Type, {
    modelValue: sheetFormData.value[prop],
    onInput: (value: any) => sheetFormData.value[item.prop] = value,
    ...Object.assign({}, props)
  })
}

/**
 * 监听
 */
watch(() => props.SheetFormModel, function (newValue: any) {
  if (newValue) {
    sheetFormModel.value = newValue
  }
}, {
  deep: true,
  immediate: true,
})

/**
 * 获取表单数据
 */
const getFormData = () => {
  return sheetFormData.value
}

/**
 * 设置表单数据
 */
const setFormData = (data: any) => {
  sheetFormData.value = {...data}
}

defineExpose({
  getFormData,
  setFormData
})
</script>

<template>
  <div class="sheet-form">
    <div class="form-content">
      <el-form v-model="sheetFormData">
        <el-form-item v-for="(item, index) in sheetFormModel?.els" v-show="!item.hide" :key="index"
                      :label="item.label" :label-width="sheetFormModel?.labelWidth">
          <component :is="item.renderFn" v-if="item.renderFn"/>
          <render v-else :item="item"></render>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>