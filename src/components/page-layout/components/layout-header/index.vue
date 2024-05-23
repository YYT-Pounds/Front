<script lang="tsx" setup>/**
 * 主体-头部
 */
import {useRoute} from "vue-router";

/**
 * 获取路由
 */
const route = useRoute()
</script>

<template>
  <div class="page-wrap">
    <div class="left">
      {{ route.meta?.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrap{
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>