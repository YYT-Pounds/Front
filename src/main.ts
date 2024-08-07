import {createApp} from "vue"

import App from "./App.vue"
import router from "@/frame/router"
import ElementPlus from "element-plus"
import zhCn from "element-plus/es/locale/lang/zh-cn.mjs"
import "element-plus/dist/index.css"
import * as Icons from '@element-plus/icons-vue'

import "@/frame/style/reset.scss"

const app = createApp(App);
app.use(ElementPlus, {locale: zhCn});
app.use(router);
for (const [name, icon] of Object.entries(Icons)) {
    app.component(name, icon);
}
app.mount("#app");

