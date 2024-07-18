import SearchFormType from "./type";

/**
 * 搜索框
 */
class SearchFormManager<Model = AnyObject> {
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
    prop: Model;
    /**
     * 绑定
     */
    props?: SearchFormType.props;

    /**
     * 自定义渲染函数
     */
    renderFn(data: Model): void;

    /**
     * 是否隐藏
     */
    hide(data: Model): boolean;
}

/**
 * 暴露
 */
export default SearchFormManager


