interface FormItemBaseModel {
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
    /**
     * 是否显示
     */
    hide?: Function | boolean;
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
    /**
     * 是否禁用
     */
    disabled?: Function | boolean;
}

export type FormItemModel = FormItemBaseModel