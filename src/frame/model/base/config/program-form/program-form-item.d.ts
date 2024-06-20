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
    /**
     * 自定义渲染函数
     */
    renderFn?: Function;
}

interface ProgramFormItemPropsModel {
    /**
     * 按钮样式
     */
    type?: string;
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