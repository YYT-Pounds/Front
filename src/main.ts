import {createApp} from "vue"

import App from "./App.vue"
import router from "@/frame/router"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as Icons from '@element-plus/icons-vue'

import "@/frame/style/reset.scss"

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
for (const [name, icon] of Object.entries(Icons)) {
    app.component(name, icon);
}
app.mount("#app");

