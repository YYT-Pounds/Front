<script>
export default {
  name: "menu"
}
</script>

<script setup>
import {Location, Setting, Plus, Minus, Bowl, User, FirstAidKit, CreditCard, Coin} from '@element-plus/icons-vue'
import {reactive} from "vue"
import {useStore} from "vuex"

const storeGroup = reactive({
  store: useStore(),
  changeCollapse() {
    this.store.commit("SET_COLLAPSE");
    menuGroup.isCollapse = this.store.state.menu.isCollapse;
  }
})

const menuGroup = reactive({
  isCollapse: storeGroup.store.state.menu.isCollapse,
})


</script>

<template>
  <div class="menu">
    <el-menu
        :collapse="menuGroup.isCollapse"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="/home"
        router
        text-color="#fff"
    >
      <el-menu-item>
        <el-icon @click="storeGroup.changeCollapse()">
          <plus v-show="menuGroup.isCollapse"></plus>
          <minus v-show="!menuGroup.isCollapse"></minus>
        </el-icon>
        <span>安沁养老服务管理系统</span>
      </el-menu-item>
      <el-menu-item index="/home">
        <el-icon>
          <location/>
        </el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <el-icon>
          <User/>
        </el-icon>
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="/health">
        <el-icon>
          <FirstAidKit/>
        </el-icon>
        <span>健康管理</span>
      </el-menu-item>
      <el-menu-item index="/meal">
        <el-icon>
          <Bowl/>
        </el-icon>
        <span>餐饮管理</span>
      </el-menu-item>
      <el-menu-item index="/charge">
        <el-icon>
          <Coin/>
        </el-icon>
        <span>财务管理</span>
      </el-menu-item>
      <el-menu-item index="/work">
        <el-icon>
          <CreditCard/>
        </el-icon>
        <span>工单管理</span>
      </el-menu-item>
      <el-menu-item index="/admin">
        <el-icon>
          <setting/>
        </el-icon>
        <span>员工管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="less" scoped src="../../style/menu.less">

</style>
