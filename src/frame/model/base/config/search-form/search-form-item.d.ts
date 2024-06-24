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
    prop: string;
    /**
     * 绑定
     */
    props?: SearchFormItemPropsModel;
    /**
     * 自定义渲染函数
     */
    renderFn?: Function;
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
    /**
     * 是否禁用
     */
    disabled?: boolean;
}

export type SearchFormItemModel = SearchFormItemBaseModel