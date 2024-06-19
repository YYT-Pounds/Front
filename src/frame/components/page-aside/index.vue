<script lang="tsx">
/**
 * 侧边菜单
 */
export default {
  name: "page-aside"
}
</script>

<script lang="tsx" setup>
import AsideLogo from "./components/aside-logo/index.vue"
import AsideMenu from "./components/aside-menu/index.vue"
</script>

<template>
  <div class="page-aside">
    <AsideLogo/>
    <AsideMenu/>
  </div>
</template>

<style lang="scss" scoped>
.page-aside {
  background-color: #efeff5;
  flex: 0;
  flex-basis: 180px;
  padding: 0 10px;
}
</style>