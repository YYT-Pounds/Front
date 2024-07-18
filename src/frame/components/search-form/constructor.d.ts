import SearchFormManager from "./search-form-manager.d.ts"
import SearchForm from "./index.vue"

declare const defineSearchForm: <Model extends String>(Model: SearchFormManager) => SearchFormManager;

export {defineSearchForm, SearchForm}

