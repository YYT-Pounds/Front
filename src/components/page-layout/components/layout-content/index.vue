<script lang="tsx">
/**
 * 主题-表格
 */
export default {
  name: "layout-content"
}
</script>

<script lang="tsx" setup>
</script>

<template>
  <div class="layout-content">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.layout-content {
  flex: 1;
  border-radius: 20px;
  padding: 30px;
  background-color: white;
  margin-top: 20px;
}
</style>