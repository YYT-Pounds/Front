import SearchFormType from "./type.ts";

/**
 * 搜索框
 */
class SearchFormManager<Model> {
    /**
     * 渲染列表
     */
    els: SearchFormItemManager<Model>[]

    /**
     * 构造函数
     */
    constructor(els: SearchFormItemManager<Model>[]) {
        this.els = els
    }
}

/**
 * 搜索框 - 子组件
 */
class SearchFormItemManager<Model> {
    /**
     * 组件名称
     */
    eType: SearchFormType.eType
    /**
     * 名称
     */
    label?: string
    /**
     * 值
     */
    prop: keyof Model
    /**
     * 绑定
     */
    props?: SearchFormType.SearchFormTypePropsModel<Model>
    /**
     * 自定义渲染函数
     */
    renderFn?: (this: any, data: Model) => JSX.Element
    /**
     * 是否隐藏
     */
    hide?: (data: Model) => boolean

    /**
     * 构造函数
     */
    constructor(eType: SearchFormType.eType, prop: keyof Model) {
        this.eType = eType
        this.prop = prop
    }
}

/**
 * 暴露
 */
export default SearchFormManager


