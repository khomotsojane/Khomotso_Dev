import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
   ],
   base: process.env.NODE_ENV === 'production' ? '/' : '/',
   build: {
    outDir: "dist", 
    emptyOutDir: true,
  },
   server: {
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      port: 5173
    }
  },
});
