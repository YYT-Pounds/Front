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