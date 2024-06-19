import {TableItemModel} from "@/model/base/config/table/table-item";
import {TableOperationModel} from "@/model/base/config/table/table-operation";

interface TableBaseModel {
    /**
     * 绑定
     */
    props?: TablePropsModel;
    /**
     * 分页
     */
    page: TablePageModel;
    /**
     * 是否开启多选
     */
    selection?: boolean;
    /**
     * 操作栏
     */
    operation?: TableOperationModel;
    /**
     * 表格
     */
    els: TableItemModel[]
}

interface TablePropsModel {
    /**
     * 是否开启边框
     */
    border?: boolean;
    /**
     * 是否开启斑马纹
     */
    stripe?: boolean;
}

interface TablePageModel {
    /**
     * 是否开启
     */
    enable: boolean;
    /**
     * 每页显示多少条数据
     */
    pageSize?: number;
}

export type TableModel = TableBaseModel