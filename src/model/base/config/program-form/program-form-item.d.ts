interface ProgramFormItemBaseModel {
    /**
     * 组件名称
     */
    type: string;
    /**
     * 名称
     */
    label: string;
    /**
     * 绑定的方法
     */
    event: function;
    /**
     * 绑定
     */
    props?: ProgramFormItemPropsModel;
}

interface ProgramFormItemPropsModel {
    /**
     * 提示文本
     */
    placeholder?: string;
    /**
     * 是否可清空
     */
    clearable?: boolean;
}

export type ProgramFormItemModel = ProgramFormItemBaseModel