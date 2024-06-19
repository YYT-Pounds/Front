import PageIndex from '@/frame/pages/index/index.vue'
import {App} from "vue"

export default PageIndex.install = (app: App) => {
    app.component("PageIndex", PageIndex)
}