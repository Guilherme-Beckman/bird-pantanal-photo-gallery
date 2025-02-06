// vite.config.js
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  server: {
    allowedHosts: ['passarosdopantanal.com.br', 'localhost', '0.0.0.0']
  }
});
