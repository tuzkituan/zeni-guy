import federation from '@originjs/vite-plugin-federation';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'zeni-ui-components',
      filename: 'remoteEntry.js',
      exposes: {
        './app': {
          import: './src/App.tsx',
          dontAppendStylesToHead: false,
        },
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    port: 1406,
  },
  preview: {
    port: 1406,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
