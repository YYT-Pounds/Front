import PageAside from "../components/page-aside/index.vue"
import {App} from "vue";

export default PageAside.install = (app: App) => {
    app.component("PageAside", PageAside)
}