<template>
  <q-item
    clickable
    class="item-option bg-theme-paper q-pa-sm border-radius-sm flex column items-center cursor-pointer"
    :to="{ name: routeName }"
  >
    <q-icon :name="icon" size="3em" />
    <p class="q-ma-xs">{{ te(name) ? $t(name) : name }}</p>
  </q-item>
</template>
<script setup lang="ts">
  import { useI18n } from 'src/boot/i18n'

  interface IProp {
    name: string
    icon: string
    routeName: string
  }

  defineProps<IProp>()
  const { te } = useI18n()
</script>
<style lang="scss">
.item-option {
  user-select: none;
}
</style>
