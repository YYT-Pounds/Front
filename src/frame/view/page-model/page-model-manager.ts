import SearchFormManager from "@/frame/components/base/search-form/search-form-manager.ts";
import ProgramFormManager from "@/frame/components/base/program-form/program-form-manager.ts";
import TableManager from "@/frame/components/base/table/table-manager.ts";
import DialogSheetFormManager from "@/frame/view/dialog-sheet-form/dialog-sheet-form-manager.ts";

/**
 * 表单框
 */
class PageModelManager<Model> {
    /**
     * 请求地址
     */
    url: string
    /**
     * get请求地址
     */
    getUrl?: string
    /**
     * post请求地址
     */
    postUrl?: string
    /**
     * put请求地址
     */
    putUrl?: string
    /**
     * delete请求地址
     */
    deleteUrl?: string
    /**
     * 自定义参数
     */
    otherParams?: Model
    /**
     * 搜索组件模型
     */
    searchForm?: SearchFormManager<Model>
    /**
     * 功能组件模型
     */
    programForm?: ProgramFormManager
    /**
     * 表格组件模型
     */
    table: TableManager<Model>
    /**
     * 表单组件模型
     */
    form?: DialogSheetFormManager<Model>

    /**
     * 构造函数
     */
    constructor(url: string, table: TableManager<Model>) {
        this.url = url
        this.table = table
    }
}

/**
 * 暴露
 */
export default PageModelManager


