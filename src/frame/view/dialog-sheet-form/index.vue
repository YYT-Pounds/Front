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
import {ElMessageBox} from "element-plus";

/**
 * 定义props
 */
const props = defineProps<{
  dialogSheetFormModel: DialogSheetFormManager<any>;
}>()

/**
 * 定义emit
 */
const emit = defineEmits<{
  (event: "submit", params: any): void;
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

/**
 * 提交表单
 */
const handleSubmit = async () => {
  await ElMessageBox.confirm("是否确认提交？", "提交", {
    type: "success"
  })
  emit("submit", getFormData())
  visible.value = false
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
      <div class="form-content">
        <SheetForm ref="SheetFormRef" :SheetFormModel="dialogSheetFormModel?.form"/>
      </div>
      <div class="form-bottom">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss">
.form-bottom {
  text-align: center;
}
</style>