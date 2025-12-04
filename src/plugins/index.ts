import { setupDayjs } from './dayjs';
import { setupPinia } from './pinia';
import { setupI18n } from './i18n';
import type { App } from 'vue';

export function setupPlugins(app: App) {
  setupPinia(app);
  setupI18n(app);
  setupDayjs();
}
