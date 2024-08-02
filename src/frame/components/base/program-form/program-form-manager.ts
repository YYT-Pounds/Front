import ProgramFormType from "./type.ts";

/**
 * 功能框
 */
class ProgramFormManager {
    /**
     * 渲染列表
     */
    els: ProgramFormItemManager[]

    /**
     * 构造函数
     */
    constructor(els: ProgramFormItemManager[]) {
        this.els = els
    }
}

/**
 * 搜索框 - 子组件
 */
class ProgramFormItemManager {
    /**
     * element组件名称
     */
    eType: ProgramFormType.eType
    /**
     * 名称
     */
    label: String
    /**
     * 绑定的方法
     */
    event: Function
    /**
     * 绑定
     */
    props?: ProgramFormType.props
    /**
     * 渲染函数
     */
    renderFn?: Function

    /**
     * 构造函数
     */
    constructor(eType: ProgramFormType.eType, label: String, event: Function) {
        this.eType = eType;
        this.label = label;
        this.event = event;
    }
}

/**
 * 暴露
 */
export default ProgramFormManager


