<script>
export default {
  name: "index"
}
</script>

<script setup>
import Menu from "../menu/index.vue";
import {useStore} from "vuex";
import {reactive} from "vue";

const storeGroup = reactive({
  store: useStore(),
})
</script>

<template>
  <div class="container">
    <Menu v-if="storeGroup.store.state.user.userState.loginState"/>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped src="../../style/index.less">

</style>
