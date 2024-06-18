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
  console.log(item)
  router.push(item.path)
}
</script>

<template>
  <div class="aside-menu">
    <el-scrollbar>
      <div v-for="(item,index) of routerList" :key="index" class="item" @click="handleClick(item)">
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
}
</style>