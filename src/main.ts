import { createApp } from 'vue';
import { setupPlugins } from '@/plugins';
import router from '@/router';
import App from './App.vue';
import './scss/plugins.css';
import './scss/app.scss';

function boot() {
  const app = createApp(App);
  setupPlugins(app);
  app.use(router);
  app.mount('#app');
}

boot();
