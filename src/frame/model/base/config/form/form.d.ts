import {FormItemModel} from "@/frame/model/base/config/form/form-item";

interface FormBaseModel {
    /**
     * 表单子项label长度
     */
    labelWidth: string;
    /**
     * 表单宽度
     */
    width: string;
    /**
     * 标题
     */
    title: string;
    /**
     * 子项
     */
    els: FormItemModel[];
}

export type FormModel = FormBaseModel