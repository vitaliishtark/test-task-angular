import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  resolve: {
    alias: {
      'firebase/app': 'firebase/app/dist/index.esm.js',
      'firebase/auth': 'firebase/auth/dist/index.esm.js'
    }
  }
});
