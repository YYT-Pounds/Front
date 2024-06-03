<script lang="tsx">
/**
 * 表格组件
 */
export default {
  name: "table"
}
</script>

<script lang="tsx" setup>
import {h, ref, resolveComponent, watch, defineEmits, defineProps} from 'vue'
import {TableModel} from "@/model/base/config/table/table";

/**
 * 定义emit
 */
const emit = defineEmits<{
  (e: 'handleSelectionChange', rows: any[]): void;
  (e: 'handlePageDataChange', index: number, size: number): void
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
 * 当前页码
 */
const currentPage = ref(1)
/**
 * 一页显示多少数据
 */
const pageSize = ref(props.table.page?.pageSize || 20)

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
 * 初始化
 */
const init = () => {
  handleSizeChange(props.table.page.pageSize || 20)
}

/**
 * 多选
 */
const handleSelectionChange = (rows: any[]) => {
  emit('handleSelectionChange', rows)
}

/**
 * 监听每页数据量改变
 */
const handleSizeChange = (val: number) => {
  pageSize.value = val
  emit("handlePageDataChange", currentPage.value, pageSize.value)
}
/**
 * 监听页码变化
 */
const handleCurrentChange = (val: number) => {
  currentPage.value = val
  emit("handlePageDataChange", currentPage.value, pageSize.value)
}

init()

/**
 * 监视表格数据
 */
watch(() => props.tableData, function (value) {
  tableData.value = value || []
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
    <div class="page">
      <div class="left">
        <el-button class="left-btn" type="primary">清空选择</el-button>
      </div>
      <div class="right">
        <el-pagination
            v-if="table.page.enable"
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 50, 100]"
            :total="400"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  margin: 15px 5px 5px 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;

  .container {
    border: 2px solid #aaaaaa;
    flex: 1;
    position: relative;

    :deep(.el-table) {
      position: absolute;
    }
  }

  .page {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    .left {
      .left-btn {
        width: 100px;
        height: 40px;
      }
    }
  }
}
</style>