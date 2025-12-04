import { useI18n } from 'vue-i18n';

const LOCALE_STORAGE_KEY = 'locale';

export function useI18nLocale() {
  const { locale, availableLocales } = useI18n();

  const locales = computed(() => {
    const localeName: Record<string, string> = {
      en: 'English',
      jp: 'Japanese'
    };

    return availableLocales.map((loc) => ({
      label: localeName[loc],
      value: loc
    }));
  });

  function changeLocale(newLocale: string): void {
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    locale.value = newLocale;
  }

  return {
    locale,
    locales,
    changeLocale
  };
}
