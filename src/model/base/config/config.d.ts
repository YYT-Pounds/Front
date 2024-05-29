import {SearchFormItemModel} from "@/model/base/config/search-form/search-form-item";
import {ProgramFormItemModel} from "@/model/base/config/program-form/program-form-item";
import {TableModel} from "@/model/base/config/table/table";

interface ConfigBaseModel {
    config: ConfigItemModel
}

interface ConfigItemModel {
    /**
     * 请求地址
     */
    url: string;
    /**
     * 请求方法
     */
    method: string;
    /**
     * 自定义参数
     */
    otherParams?: any;
    /**
     * 搜索组件模型
     */
    searchForm: SearchFormItemModel[];
    /**
     * 功能组件模型
     */
    programForm?: ProgramFormItemModel[];
    /**
     * 表格组件模型
     */
    table: TableModel;
}

export type ConfigMainModel = ConfigBaseModel

export type ConfigModel = ConfigItemModel