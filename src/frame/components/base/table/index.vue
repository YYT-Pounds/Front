<script lang="tsx">
/**
 * 表格组件
 */
export default {
  name: "table"
}

</script>

<script lang="tsx" setup>
import {h, ref, resolveComponent, watch, defineEmits, defineProps, nextTick} from 'vue'
import TableManager from "@/frame/components/base/table/table-manager.ts"

/**
 * 定义emit
 */
const emit = defineEmits<{
  (e: "refreshTableData"): void
  (e: string, data: any[]): void
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
 * 监视props的table模型
 */
watch(() => props.tableModel, function (newValue) {
  if (newValue) {
    tableModel.value = newValue
  }
}, {
  deep: true,
  immediate: true
})

/**
 * 监视props的table数据
 */
watch(() => props.tableData, function (newValue) {
  if (newValue) {
    tableData.value = newValue
  }
}, {
  deep: true,
  immediate: true
})

/**
 * 当前页码
 */
const currentPage = ref(1)
/**
 * 一页显示多少数据
 */
const pageSize = ref(tableModel.value?.page?.pageSize || 20)
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
  emit('refreshTableData')
}
/**
 * 监听页码变化
 */
const handleCurrentChange = (val: number) => {
  currentPage.value = val
  emit('refreshTableData')
}
/**
 * 获取页码数据
 */
const getPaginationData = () => {
  return {
    currentPage: currentPage.value,
    pageSize: pageSize.value
  }
}

/**
 * 获取表格数据
 */
const getTableData = () => {
  return tableData.value
}
/**
 * 设置表格数据
 */
const setTableData = (data: any) => {
  tableData.value = data
}


/**
 * 初始化
 */
const init = () => {
  nextTick(() => {
    handleSizeChange(tableModel.value?.page?.pageSize || 20)
  })
}
init()

/**
 * 暴露
 */
defineExpose({
  getSelectionData,
  getPaginationData,
  getTableData,
  setTableData
})
</script>

<template>
  <div class="table">
    <div class="container">
      <el-table ref="tableRef" :border="tableModel?.props?.border" :data="tableData" :stripe="tableModel?.props?.stripe"
                class="table-content" empty-text="暂无数据"
                height="100%" style="width:100%" @selection-change="handleSelectionChange">
        <el-table-column v-if="tableModel?.selection" type="selection" width="55"/>
        <el-table-column v-for="(item,index) of tableModel?.els" :key="index" :label="item.label"
                         :min-width="item.minWidth"
                         :prop="item.prop" :width="item.width" class="table-item">
          <template v-if="item.renderFn" #default>
            <component :is="item.renderFn"/>
          </template>
        </el-table-column>
        <el-table-column v-if="tableModel?.operation?.els" :width="tableModel?.operation?.width" label="操作栏">
          <template #default="scope">
            <div class="table-operation-list">
              <div v-for="(item,index) of tableModel?.operation?.els" v-show="!item.hide" :key="index"
                   class="table-operation-item">
                <component :is="item.renderFn" v-if="item.renderFn"/>
                <render v-else :item="item" @click="emit(item.event,scope.row)"/>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <div class="left">
        <el-button v-if="tableModel?.selection" class="left-btn" type="primary">清空选择</el-button>
      </div>
      <div class="right">
        <el-pagination
            v-if="tableModel?.page?.enable == null ? true : tableModel?.page?.enable"
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