<script lang="ts" setup>
import { cn } from '@/utils';

const { t } = useI18n();
</script>
<template>
  <div
    :class="
      cn(
        'w-screen h-screen',
        'flex flex-col justify-center items-center gap-5 p-5',
        'bg-red-400'
      )
    "
  >
    <h1
      class="text-4xl font-bold text-white text-center"
      v-html="t('ABOUT.TITLE')"
    />

    <Button :label="t('ABOUT.GO_TO_HOME')" @click="$router.push('/')" />
  </div>
</template>
