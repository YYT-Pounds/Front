<script lang="tsx">
/**
 * 首页
 */
export default {
  name: "index"
}
</script>

<script lang="tsx" setup>
import PageLayout from "@/frame/components/layout/page-layout/index.vue";
import PageAside from "@/frame/components/layout/page-aside/index.vue";
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