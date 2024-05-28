interface SearchFormItemBaseModel {
    /**
     * 组件名称
     */
    type: string;
    /**
     * 名称
     */
    label?: string;
    /**
     * 值
     */
    prop: any;
    /**
     * 绑定
     */
    props?: SearchFormItemPropsModel;
}

interface SearchFormItemPropsModel {
    /**
     * 提示
     */
    placeholder?: string;
    /**
     * 是否可清空
     */
    clearable?: boolean;
}

export type SearchFormItemModel = SearchFormItemBaseModel