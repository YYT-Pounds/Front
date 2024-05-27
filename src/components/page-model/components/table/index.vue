<script lang="tsx" setup>
/**
 * 表格组件
 */
import {h, ref, watch} from 'vue'
import {TableItemModel} from "@/model/base/config/table/table-item";

/**
 * 定义props
 */
const props = defineProps<{
  table?: TableItemModel[];
  tableData?: any[]
}>()

/**
 * 数据
 */
const tableData = ref()

/**
 * 初始化
 */
const render = ({item}: any) => {
  console.log(item.prop)
  return h('el-table-column', {
    label: item.label,
    prop: item.prop,
    minWidth: item.minWidth
  })
}

/**
 * 监视表格数据
 */
watch(() => props.tableData, function () {
  tableData.value = props.tableData
})
</script>

<template>
  <div class="table" style="height: 100%">
    <el-table :data="tableData">
      <el-table-column v-for="(item,index) of props.table" :key="index" :prop="item.prop" :width="item.width" :label="item.label"  class="table-item"/>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>

</style>