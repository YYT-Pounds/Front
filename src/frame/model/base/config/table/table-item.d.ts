interface TableItemBaseModel {
    /**
     * 表头名称
     */
    label: string;
    /**
     * 值
     */
    prop: string;
    /**
     * 宽度
     */
    width?: number;
    /**
     * 最小宽度
     */
    minWidth?: number;
    /**
     * 绑定
     */
    props?: TableItemPropsModel;
}

interface TableItemPropsModel {
    /**
     * 是否排序
     */
    sortable?: boolean;
}

export type TableItemModel = TableItemBaseModel