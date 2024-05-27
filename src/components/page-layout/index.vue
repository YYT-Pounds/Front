<script lang="tsx" setup>
/**
 * 主体
 */
import LayoutHeader from './components/layout-header/index.vue'
import LayoutContent from './components/layout-content/index.vue'
</script>

<template>
  <div class="page-layout">
    <LayoutHeader/>
    <LayoutContent/>
  </div>
</template>

<style lang="scss" scoped>
.page-layout {
  background-color: #efefef;
  flex: 1;
  padding: 5px 30px 20px 30px;
}
</style>