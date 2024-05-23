<script lang="tsx" setup>
/**
 * 侧边菜单
 */
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
  background-color: #333333;
  flex: 0;
  flex-basis: 180px;
  padding: 0 10px;
}
</style>