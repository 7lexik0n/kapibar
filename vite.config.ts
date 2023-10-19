import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
    cssMinify: true,
  },
  mode: 'production',
});
