import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server:{
    open:true,
    port:80,
    proxy:{
      'peaceful':{
        target:'http://118.178.254.102:1254',
        changeOrigin:true,
        rewrite:path=>path.replace(/^\/peaceful/,'')
      }
    }
  }
})
