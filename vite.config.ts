import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
// @ts-ignore
import path from 'path'


/**
 * 基础路径
 */
// @ts-ignore
const projectRootDir = path.resolve(__dirname)

/**
 * 本地地址
 */
// const baseUrl = "http://localhost:8610"
/**
 * 远程地址
 */
const baseUrl = "https://yuyiting.work"

export default defineConfig({
    plugins: [vue(), vueJsxPlugin()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(projectRootDir, 'src')
            },
        ],
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json', '.vue', 'scss']
    },
    server: {
        open: true,
        port: 80,
        proxy: {
            '/development': {
                target: baseUrl,
                changeOrigin: true,
                rewrite: path => path.replace(/^\/development/, '')
            },
            '/production': {
                target: baseUrl,
                changeOrigin: true,
                rewrite: path => path.replace(/^\/production/, '')
            }
        }
    }
})
