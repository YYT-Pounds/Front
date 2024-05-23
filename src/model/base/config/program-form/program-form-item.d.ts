interface ProgramFormItemBaseModel {
    type: string,
    label: string,
    event: function,
    props?: ProgramFormItemPropsModel
}

interface ProgramFormItemPropsModel {
    placeholder?: string,
    clearable?: boolean
}

export type ProgramFormItemModel = ProgramFormItemBaseModel