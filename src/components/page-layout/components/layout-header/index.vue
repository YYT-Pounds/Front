<script lang="tsx">
/**
 * 主体-头部
 */
export default {
  name: "layout-header"
}
</script>

<script lang="tsx" setup>
import {useRoute} from "vue-router";

/**
 * 获取路由
 */
const route = useRoute()
</script>

<template>
  <div class="layout-header">
    <div class="left">
      {{ route.meta?.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  flex: 0;

  .left {
    font-size: 22px;
    font-weight: bolder;
    color: #333333;
  }
}
</style>