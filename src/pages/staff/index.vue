<script lang="tsx">
/**
 * 驾驶舱
 */
export default {
  name: "staff"
}
</script>

<script lang="tsx" setup>
import PageModel from '@/frame/components/page-model/index.vue'
import {ConfigModel} from "@/frame/model/base/config/config";
import {ref} from "vue";

/**
 * 新增
 */
const handleAdd = () => {
  pageModelRef.value.handleAdd()
}

/**
 * 编辑
 */
const handleEdit = (row: any) => {
  pageModelRef.value.handleEdit(row)
}

/**
 * 删除
 */
const handleDelete = (row: any) => {
  pageModelRef.value.handleDelete(row)
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
      },
      event: handleAdd
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
          event: handleEdit,
          props: {
            type: "primary",
            link: true
          }
        },
        {
          type: "el-button",
          label: "删除",
          event: handleDelete,
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
