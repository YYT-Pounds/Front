<script>
export default {
  name: "header"
}
</script>

<script setup>
import {Location, Setting, Bowl, User, FirstAidKit, CreditCard, Coin} from '@element-plus/icons-vue'
import {useRoute, useRouter} from "vue-router";
import {reactive, watch} from "vue"
import {useStore} from "vuex";

const storeGroup = reactive({
  store: useStore(),
})

const routerGroup = reactive({
  router: useRouter(),
  route: useRoute(),
  path: "",
  reloadLocation() {
    this.path = this.route.path;
    console.log(routerGroup.path === '/home')
  }
})

const handleSelect = (key) => {
  if (key === "1-1") {
    routerGroup.router.push("/admin")
  } else if (key === "1-2") {
    storeGroup.store.commit("LOGOUT");
    routerGroup.router.push("/login")
  }
}

watch(() => routerGroup.route.path, function () {
  routerGroup.reloadLocation();
})

routerGroup.reloadLocation();
</script>

<template>
  <div class="header">
    <div class="left">
      <div v-if="routerGroup.path === '/home'" class="path">
        <el-icon :size="15" color="#409EFC">
          <location/>
        </el-icon>
        <span class="path-text">首页</span>
      </div>
      <div v-if="routerGroup.path === '/user'" class="path">
        <el-icon :size="15" color="#409EFC">
          <User/>
        </el-icon>
        <span class="path-text">用户管理</span>
      </div>
      <div v-if="routerGroup.path === '/health'" class="path">
        <el-icon :size="15" color="#409EFC">
          <FirstAidKit/>
        </el-icon>
        <span class="path-text">健康管理</span>
      </div>
      <div v-if="routerGroup.path === '/meal'" class="path">
        <el-icon :size="15" color="#409EFC">
          <Bowl/>
        </el-icon>
        <span class="path-text">餐饮管理</span>
      </div>
      <div v-if="routerGroup.path === '/charge'" class="path">
        <el-icon :size="15" color="#409EFC">
          <Coin/>
        </el-icon>
        <span class="path-text">财务管理</span>
      </div>
      <div v-if="routerGroup.path === '/work'" class="path">
        <el-icon :size="15" color="#409EFC">
          <CreditCard/>
        </el-icon>
        <span class="path-text">工单管理</span>
      </div>
      <div v-if="routerGroup.path === '/admin'" class="path">
        <el-icon :size="15" color="#409EFC">
          <Setting/>
        </el-icon>
        <span class="path-text">员工管理</span>
      </div>
    </div>
    <div class="right">
      <img alt="" class="right-img" src="http://118.178.254.102:1254/head.jpg"/>
      <el-menu
          :ellipsis="false"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
      >
        <el-sub-menu index="1">
          <template #title>管理员</template>
          <el-menu-item index="1-1">员工管理</el-menu-item>
          <el-menu-item index="1-2">退出登录</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<style lang="less" scoped src="../../style/header.less">

</style>
