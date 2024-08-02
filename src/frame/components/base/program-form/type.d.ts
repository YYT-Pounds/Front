import BaseType from "@/frame/model/base/base-type.ts";

/**
 * 功能框命名空间
 */
namespace ProgramFormType {
    /**
     * 组件名称
     */
    type eType = "el-button"
    /**
     * 绑定
     */
    type props = ProgramFormItemPropsModel;

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
        clearable?: BaseType.bool;
    }
}

export default ProgramFormType;
