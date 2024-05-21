<script lang="tsx" setup>
/**
 * 左侧菜单主体
 */
import {useRouter} from 'vue-router'

/**
 * 初始化数据
 */
const router = useRouter()
const routerList: Array<any> = router.options.routes.slice(1, router.options.routes.length)

/**
 * 点击
 */
const handleClick = (item: any) => {
  router.push(item.path)
}
</script>

<template>
  <div class="aside-menu">
    <el-scrollbar>
      <div v-for="(item,index) of routerList" :key="index" class="item" @click="handleClick">
        <span>{{ item.meta.title }}</span>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.aside-menu {
  .item {
    padding: 15px;
    cursor: pointer;

    span {
      color: white;
      font-size: 18px;
    }
  }
}
</style>