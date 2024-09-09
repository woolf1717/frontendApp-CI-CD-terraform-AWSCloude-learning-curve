import { defineConfig, splitVendorChunkPlugin } from 'vite';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import packageJson from './package.json';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  build: {
    sourcemap: true,
  },
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  server: {
    port: 3000,
    cors: false,
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 50,
      },
    }),
  ],
  orgin: [],
});
