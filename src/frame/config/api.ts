/**
 * 开发环境
 */
const development = "/development"
/**
 * 线上环境
 */
const production = "/production"

/**
 * 判断是否为开发环境
 */
const isDevelopment = process.env.NODE_ENV === "development"

/**
 * 环境配置
 */
const baseUrl = isDevelopment ? development : production

/**
 * 项目名称
 */
const programName = "/anqin"

/**
 * 代理请求地址
 */
const proxyUrl = baseUrl + programName

/**
 * 暴露
 */
export default proxyUrl