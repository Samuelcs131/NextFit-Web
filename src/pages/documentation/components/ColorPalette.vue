<template>
  <div :class="`rounded-borders col-12 col-sm-${colContainer}`">
    <h4 class="text-h6 q-my-none q-mb-sm">{{ name }}</h4>

    <div class="row q-col-gutter-sm">
      <div :class="`col-10 col-sm-${colMain}`">
        <div
          :class="`card-color-main rounded-borders ${borded && 'borded'}`"
          :style="cardColorMain"
        >
          <q-tooltip self="center middle">{{ colorMain }}</q-tooltip>
        </div>
      </div>

      <div :class="`col-2 col-sm-${colAccents}`">
        <div class="container-accent-colors gap-sm">
          <div
            v-for="(accentItem, idx) in accentColors"
            :key="idx"
            class="accent-color rounded-borders"
            :style="{ background: accentItem, height: '24px' }"
          >
            <q-tooltip self="center middle">{{ accentItem }}</q-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  colorMain: {
    type: String,
    required: true,
  },
  shadowColorMain: {
    type: String,
    required: false,
  },
  accentColors: {
    type: Array as PropType<string[]>,
  },
  colContainer: {
    type: Number,
    default: 6,
  },
  colMain: {
    type: Number,
    default: 11,
  },
  colAccents: {
    type: Number,
    default: 1,
  },
  borded: {
    type: Boolean,
    default: false,
  },
})

const cardColorMain = {
  boxShadow: `0px 8px 16px rgba(${props.shadowColorMain}, 0.24)`,
  background: props.colorMain,
  height: '120px',
}
</script>
<style lang="scss" scoped>
.container-accent-colors {
  display: flex;
  flex-direction: column;
}
</style>
