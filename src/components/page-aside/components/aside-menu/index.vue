<script lang="tsx">
/**
 * 左侧菜单主体
 */
export default {
  name: "aside-menu"
}
</script>

<script lang="tsx" setup>
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
      <div v-for="(item,index) of routerList" :key="index" class="item" @click="handleClick(item)">
        <el-icon>
          <component :is="item"></component>
        </el-icon>
        {{ item.meta.title }}
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.aside-menu {

  .item:hover{
    background-color: darkblue;
    color:white;
  }

  .item {
    padding: 10px;
    margin: 15px 5px;
    cursor: pointer;
    border-radius: 10px;
    color: #333333;
    font-size: 16px;
    transition-delay: 100ms;
    transition-duration: 500ms;
    font-weight: bold;
  }
}
</style>