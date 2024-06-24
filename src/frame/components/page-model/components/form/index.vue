<script lang="tsx">
/**
 * 表单组件
 */
export default {
  name: "form"
}
</script>

<script lang="tsx" setup>
import {FormModel} from "@/frame/model/base/config/form/form";
import {h, ref, resolveComponent, defineProps, defineEmits} from "vue";

/**
 * 定义props
 */
const props = defineProps<{
  form: FormModel;
}>()

/**
 * 定义emit
 */
const emit = defineEmits<{
  (e: 'addTableData' | 'editTableData', params: any): void;
}>()

/**
 * 表单数据
 */
const formObj = ref<any>({})

/**
 * 初始化
 */
function render({item}: any) {
  const {type, prop} = item;
  const Type = resolveComponent(type)
  return h(Type, {
    modelValue: formObj.value[prop],
    onInput: (value: any) => formObj.value[item.prop] = value,
    ...Object.assign({}, props)
  })
}

/**
 * 显示表单
 */
const visible = ref(false)
const show = (params: any) => {
  visible.value = true
  if (params.id) {
    formObj.value = params
  }
}
const close = () => {
  formObj.value = {}
  visible.value = false
}

/**
 * 提交
 */
const handleSubmit = () => {
  emit(formObj.value.id ? "editTableData" : "addTableData", formObj.value)
}

/**
 * 暴露
 */
defineExpose({
  show
})
</script>

<template>
  <div class="form">
    <el-dialog v-model="visible" :before-close="close" :title="props?.form?.title" :width="props?.form?.width">
      <div class="container">
        <div class="form-content">
          <el-form v-model="formObj">
            <el-form-item v-for="(item, index) in props?.form?.els" v-show="!item.hide" :key="index"
                          :label="item.label" :label-width="props.form.labelWidth">
              <component :is="item.renderFn" v-if="item.renderFn"/>
              <render v-else :item="item"></render>
            </el-form-item>
          </el-form>
        </div>
        <div class="form-bottom">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  .form-content {
    flex: 1;
  }

  .form-bottom {
    flex: 0;
    text-align: center;
  }
}
</style>