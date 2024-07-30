<script lang="tsx">
/**
 * 左侧菜单头部
 */
export default {
  name: "aside-logo"
}
</script>

<script lang="tsx" setup>
import {ref} from "vue";
import axios from "axios";

/**
 * 获取初始数据
 */
const init = () => {
  getData()
}

/**
 * 获取数据
 */
const config = ref()
const getData = async () => {
  config.value = await axios.get('/public/config/base.json')
}

init()
</script>

<template>
  <div class="aside-logo">
    <div class="img">
      <img :src="config?.image" alt="" class="img-logout">
    </div>
    <div class="name">
      {{ config?.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aside-logo {
  height: 60px;
  margin: 15px 0;
  display: flex;

  .img {
    flex: 0;
    flex-basis: 60px;
    height: 60px;

    .img-logout {
      width: 60px;
      height: 60px;
    }
  }

  .name {
    margin-left: 20px;
    font-size: 40px;
    font-weight: 500;
    line-height: 60px;
    text-align: center;
    color: white;
  }
}
</style>