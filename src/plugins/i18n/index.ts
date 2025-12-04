import { createI18n } from 'vue-i18n';
import messages from '@/i18n';
import type { App } from 'vue';

export type MessageLanguages = keyof typeof messages;
export type MessageSchema = (typeof messages)['en'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}

const LOCALE_STORAGE_KEY = 'locale';
const DEFAULT_LOCALE = 'en';

export function setupI18n(app: App) {
  const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);

  const i18n = createI18n<typeof messages, MessageLanguages>({
    messages,
    legacy: false,
    warnHtmlMessage: false,
    warnHtmlInMessage: 'off',
    locale: savedLocale || DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    missingWarn: false,
  });

  app.use(i18n);
}
