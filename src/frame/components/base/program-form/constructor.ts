import ProgramFormManager from "./program-form-manager.ts"
import SearchForm from "./index.vue"

const defineSearchForm = <Model>(Manager: ProgramFormManager<Model>): ProgramFormManager<Model> => {
    return Manager
}

export {defineSearchForm, SearchForm}