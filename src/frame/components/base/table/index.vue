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
import TableManager from "@/frame/components/base/table/table-manager.ts"

/**
 * 定义emit
 */
const emit = defineEmits<{
  (e: 'handlePageDataChange', index: number, size: number): void
}>()

/**
 * 定义props
 */
const props = defineProps<{
  tableModel: TableManager<any>,
  tableData?: any[]
}>()

/**
 * 数据
 */
const tableModel = ref<TableManager<any>>()
const tableRef = ref()
const tableData = ref()

/**
 * 监视props
 */
watch(() => props, function (newValue) {
  if (newValue) {
    tableModel.value = newValue.tableModel
    tableData.value = newValue.tableData || []
  }
})

/**
 * 当前页码
 */
const currentPage = ref(1)
/**
 * 一页显示多少数据
 */
const pageSize = ref(tableModel.page?.pageSize || 20)
/**
 * 当前选中数据
 */
const rowsData = ref()

/**
 * 操作栏初始化
 */
const render = ({item}: any) => {
  const {type, props} = item
  const Type = resolveComponent(type)
  return h(Type, {
        ...Object.assign({}, props)
      },
      [h('span', item.label)])
}

/**
 * 多选
 */
const handleSelectionChange = (rows: any[]) => {
  rowsData.value = rows
}

/**
 * 获取选择的数据
 */
const getSelectionData = () => {
  return rowsData.value
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


/**
 * 初始化
 */
const init = () => {
  handleSizeChange(props.table.page?.pageSize || 20)
}
init()

/**
 * 暴露
 */
defineExpose({
  getSelectionData
})
</script>

<template>
  <div class="table">
    <div class="container">
      <el-table ref="tableRef" :border="props.table.props?.border" :data="tableData" :stripe="props.table.props?.stripe"
                class="table-content" empty-text="暂无数据"
                height="100%" style="width:100%" @selection-change="handleSelectionChange">
        <el-table-column v-if="props.table.selection" type="selection" width="55"/>
        <el-table-column v-for="(item,index) of props.table.els" :key="index" :label="item.label"
                         :min-width="item.minWidth"
                         :prop="item.prop" :width="item.width" class="table-item">
          <template v-if="item.renderFn" #default>
            <component :is="item.renderFn"/>
          </template>
        </el-table-column>
        <el-table-column v-if="props.table?.operation?.els" :width="props.table.operation?.width" label="操作栏">
          <template #default="scope">
            <div class="table-operation-list">
              <div v-for="(item,index) of props.table.operation?.els" v-show="!item.hide" :key="index"
                   class="table-operation-item">
                <component :is="item.renderFn" v-if="item.renderFn"/>
                <render v-else :item="item" @click="item.event(scope.row)"/>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <div class="left">
        <el-button v-if="props.table.selection" class="left-btn" type="primary">清空选择</el-button>
      </div>
      <div class="right">
        <el-pagination
            v-if="table?.page?.enable == null ? true : table?.page?.enable"
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
  height: 650rem;

  .container {
    flex: 1;
    position: relative;

    :deep(.el-table) {
      position: absolute;
      border: 1px solid #999999;
    }

    :deep(.el-table__body) {
      border: none;
    }

    :deep(.el-table__header) {
      border: none;
    }

    :deep(.el-table th), :deep(.el-table td) {
      color: #333333; /* 修改文字颜色 */
      background-color: #f7f7fa;
      text-align: center;
      border: none;
      border-right: 1px solid #999999;
      border-bottom: 1px solid #999999;
    }

    :deep(.el-table th:last-child), :deep(.el-table td:last-child) {
      border-right: none;
    }

    .table-operation-list {
      display: flex;
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