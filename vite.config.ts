import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import path from 'path'

/**
 * 基础路径
 */
// @ts-ignore
const projectRootDir = path.resolve(__dirname)

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(projectRootDir, 'src')
            },

        ]
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
