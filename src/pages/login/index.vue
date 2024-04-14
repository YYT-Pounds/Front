<script>
export default{
  name:"login"
}
</script>

<script setup>
import {reactive} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {ElMessage} from "element-plus";

const storeGroup = reactive({
  store:useStore(),
})

const routerGroup = reactive({
  router:useRouter()
})

const loginGroup = reactive({
  account: "",
  password: "",
  async login() {
    await storeGroup.store.dispatch("login",{account:this.account, password:this.password})
    if (storeGroup.store.state.user.userState.loginState){
      ElMessage.success("登录成功");
      await routerGroup.router.push({name: "home"});
    }else{
      ElMessage.warning(storeGroup.store.state.user.failCode);
    }
  }
})
</script>

<template>
  <div class="login">
    <div class="container">
      <form class="login-form" onsubmit="return false">
        <div class="head" style="text-align: center">
          <p>安沁后台管理系统</p>
        </div>
        <div class="actual-from">
          <div class="input-wrap">
            <input id="login_account" v-model="loginGroup.account" autocomplete="off" class="input-field" minlength="6"
                   placeholder="账号"
                   required type="text">
            <label for="login_account"></label>
          </div>
          <div class="input-wrap">
            <input id="login_password" v-model="loginGroup.password" autocomplete="off" class="input-field"
                   placeholder="密码"
                   required type="password">
            <label for="login_password"></label>
          </div>
          <button class="login-btn" @click="loginGroup.login()">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped src="../../style/login.css">

</style>
