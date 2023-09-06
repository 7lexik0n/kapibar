import { defineConfig } from 'vite';

export default defineConfig({
  base: '/kapibar/',
  build: {
    target: 'es2015',
    cssMinify: true,
  }
});
