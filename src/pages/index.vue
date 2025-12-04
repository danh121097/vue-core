<script lang="ts" setup>
import { cn } from '@/utils';

const now = useNow();

const { t } = useI18n();
const { locales, locale, changeLocale } = useI18nLocale();
</script>

<template>
  <div
    :class="
      cn(
        'w-screen h-screen',
        'flex flex-col justify-center items-center gap-5 p-5',
        'bg-red-400',
        'relative',
      )
    "
  >
    <div :class="cn('absolute top-5 right-5', 'flex items-center gap-2 cursor-pointer')">
      <div v-for="l in locales" :key="l.value" class="" @click="changeLocale(l.value)">
        <span
          :class="
            cn(
              'px-3 py-1 rounded',
              l.value === locale
                ? 'bg-white text-lime-500 font-semibold'
                : 'bg-white/50 text-white',
            )
          "
        >
          {{ l.label }}
        </span>
      </div>
    </div>

    <h1 class="text-4xl font-bold text-white text-center" v-html="t('HOME.TITLE')" />

    <Button :label="t('HOME.GO_TO_ABOUT')" @click="$router.push('/about')" />

    <div
      class="text-white text-center"
      v-html="
        t('HOME.CURRENT_TIME', {
          TIME: new Date(now).toLocaleTimeString(),
        })
      "
    />
  </div>
</template>
