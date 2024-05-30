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
import {ConfigModel} from "@/model/base/config/config";
import {ref} from "vue";

const handleClick = () => {
  pageModelRef.value.handleAdd()
}

/**
 * 页面模型
 */
const pageModelRef = ref()
const config: ConfigModel = {
  url: "http://118.178.254.102:1254/peaceful/admin/select",
  method: "get",
  otherParams: {
    id: 1111
  },
  searchForm: [
    {
      type: 'el-input',
      prop: "name",
      props: {
        placeholder: "请输入名称",
        clearable: true,
      }
    },
    {
      type: 'el-input',
      prop: "account",
      props: {
        placeholder: "请输入账号",
        clearable: true
      }
    }
  ],
  programForm: [
    {
      label: "新增",
      type: 'el-button',
      props: {
        type: "primary",
      },
      event: handleClick,
    },
  ],
  table: {
    page: {
      enable: false,
      pageSize: 999
    },
    operation: {
      width: 80,
      els: [
        {
          type: "el-button",
          label: "测试",
          event: handleClick,
          props: {
            type: "primary",
            link: true
          }
        }
      ]
    },
    props: {
      stripe: false,
      border: false,
    },
    selection: true,
    els: [
      {
        label: "用户id",
        prop: "id",
        minWidth: 120
      },
      {
        label: "用户名",
        prop: "name",
        minWidth: 120
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
  },
  form: {
    title: "新增/编辑",
    labelWidth: "100px",
    width: "500px",
    els: [
      {
        label: "用户名",
        type: "el-input",
        prop: "name",
        props: {
          placeholder: "请输入用户名",
          clearable: true
        }
      }
    ]
  }
}
</script>

<template>
  <div class="customer">
    <PageModel ref="pageModelRef" :config="config"/>
  </div>
</template>

<style lang="scss" scoped>
.customer {
  height: 100%;
}
</style>