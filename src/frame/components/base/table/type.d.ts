import BaseType from "@/frame/model/base/base-type.ts";

/**
 * 功能框命名空间
 */
namespace TableType {

    type eType = "el-button"

    /**
     * 表格样式模型
     */
    interface TablePropsModel {
        /**
         * 是否开启边框
         */
        border?: BaseType.bool
        /**
         * 是否开启斑马纹
         */
        stripe?: BaseType.bool
    }

    /**
     * 表格页码模型
     */
    interface TablePageModel {
        /**
         * 是否开启
         */
        enable?: BaseType.bool
        /**
         * 每页显示多少条数据
         */
        pageSize?: number
    }

    /**
     * 操作栏样式类型
     */
    type type = "primary" | "info" | "danger" | "warning" | ""

    /**
     * 操作栏样式大小
     */
    type size = "small" | "large"

    /**
     * 操作栏样式
     */
    interface TableOperationItemPropsModel {
        /**
         * 类型
         */
        type?: type
        /**
         * 是否有边框
         */
        link?: BaseType.bool
        /**
         * 尺寸
         */
        size?: size
        /**
         * 是否关闭
         */
        disabled?: Function | BaseType.bool
    }

    /**
     * 表格子项样式
     */
    interface TableItemPropsModel {
        /**
         * 是否排序
         */
        sortable?: BaseType.bool
    }
}

export default TableType
