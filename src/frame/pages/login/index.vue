<script lang="tsx">
/**
 * 登录
 */
export default {
  name: "login"
}
</script>

<script lang="tsx" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import VerificationCode from "@/frame/components/business/verification-code/index.vue"

/**
 * 定义router
 */
const router = useRouter()

/**
 * 验证码组件
 */
const verificationCodeRef = ref()

/**
 * 账号、密码
 */
const account = ref()
const password = ref()
const handleClick = () => {
  router.push({path: "/customer"})
}
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
            <input id="login_account" v-model="account" autocomplete="off" class="input-field"
                   placeholder="账号"
                   required type="text">
            <label for="login_account"></label>
          </div>
          <div class="input-wrap">
            <input id="login_password" v-model="password" autocomplete="off" class="input-field"
                   placeholder="密码"
                   required type="password">
            <label for="login_password"></label>
          </div>
          <VerificationCode ref="verificationCodeRef"/>
          <button class="login-btn" @click="handleClick">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(240, 240, 240);
}

.container {
  width: 30%;
  height: 60%;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: rgb(255, 255, 255);
}

form {
  /*设置大小*/
  max-width: 80%;
  width: 100%;
  height: 100%;
  /*居中*/
  margin: 0 auto;
  /*设置了伸缩，纵向排列，均等散开*/
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /*设置了grid布局的大小*/
  grid-column: 1/2;
  grid-row: 1/2;
}

.title {
  display: flex;
  align-items: center;
}

.title p {
  font-size: 3rem;
}

.head p {
  font-size: 2rem;
  font-weight: 600;
}

.head span {
  font-size: 0.75rem;
  font-weight: 400;
  display: inline;
}

/*输入框*/
.input-wrap {
  position: relative;
  height: 50px;
  margin-bottom: 2rem;
}

.input-field {
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0;
  font-size: 1rem;
  background: none;
  border-radius: 10px;
  text-indent: 5%;
  border-bottom: 1px solid #bbb;
}

.input-field:focus {
  background-color: white;
  color: black;
}

label {
  position: absolute;
  left: 0;
  width: 100%;
  top: 25%;
  font-size: 1rem;
}

.login-btn {
  display: inline-block;
  width: 100%;
  height: 20%;
  border: none;
  border-radius: 2rem;
  margin-bottom: 2rem;
}
</style>