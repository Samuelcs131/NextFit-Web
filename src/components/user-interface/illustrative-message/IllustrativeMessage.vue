<template>
  <div class="full-width row column flex-center text-accent q-gutter-sm">
    <q-img
      class="image-ilustrative"
      :alt="message"
      :src="illustrativeMessageImage[illustration]"
      :width="width"
      :height="height"
    />

    <span class="q-mt-lg text-subtitle1 text-grey">
      {{ message }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { illustrativeMessageImage } from './constants/illustrativeMessageImage';
import { illustrativeOptions } from './enums/illustrativeOptions'

defineProps({
  message: {
    type: String,
    required: false,
  },
  opacity: {
    type: Number,
    required: false,
  },
  illustration: {
    type: String as PropType<`${illustrativeOptions}`>,
    required: true,
  },
  width: {
    type: String,
    default: '120px'
  },
  height: {
    type: String,
  }
})
</script>

<style lang="scss" scoped>
.image-ilustrative {
  // max-width: 12rem;
  opacity: v-bind(opacity);
}
</style>
