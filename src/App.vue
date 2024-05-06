<script lang="tsx" setup>
import PageAside from "./components/page-aside/index.vue"
import PageLayout from "./components/page-layout/index.vue"
</script>

<template>
  <div class="page-wrap">
    <PageAside/>
    <PageLayout/>
  </div>
</template>

<style lang="scss" scoped>
.page-wrap {
  background-color: #999999;
  height: 100%;
  display: flex;
}
</style>
