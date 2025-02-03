// vite.config.js
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  server: {
    allowedHosts: ['passarosdopantanal.com.br', 'www.passarosdopantanal.com.br'] // Add your domain here
  }
});
