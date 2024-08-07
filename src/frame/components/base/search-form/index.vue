<script lang="tsx">
/**
 * 搜索组件
 */
export default {
  name: "search-form"
}
</script>

<script lang="tsx" setup>
import {h, nextTick, ref, resolveComponent, watch} from "vue";
import SearchFormManager from "./search-form-manager.ts";
import {cloneDeep} from "lodash";

/**
 * 定义props
 */
const props = defineProps<{
  searchFormModel: SearchFormManager<any>
}>()

/**
 * 定义emit
 */
const emit = defineEmits<{
  (e: 'refreshTableData'): void
}>()

/**
 * 搜索表单组件
 */
const searchFormModel = ref<SearchFormManager<any>>()

/**
 * 搜索表单数据
 */
const searchFormData: any = ref({})

/**
 * 渲染
 */
function render({item}: any) {
  const {eType, prop, props} = item
  const Type = resolveComponent(eType)
  return h(Type, {
    modelValue: searchFormData.value[prop],
    onInput: (value: any) => searchFormData.value[prop] = value,
    ...Object.assign({}, props)
  })
}

/**
 * 重置
 */
const handleReset = () => {
  searchFormData.value = {};
  emit('refreshTableData')
}

/**
 * 筛选
 */
const handleSearch = () => {
  emit('refreshTableData')
}

/**
 * 获取筛选值
 */
const getSearchFormData = async () => {
  if (searchFormData.value?.beforeSubmit) {
    return await searchFormData.value.beforeSubmit(searchFormData.value)
  }
  return searchFormData.value
}

/**
 * 设置筛选值
 */
const setSearchFormData = async (data: any) => {
  if (searchFormData.value?.bindData) {
    searchFormData.value = await searchFormData.value.bindData(data)
  } else {
    searchFormData.value = data
  }
}

/**
 * 监视
 */
watch(() => props.searchFormModel, function (newValue: any) {
  if (newValue) {
    searchFormModel.value = newValue
    nextTick(() => {
      setSearchFormData(cloneDeep(newValue.initValue))
    })
  }
}, {
  deep: true,
  immediate: true
})

/**
 * 暴露
 */
defineExpose({
  getSearchFormData,
  setSearchFormData
})
</script>

<template>
  <div class="search-form">
    <div v-for="(item,index) of searchFormModel?.els" v-show="!item.hide" :key="index" class="form-item">
      <component :is="item.renderFn" v-if="item.renderFn"/>
      <render v-else :item="item"></render>
    </div>
    <el-button class="form-button" @click="handleReset">重置</el-button>
    <el-button class="form-button" type="primary" @click="handleSearch">筛选</el-button>
  </div>
</template>

<style lang="scss" scoped>
.search-form {
  flex: 0;
  display: flex;

  .form-item {
    width: 180px;
    padding: 5px;
  }

  .form-button {
    margin: 5px;
  }
}
</style>