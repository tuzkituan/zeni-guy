// vite.config.ts
import federation from "file:///C:/Users/LEWIS/Desktop/my/zeni-guy/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/LEWIS/Desktop/my/zeni-guy/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/LEWIS/Desktop/my/zeni-guy/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    federation({
      name: "main-app",
      remotes: {
        portfolio: "http://localhost:1405/assets/remoteEntry.js",
        zeni_ui_components: "http://localhost:1406/assets/remoteEntry.js"
      },
      shared: ["react"]
    })
  ],
  server: {
    port: 4e3
    // open: true,
  },
  preview: {
    port: 1405
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  publicDir: "../apps/portfolio/public"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMRVdJU1xcXFxEZXNrdG9wXFxcXG15XFxcXHplbmktZ3V5XFxcXG1haW4tYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMRVdJU1xcXFxEZXNrdG9wXFxcXG15XFxcXHplbmktZ3V5XFxcXG1haW4tYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9MRVdJUy9EZXNrdG9wL215L3plbmktZ3V5L21haW4tYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IGZlZGVyYXRpb24gZnJvbSAnQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb24nO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIGZlZGVyYXRpb24oe1xyXG4gICAgICBuYW1lOiAnbWFpbi1hcHAnLFxyXG4gICAgICByZW1vdGVzOiB7XHJcbiAgICAgICAgcG9ydGZvbGlvOiAnaHR0cDovL2xvY2FsaG9zdDoxNDA1L2Fzc2V0cy9yZW1vdGVFbnRyeS5qcycsXHJcbiAgICAgICAgemVuaV91aV9jb21wb25lbnRzOiAnaHR0cDovL2xvY2FsaG9zdDoxNDA2L2Fzc2V0cy9yZW1vdGVFbnRyeS5qcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNoYXJlZDogWydyZWFjdCddLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDQwMDAsXHJcbiAgICAvLyBvcGVuOiB0cnVlLFxyXG4gIH0sXHJcbiAgcHJldmlldzoge1xyXG4gICAgcG9ydDogMTQwNSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBtb2R1bGVQcmVsb2FkOiBmYWxzZSxcclxuICAgIHRhcmdldDogJ2VzbmV4dCcsXHJcbiAgICBtaW5pZnk6IGZhbHNlLFxyXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcclxuICB9LFxyXG4gIHB1YmxpY0RpcjogJy4uL2FwcHMvcG9ydGZvbGlvL3B1YmxpYycsXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlVLE9BQU8sZ0JBQWdCO0FBQ3hWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxvQkFBb0I7QUFBQSxNQUN0QjtBQUFBLE1BQ0EsUUFBUSxDQUFDLE9BQU87QUFBQSxJQUNsQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsRUFFUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsV0FBVztBQUNiLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
