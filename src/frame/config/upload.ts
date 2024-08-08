/**
 * 上传文件Url
 */
import proxyUrl from "./api.ts";

/**
 * 配置路径
 */
const baseUrl = "/api/file/upload"

/**
 * 上传路径
 */
const uploadUrl = proxyUrl + baseUrl;

/**
 * 暴露
 */
export default uploadUrl;