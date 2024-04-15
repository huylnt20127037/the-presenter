import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/the-presenter",
  plugins: [react(), svgr({
    exportAsDefault: true
  }),],
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  },
})
