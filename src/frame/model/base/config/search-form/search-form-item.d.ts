/**
 * search组件列表
 */
type type = "el-input";

/**
 * search组件
 */
interface SearchFormItemBaseModel {
    /**
     * 组件名称
     */
    type: type;
    /**
     * 名称
     */
    label?: string;
    /**
     * 值
     */
    prop: string;
    /**
     * 绑定
     */
    props?: SearchFormItemPropsModel;
    /**
     * 自定义渲染函数
     */
    renderFn?: Function;
    /**
     * 是否显示
     */
    hide?: Function | boolean
}

interface SearchFormItemPropsModel {
    /**
     * 提示
     */
    placeholder?: string;
    /**
     * 是否可清空
     */
    clearable?: "true" | "false";
    /**
     * 是否禁用
     */
    disabled?: Function | boolean;
}

export type SearchFormItemModel = SearchFormItemBaseModel