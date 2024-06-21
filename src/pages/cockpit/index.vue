<script lang="tsx">
/**
 * 驾驶舱
 */
export default {
  name: "cockpit"
}
</script>

<script lang="tsx" setup>
import PageModel from '@/frame/components/page-model/index.vue'
import {ConfigModel} from "@/frame/model/base/config/config";
import {ref} from "vue";
//
// /**
//  * 新增
//  */
// const handleAdd = () => {
//   pageModelRef.value.handleAdd()
// }
//
// /**
//  * 编辑
//  */
// const handleEdit = (row: any) => {
//   pageModelRef.value.handleEdit(row)
// }
//
// /**
//  * 删除
//  */
// const handleDelete = (row: any) => {
//   pageModelRef.value.handleDelete(row)
// }

/**
 * 页面模型
 */
const pageModelRef = ref()
const config:ConfigModel = {
  url: "http://118.178.254.102:1254/peaceful/admin/select",
  method: "get",
  otherParams: {
    id: 1111
  },
  searchForm: [
    {
      type: "el-input",
      prop: "name",
      props: {
        placeholder: "请输入内容",
      },
      // renderFn() {
      //   return <div>员工1号</div>
      // }
    },
    {
      type: "el-input",
      prop: "account",
      props: {
        placeholder: "请输入名字",

      }
    }
  ],
  table: {
    els: []
  }
}
</script>

<template>
  <div class="customer">
    <PageModel ref="pageModelRef" :config="config">
    </PageModel>
  </div>
</template>

<style lang="scss" scoped>
.customer {
  height: 100%;
}
</style>