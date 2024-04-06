import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './app/App': './src/app/App.tsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'antd', 'i18next', 'zustand', 'typescript'],
    }),
  ],
  server: {
    port: 5001,
  },
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
