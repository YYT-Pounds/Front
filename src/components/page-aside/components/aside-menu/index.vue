<script lang="tsx" setup>
/**
 * 左侧菜单主体
 */
import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router)
</script>

<template>
  <div class="aside-menu">
    <el-scrollbar>
      <p style="color: aliceblue">1</p>

    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.aside-menu{

}
</style>