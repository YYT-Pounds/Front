<script lang="tsx" setup>
/**
 * 表格组件
 */
import {ref, watch} from 'vue'
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
 * 监视表格数据
 */
watch(() => props.tableData, function () {
  tableData.value = props.tableData
})
</script>

<template>
  <div class="table">
    <el-table :data="tableData">
      <el-table-column v-for="(item,index) of props.table" :key="index" :label="item.label" :prop="item.prop"
                       :width="item.width" class="table-item"/>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.table {
  height: 100%;
}
</style>