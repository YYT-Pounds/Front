import BaseType from "@/frame/model/base/base-type.ts";

/**
 * 功能框命名空间
 */
namespace SheetFormType {
    /**
     * 组件名称
     */
    type eType = "el-input" | "el-select" | "el-date-picker" | "el-time-picker"
    /**
     * 绑定
     */
    type props = SheetFormItemPropsModel

    /**
     * props接口
     */
    interface SheetFormItemPropsModel {
        /**
         * 提示
         */
        placeholder?: string;
        /**
         * 是否可清空
         */
        clearable?: boolean;
        /**
         * 是否禁用
         */
        disabled?: Function | BaseType.bool;
    }
}

export default SheetFormType;
