<script lang="tsx" setup>
/**
 * 表格组件
 */
import {h, ref, resolveComponent, watch} from 'vue'
import {TableModel} from "@/model/base/config/table/table";

/**
 * 定义emit
 */
const emit = defineEmits<{
  (e: 'handleSelectionChange', rows: any[]): void
}>()

/**
 * 定义props
 */
const props = defineProps<{
  table: TableModel,
  tableData?: any[]
}>()

/**
 * 数据
 */
const tableRef = ref()
const tableData = ref()

/**
 * 操作栏初始化
 */
function render({item}: any) {
  const type = resolveComponent(item.type)
  return h(type, {
        link: item.props.link,
        type: item.props.type
      },
      [h('span', item.label)])
}

/**
 * 多选
 */
const handleSelectionChange = (rows: any[]) => {
  emit('handleSelectionChange', rows)
}

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
      <el-table ref="tableRef" :border="props.table.props?.border" :data="tableData"
                :stripe="props.table.props?.stripe" class="table-content"
                height="100%" style="width:100%" @selection-change="handleSelectionChange">
        <el-table-column v-if="props.table.selection" type="selection" width="55"/>
        <el-table-column v-for="(item,index) of props.table.els" :key="index" :label="item.label"
                         :min-width="item.minWidth"
                         :prop="item.prop"
                         :width="item.width" class="table-item"/>
        <el-table-column v-if="props.table?.operation?.els" :width="props.table.operation?.width" label="操作栏">
          <template #default="scope">
            <render v-for="(item,index) of props.table.operation?.els" :key="index" :item="item"
                    @click="item.event(scope.row)"/>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  border: 2px solid #aaaaaa;
  margin: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 65vh;

  .container {
    flex: 1;
    position: relative;

    :deep(.el-table) {
      position: absolute;
    }
  }
}


</style>