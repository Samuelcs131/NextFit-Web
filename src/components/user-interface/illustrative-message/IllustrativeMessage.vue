<template>
  <div class="full-width row column flex-center text-accent q-gutter-sm">
    <q-img
      class="image-ilustrative"
      :alt="message"
      :src="illustrativeMessageImage[illustration]"
      :width="width || '120px'"
      :height="height"
    />

    <span class="q-mt-sm text-bold text-subtitle1 text-grey">
      {{ message }}
    </span>
  </div>
</template>

<script lang="ts" setup>
  import { illustrativeMessageImage } from './constants/illustrativeMessageImage'
  import { illustrativeOptions } from './enums/illustrativeOptions'

  interface IProps {
    illustration: `${illustrativeOptions}`
    message?: string
    opacity?: number
    width?: string
    height?: string
  }

  defineProps<IProps>()
</script>

<style lang="scss" scoped>
.image-ilustrative {
  // max-width: 12rem;
  opacity: v-bind(opacity);
}
</style>
