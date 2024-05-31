<script lang="tsx" setup>
/**
 * 表单组件
 */
import {FormModel} from "@/model/base/config/form/form";
import {h, ref, resolveComponent} from "vue";

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
  (e: 'addTableData', params: any): void;
  (e: 'editTableData', params: any): void;
}>()

/**
 * 表单数据
 */
const formObj: any = ref({})

/**
 * 初始化
 */
function render({item}: any) {
  const type = resolveComponent(item.type)
  return h(type, {
    modelValue: formObj.value[item.prop],
    onInput: (value: any) => {
      formObj.value[item.prop] = value
    },
    placeholder: item.props.placeholder,
    clearable: item.props.clearable
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
  if (formObj.value.id) {
    emit('editTableData', formObj.value)
  } else {
    emit('addTableData', formObj.value)
  }
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
    <el-dialog v-model="visible" :before-close="close" :title="props.form.title" :width="props.form.width">
      <div class="container">
        <div class="form-content">
          <el-form v-model="formObj">
            <el-form-item v-for="(item, index) in props.form.els" :key="index" :label="item.label"
                          :label-width="props.form.labelWidth">
              <render :item="item"></render>
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