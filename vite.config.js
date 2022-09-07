import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const path = process.env.PROJECT_PATH;

  return {
    plugins: [react()],
    base: path ? path : '/',
  };
});
