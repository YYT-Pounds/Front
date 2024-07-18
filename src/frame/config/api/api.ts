/**
 * 开发环境
 */
const development = "/development"
/**
 * 线上环境
 */
const official = "/official"

/**
 * 判断是否为开发环境
 */
const isDevelopment = process.env.NODE_ENV === "development"

/**
 * 设置环境
 */
const production = isDevelopment ? development : official

/**
 * 暴露
 */
export default production