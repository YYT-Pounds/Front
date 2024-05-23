import {SearchFormItemModel} from "@/model/base/config/search-form/search-form-item";
import {ProgramFormItemModel} from "@/model/base/config/program-form/program-form-item";
import {TableItemModel} from "@/model/base/config/table/table-item";

interface ConfigBaseModel {
    config: ConfigItemModel
}

interface ConfigItemModel {
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
    table?: TableItemModel[];
}

export type ConfigMainModel = ConfigBaseModel

export type ConfigModel = ConfigItemModel