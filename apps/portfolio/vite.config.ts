import federation from '@originjs/vite-plugin-federation';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'portfolio',
      filename: 'remoteEntry.js',
      exposes: {
        './portfolio': {
          import: './src/App.tsx',
          dontAppendStylesToHead: false,
        },
      },
      shared: ['react'],
    }),
  ],
  server: {
    port: 1405,
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
