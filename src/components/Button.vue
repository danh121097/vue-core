<script lang="ts" setup>
interface Props {
  label?: string;
}

interface Emits {
  (e: 'click'): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
</script>
<template>
  <div class="btn" @click="emits('click')">
    <span class="text-center">{{ props.label }}</span>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 0.9rem 1.8rem;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border: 3px solid rgb(94, 117, 246);
  cursor: pointer;
  position: relative;
  background-color: rgb(138, 153, 238);
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;
}

.btn::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(94, 117, 246);
  transform: translateX(-100%);
  transition: all 0.3s;
  z-index: -1;
}

.btn:hover::before {
  transform: translateX(0);
}
</style>
