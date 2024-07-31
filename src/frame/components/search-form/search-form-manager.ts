import SearchFormType from "./type.ts";

/**
 * 搜索框
 */
class SearchFormManager<Model> {
    /**
     * 组件名称
     */
    type: SearchFormType.type;
    /**
     * 名称
     */
    label?: String;
    /**
     * 值
     */
    prop: keyof Model;
    /**
     * 绑定
     */
    props?: SearchFormType.props;

    /**
     * 构造函数
     */
    constructor(type: SearchFormType.type, prop: keyof Model) {
        this.type = type;
        this.prop = prop;
    }


    /**
     * 自定义渲染函数
     */
    renderFn?(data: Model): void;

    /**
     * 是否隐藏
     */
    hide?(data: Model): boolean;
}

/**
 * 暴露
 */
export default SearchFormManager


