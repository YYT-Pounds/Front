<script>
export default {
  name: "context"
}
</script>

<script setup>
import {reactive, watch} from "vue"
import {useStore} from "vuex"
import Header from "../header/index.vue";

const storeGroup = reactive({
  store: useStore(),
})

const contextGroup = reactive({
  isCollapse: storeGroup.store.state.menu.isCollapse,
})

watch(() => storeGroup.store.state.menu.isCollapse, function () {
  contextGroup.isCollapse = storeGroup.store.state.menu.isCollapse;
})
</script>

<template>
  <div :class="{active:contextGroup.isCollapse}" class="context">
    <Header/>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped src="../../style/context.less">

</style>
