import SheetFormManager from "./sheet-form-manager.ts"
import SheetForm from "./index.vue"

const defineSheetForm = <Model>(Manager: SheetFormManager<Model>): SheetFormManager<Model> => {
    return Manager
}

export {defineSheetForm, SheetForm}