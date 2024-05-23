<script lang="tsx" setup>
/**
 * 主题-表格
 */
import SearchForm from './components/search-form/index.vue'
import ProgramForm from './components/program-form/index.vue'
import Table from './components/table/index.vue'
import {ConfigMainModel} from "@/model/base/config/config";
import {ref} from "vue";

/**
 * 定义prop
 */
const props = defineProps<ConfigMainModel>()

/**
 * 提取数据
 */
const searchForm = ref(props.config.searchForm)
const programForm = ref(props.config.programForm)
const table = ref(props.config.table)

</script>

<template>
  <div class="page-wrap">
    <div class="search-form">
      <SearchForm :searchForm="searchForm"></SearchForm>
    </div>
    <div class="program-form">
      <ProgramForm :programForm="programForm"></ProgramForm>
    </div>
    <div class="table">
      <Table :table="table"></Table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrap {
  max-height: 100%;
  overflow: auto;
}
</style>