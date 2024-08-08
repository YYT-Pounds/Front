import BaseType from "@/frame/model/base/base-type.ts";

/**
 * 功能框命名空间
 */
namespace SheetFormType {
    /**
     * 组件名称
     */
    type eType = "el-input" | "el-select" | "el-date-picker" | "el-time-picker" | "el-upload"
    /**
     * 绑定
     */
    type props = SheetFormItemPropsModel
    /**
     * 样式类型
     */
    type styleClass = "upload-demo" | "avatar-uploader"
    /**
     * 上传样式
     */
    type listType = "picture-card"

    /**
     * props接口
     */
    interface SheetFormItemPropsModel {
        /**
         * 提示
         */
        placeholder?: string
        /**
         * 是否可清空
         */
        clearable?: BaseType.bool
        /**
         * 样式类型
         */
        class?: styleClass
        /**
         * 上传地址
         */
        action?: string
        /**
         * 上传样式
         */
        listType?: listType
        /**
         * 是否禁用
         */
        disabled?: Function | BaseType.bool
    }
}

export default SheetFormType;
