interface SearchFormItemBaseModel {
    type: string,
    label?: string,
    prop: any,
    props?: SearchFormItemPropsModel
}

interface SearchFormItemPropsModel {
    placeholder?: string,
    clearable?: boolean
}

export type SearchFormItemModel = SearchFormItemBaseModel