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
    label: string
    /**
     * 绑定的方法
     */
    event: string
    /**
     * 绑定
     */
    props?: ProgramFormType.props
    /**
     * 渲染函数
     */
    renderFn?: (this: any) => JSX.Element

    /**
     * 构造函数
     */
    constructor(eType: ProgramFormType.eType, label: string, event: string) {
        this.eType = eType;
        this.label = label;
        this.event = event;
    }
}

/**
 * 暴露
 */
export default ProgramFormManager


