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
    type props = ProgramFormItemPropsModel

    /**
     * props接口
     */
    interface ProgramFormItemPropsModel {
        /**
         * 按钮样式
         */
        type?: BaseType.type
        /**
         * 是否有边框与背景
         */
        link?: BaseType.bool
    }
}

export default ProgramFormType;
