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
    <div class="container">
      <el-table :data="tableData" class="table-content" height="100%" style="width:100%">
        <el-table-column v-for="(item,index) of props.table" :key="index" :label="item.label" :prop="item.prop"
                         :min-width="item.width" class="table-item"/>
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  border: 2px solid #aaaaaa;
  margin: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60vh;

  .container {
    flex: 1;
    position: relative;

    :deep(.el-table) {
      position: absolute;
    }
  }
}


</style>