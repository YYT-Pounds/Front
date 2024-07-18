import BaseType from "@/frame/model/base/base-type.ts";

/**
 * element组件
 */
namespace SearchFormType {
    /**
     * 组件名称
     */
    type type = "el-input" | "el-select" | "el-date-picker" | "el-time-picker"
    /**
     * 绑定
     */
    type props = SearchFormTypeProps
}

interface SearchFormTypeProps {
    /**
     * 提示
     */
    placeholder?: string;
    /**
     * 是否可清空
     */
    clearable?: BaseType.bool
    /**
     * 是否禁用
     */
    disabled?: BaseType.bool | Function
}

/**
 * 布尔
 */

export default SearchFormType;
