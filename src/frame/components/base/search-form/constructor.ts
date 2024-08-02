import SearchFormManager from "./search-form-manager.ts"
import SearchForm from "./index.vue"

const defineSearchForm = <Model>(Manager: SearchFormManager<Model>): SearchFormManager<Model> => {
    return Manager
}

export {defineSearchForm, SearchForm}