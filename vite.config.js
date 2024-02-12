import viteSvgLoader from 'vite-svg-loader'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgLoader({
      svgoConfig: {
        plugins: [
          'preset-default',
          { name: 'prefixIds' },
        ],
      }
    })
  ],
})
