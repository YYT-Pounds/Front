<script lang="tsx">
/**
 * 编码规则
 */
export default {
  name: "code-rule"
}
</script>

<script lang="tsx" setup>
import PageModel from '@/frame/components/page-model/index.vue'
import {ref} from "vue";
import definePageModel from "@/frame/components/page-model/constructor.ts";

/**
 * 页面模型
 */
const pageModelRef = ref()
const config = definePageModel({
  url: "http://118.178.254.102:1254/peaceful/admin/select",
  method: "GET",
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
      },
      renderFn() {
        return <div>1111</div>
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
      }
    },
  ],
  table: {
    page: {
      enable: false,
      pageSize: 999
    },
    operation: {
      width: 160,
      els: [
        {
          type: "el-button",
          label: "编辑",
          props: {
            type: "primary",
            link: true
          }
        },
        {
          type: "el-button",
          label: "删除",
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
    els: [
      {
        label: "用户id",
        prop: "id",
        minWidth: 120,
        renderFn() {
          return <div>11111</div>
        }
      },
      {
        label: "用户名",
        prop: "staffName",
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
      },
      {
        label: "用户名",
        type: "el-input",
        prop: "name",
        props: {
          placeholder: "请输入用户名",
          clearable: true
        },
        renderFn() {
          return <div>111</div>
        }
      }
    ]
  }
})
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
