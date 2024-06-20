import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import path from 'path'
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";

/**
 * 基础路径
 */
// @ts-ignore
const projectRootDir = path.resolve(__dirname)

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
            'peaceful': {
                target: 'http://118.178.254.102:1254',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/peaceful/, '')
            }
        }
    }
})
