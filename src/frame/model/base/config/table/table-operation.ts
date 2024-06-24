interface TableOperationBaseModel {
    /**
     * 长度
     */
    width?: number;
    /**
     * 操作栏子项
     */
    els: TableOperationItemModel[];
}

interface TableOperationItemModel {
    /**
     * 名称
     */
    label: string;
    /**
     * 组件名称
     */
    type: string;
    /**
     * 方法
     */
    event: Function;
    /**
     * 绑定
     */
    props?: TableOperationItemPropsModel;
    /**
     * 自定义渲染函数
     */
    renderFn?: Function;
    /**
     * 是否隐藏
     */
    hide: Function | boolean;
}

interface TableOperationItemPropsModel {
    /**
     * 类型
     */
    type?: string;
    /**
     * 是否有边框
     */
    link?: boolean;
    /**
     * 尺寸
     */
    size?: string;
    /**
     * 是否关闭
     */
    disabled: Function | boolean;
}

export type TableOperationModel = TableOperationBaseModel