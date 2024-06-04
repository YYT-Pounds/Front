import PageLayout from "../components/page-layout/index.vue"
import {App} from "vue";

export default PageLayout.install = (app: App) => {
    app.component("PageLayout", PageLayout)
}