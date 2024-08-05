import TableType from "./type.ts";
import BaseType from "@/frame/model/base/base-type.ts";

/**
 * 功能框
 */
class TableManager<Model> {
    /**
     * 表格样式
     */
    props?: TableType.TablePropsModel;
    /**
     * 分页
     */
    page?: TableType.TablePageModel;
    /**
     * 是否开启多选
     */
    selection?: BaseType.bool;
    /**
     * 操作栏
     */
    operation?: TableOperationModel<Model>;
    /**
     * 渲染列表
     */
    els: TableItemManager<Model>[]

    /**
     * 构造函数
     */
    constructor(els: TableItemManager<Model>[]) {
        this.els = els
    }
}

/**
 * 操作栏模型
 */
interface TableOperationModel<Model> {
    /**
     * 长度
     */
    width?: number;
    /**
     * 绑定数据前操作
     */
    bindData?: Function;
    /**
     * 提交数据前操作
     */
    beforeSubmit?: Function;
    /**
     * 操作栏子项
     */
    els: TableOperationItemManager<Model>[];
}

/**
 * 操作栏实例
 */
class TableOperationItemManager<Model> {
    /**
     * 名称
     */
    label: string
    /**
     * 组件名称
     */
    eType: TableType.eType
    /**
     * 方法
     */
    event: string
    /**
     * 绑定
     */
    props?: TableType.TableOperationItemPropsModel
    /**
     * 自定义渲染函数
     */
    renderFn?: (this: any, row: Model) => JSX.Element
    /**
     * 是否隐藏
     */
    hide?: Function | BaseType.bool

    /**
     * 构造函数
     */
    constructor(label: string, eType: TableType.eType, event: string) {
        this.label = label
        this.eType = eType
        this.event = event
    }
}

/**
 * 表格子项实例
 */
class TableItemManager<Model> {
    /**
     * 表头名称
     */
    label: string
    /**
     * 值
     */
    prop: keyof Model
    /**
     * 宽度
     */
    width?: number
    /**
     * 最小宽度
     */
    minWidth?: number
    /**
     * 绑定
     */
    props?: TableType.TableItemPropsModel;
    /**
     * 自定义渲染函数
     */
    renderFn?: Function;

    /**
     * 构造函数
     */
    constructor(label: string, prop: keyof Model) {
        this.label = label
        this.prop = prop
    }
}

/**
 * 暴露
 */
export default TableManager


