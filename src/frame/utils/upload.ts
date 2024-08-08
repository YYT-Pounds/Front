/**
 * 上传文件
 */
import {ElMessage} from "element-plus";

/**
 * 上传方法
 */
async function uploadFile(url: string, params: any) {
    if (!url || !params) {
        ElMessage.warning("上传文件参数异常")
    }
    console.log(url, params)
}

/**
 * 暴露
 */
export {
    uploadFile
}