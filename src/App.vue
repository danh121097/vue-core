<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const { locale } = useI18n();

// Watch for route changes and update i18n locale
watch(
  () => route.params.locale,
  (newLocale) => {
    if (newLocale && typeof newLocale === 'string') {
      locale.value = newLocale;
    }
  },
  { immediate: true }
);
</script>

<template>
  <RouterView />
</template>
