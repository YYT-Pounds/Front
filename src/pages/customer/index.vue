<script lang="tsx">
/**
 * 客户管理
 */
export default {
  name: "customer"
}
</script>

<script lang="tsx" setup>
import PageModel from '@/components/page-model/index.vue'
import {ref} from "vue";
import {ConfigModel} from "@/model/base/config/config";

const name = ref('customer')
const handleClick = () => {
  console.log(1)
}

/**
 * 页面模型
 */
const config: ConfigModel = {
  url: "http://118.178.254.102:1254/peaceful/admin/select",
  method: "get",
  searchForm: [
    {
      type: 'el-input',
      prop: name,
    }
  ],
  programForm: [
    {
      label: "测试",
      type: 'el-button',
      event: handleClick,
    },
  ],
  table: [
    {
      label: "用户id",
      prop: "id",
      width: 120
    },
    {
      label: "用户名",
      prop: "name",
      width: 120
    },
    {
      label: "账号",
      prop: "account",
      width: 120
    },
    {
      label: "密码",
      prop: "password",
      width: 120
    },
    {
      label: "备忘录",
      prop: "note",
      width: 120
    }
  ]
}
</script>

<template>
  <div class="page-wrap">
    <PageModel :config="config"/>
  </div>
</template>

<style lang="scss" scoped>
.page-wrap {
  height: 200px;
}
</style>