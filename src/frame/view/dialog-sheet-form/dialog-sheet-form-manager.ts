import SheetFormManager from "@/frame/components/base/sheet-form/sheet-form-manager.ts";

/**
 * 表单框
 */
class DialogSheetFormManager<Model> {
    /**
     * 标题
     */
    title: string;
    /**
     * 表单大小
     */
    width: number;
    /**
     * 表单核心
     */
    sheetForm: SheetFormManager<Model>

    /**
     * 构造函数
     */
    constructor(title: string, width: number, sheetForm: SheetFormManager<Model>) {
        this.title = title
        this.width = width
        this.sheetForm = sheetForm
    }
}

/**
 * 暴露
 */
export default DialogSheetFormManager


