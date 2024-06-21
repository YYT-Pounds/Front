<script lang="tsx">
/**
 * 左侧菜单主体
 */
export default {
  name: "aside-menu"
}
</script>

<script lang="tsx" setup>
import {useRoute, useRouter} from 'vue-router'
import {ref} from "vue";

/**
 * 定义路由
 */
const route = useRoute()
const router = useRouter()

/**
 * 初始化数据
 */
const routerList: any[] | any = ref(router.options.routes.find((item: any) => item.name === "index")?.children)

/**
 * 遍历获取当前活动路由
 */
const handleFindActiveRoute = () => {
  routerList.value.forEach((item: any) => {
    item.active = route.path === item.path;
  })
}
handleFindActiveRoute()

/**
 * 点击
 */
const handleClick = async (item: any) => {
  await router.push(item.path)
  handleFindActiveRoute()
}
</script>

<template>
  <div class="aside-menu">
    <el-scrollbar>
      <div v-for="(item,index) of routerList" :key="index" :class='{"active-item" : item.active}' class="item"
           @click="handleClick(item)">
        <div class="icon">
          <el-icon size="large">
            <component :is="item.meta.icon"></component>
          </el-icon>
        </div>
        <div class="title">
          {{ item.meta.title }}
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.aside-menu {

  .item:hover {
    background-color: dodgerblue;
    color: #efefef;
  }

  .item {
    padding: 10px;
    margin: 15px 5px;
    cursor: pointer;
    border-radius: 10px;
    transition-delay: 100ms;
    transition-duration: 500ms;
    font-weight: bold;
    display: flex;
    color: #333333;
    font-size: 16px;

    .icon {
      flex: 0;
      display: flex;
      align-items: center;
    }

    .title {
      flex: 1;
      margin-left: 10px;
    }
  }

  .active-item {
    background-color: dodgerblue;
    color: #efefef;
  }
}
</style>