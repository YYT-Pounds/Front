import SheetFormType from "./type.ts";

/**
 * 功能框
 */
class SheetFormManager<Model> {
    /**
     * 表单子项label长度
     */
    labelWidth: string;
    /**
     * 绑定数据前操作
     */
    bindData?: Function;
    /**
     * 提交数据前操作
     */
    beforeSubmit?: Function;
    /**
     * 渲染列表
     */
    els: SheetFormItemManager<Model>[]

    /**
     * 构造函数
     */
    constructor(els: SheetFormItemManager<Model>[], labelWidth: string) {
        this.els = els
        this.labelWidth = labelWidth
    }
}

/**
 * 搜索框 - 子组件
 */
class SheetFormItemManager<Model> {
    /**
     * 名称
     */
    label: string;
    /**
     * 组件名称
     */
    eType: SheetFormType.eType;
    /**
     * 值
     */
    prop: keyof Model;
    /**
     * 绑定
     */
    props?: SheetFormType.props;
    /**
     * 自定义渲染函数
     */
    renderFn?: (this: any) => JSX.Element;
    /**
     * 是否显示
     */
    hide?: Function | boolean;

    /**
     * 构造函数
     */
    constructor(label: string, eType: SheetFormType.eType, prop: keyof Model) {
        this.eType = eType
        this.label = label
        this.prop = prop
    }
}

/**
 * 暴露
 */
export default SheetFormManager


