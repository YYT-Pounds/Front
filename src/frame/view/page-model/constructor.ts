import PageModelManager from "./page-model-manager.ts"
import PageModel from "./index.vue"

const definePageModel = <Model>(Manager: PageModelManager<Model>): PageModelManager<Model> => {
    return Manager
}

export {definePageModel, PageModel}