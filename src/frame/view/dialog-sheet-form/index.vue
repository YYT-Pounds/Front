<script lang="tsx">
/**
 * 表单弹窗
 */
export default {
  name: "dialog-form"
}
</script>

<script lang="tsx" setup>
import {ref, defineProps, watch} from "vue";
import DialogSheetFormManager from "./dialog-sheet-form-manager.ts";
import SheetForm from "@/frame/components/base/sheet-form/index.vue";

/**
 * 定义props
 */
const props = defineProps<{
  dialogSheetFormModel: DialogSheetFormManager<any>;
}>()

/**
 * 弹窗模型
 */
const dialogSheetFormModel = ref<DialogSheetFormManager<any>>()

/**
 * 监听
 */
watch(() => props.dialogSheetFormModel, function (newValue: any) {
  if (newValue) {
    dialogSheetFormModel.value = newValue
  }
}, {
  deep: true,
  immediate: true,
})

/**
 * 显示表单
 */
const SheetFormRef = ref()
const visible = ref(false)
const show = (params: any) => {
  visible.value = true
  if (params?.id) {
    SheetFormRef.value.setFormData(params?.row)
  }
}
const close = () => {
  SheetFormRef.value.setFormData({})
  visible.value = false
}

/**
 * 获取表单数据
 */
const getFormData = () => {
  return SheetFormRef.value.getFormData()
}

/**
 * 设置表单数据
 */
const setFormData = (data: any) => {
  SheetFormRef.value.setFormData(data)
}

defineExpose({
  show,
  getFormData,
  setFormData
})
</script>

<template>
  <div class="form">
    <el-dialog v-model="visible" :before-close="close" :title="dialogSheetFormModel?.title"
               :width="dialogSheetFormModel?.width">
      <SheetForm ref="SheetFormRef" :SheetFormModel="dialogSheetFormModel?.form"/>
    </el-dialog>
  </div>
</template>