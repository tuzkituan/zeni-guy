import federation from '@originjs/vite-plugin-federation';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import DynamicPublicDirectory from 'vite-multiple-assets';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'main-app',
      remotes: {
        portfolio: 'http://localhost:1405/assets/remoteEntry.js',
        zeni_ui_components: 'http://localhost:1406/assets/remoteEntry.js',
      },
      shared: ['react'],
    }),
    DynamicPublicDirectory(['public', '../apps/portfolio/public'], {
      ssr: false,
    }),
  ],
  server: {
    port: 4000,
    // open: true,
  },
  preview: {
    port: 1405,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
