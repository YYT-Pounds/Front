<script lang="tsx" setup>
/**
 * 表格组件
 */
import {h} from 'vue'
import {TableItemModel} from "@/model/base/config/table/table-item";

/**
 * 定义props
 */
const props = defineProps<{
  table?: TableItemModel[]
}>()

/**
 * 初始化
 */
const render = ({item}: any) => {
  return h('el-table-column', {
    label: item.label,
    prop: item.prop,
    width: item.width
  })
}
</script>

<template>
  <div class="table">
    <el-table>
      <render v-for="(item,index) of props.table" :key="index" :item="item" class="table-item" />
    </el-table>
  </div>
</template>

<style lang="scss" scoped>

</style>