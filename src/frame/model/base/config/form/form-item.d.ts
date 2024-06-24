interface FormItemBaseModel<T> {
    /**
     * 名称
     */
    label: string;
    /**
     * 组件名称
     */
    type: string;
    /**
     * 值
     */
    prop: string;
    /**
     * 绑定
     */
    props?: FormItemPropsModel;
    /**
     * 自定义渲染函数
     */
    renderFn?: Function;
}

interface FormItemPropsModel {
    /**
     * 提示
     */
    placeholder?: string;
    /**
     * 是否可清空
     */
    clearable?: boolean;
}

export type FormItemModel = FormItemBaseModel