import SearchFormManager from "./search-form-manager.ts"
import SearchForm from "./index.vue"

declare const defineSearchForm: <Model>(Model: SearchFormManager<Model>) => SearchFormManager<Model>;

export {defineSearchForm, SearchForm}

