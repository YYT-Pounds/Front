import DialogSheetFormManager from "./dialog-sheet-form-manager.ts"
import DialogSheetForm from "./index.vue"

const defineDialogSheetForm = <Model>(Manager: DialogSheetFormManager<Model>): DialogSheetFormManager<Model> => {
    return Manager
}

export {defineDialogSheetForm, DialogSheetForm}