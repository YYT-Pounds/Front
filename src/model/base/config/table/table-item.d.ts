interface TableItemBaseModel {
    label: string,
    prop: any,
    width: number,
    props?: TableItemPropsModel
}

interface TableItemPropsModel {
    sortable?: boolean
}

export type TableItemModel = TableItemBaseModel