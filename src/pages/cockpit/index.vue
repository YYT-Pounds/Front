<script lang="tsx">
/**
 * 驾驶舱
 */
export default {
  name: "cockpit"
}
</script>

<script lang="tsx" setup>
import {ref} from "vue";
import {definePageModel, PageModel} from "@/frame/view/page-model/constructor.ts";

/**
 * 页面模型
 */
const pageModelRef = ref()
const config = definePageModel<any>({
  url: "/api/",
  searchForm: {
    els: [
      {
        eType: 'el-input',
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
        eType: 'el-input',
        prop: "account",
        props: {
          placeholder: "请输入账号",
          clearable: true
        }
      }
    ]
  },
  programForm: {
    els: [
      {
        label: "新增",
        eType: 'el-button',
        props: {
          type: "primary",
        },
        event: "add"
      },
    ]
  },
  table: {
    page: {
      enable: false,
      pageSize: 999
    },
    operation: {
      width: 160,
      els: [
        {
          eType: "el-button",
          label: "编辑",
          event: "edit",
          props: {
            type: "primary",
            link: true
          }
        },
        {
          eType: "el-button",
          label: "删除",
          event: "delete",
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
    width: 500,
    sheetForm: {
      async bindData(data: any) {
        return data
      },
      async beforeSubmit(data: any) {
        return data
      },
      labelWidth: "100px",
      els: [
        {
          label: "用户名",
          eType: "el-input",
          prop: "name",
          props: {
            placeholder: "请输入用户名",
            clearable: true
          }
        },
        {
          label: "账号",
          eType: "el-input",
          prop: "account",
          props: {
            placeholder: "请输入用户名",
            clearable: true
          }
        },
        {
          label: "密码",
          eType: "el-input",
          prop: "password",
          props: {
            placeholder: "请输入密码",
            clearable: true
          }
        }
      ]
    }
  }
})

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
</script>

<template>
  <div class="customer">
    <PageModel ref="pageModelRef" :PageModel="config" @add="handleAdd" @delete="handleDelete" @edit="handleEdit"/>
  </div>
</template>

<style lang="scss" scoped>
.customer {
  height: 100%;
}
</style>
