<template>
  <h1 class="text-h5">{{ $t(`common.${pcolors}`) }}</h1>
  <div class="container-grid q-mb-lg q-mt-lg">
    <q-card
      v-for="(color, idx) in optColors"
      :key="idx"
      class="no-shadow"
      bordered
    >
      <q-card-section :style="{ height: '120px' }" :class="color" />
      <q-card-section>
        <p class="q-mb-md">{{ 'color.name' }}</p>
        <span class="row q-col-gutter-lg">
          <b class="col-2 text-grey-600">HEX</b>
          <p class="col-auto q-mb-sm">{{ 'color.hex' }}</p>
        </span>
        <span class="row q-col-gutter-lg">
          <b class="col-2 text-grey-600">RGB</b>
          <p class="col-auto q-mb-none">{{ 'rgb(color.hex)' }}</p>
        </span>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
  import { PropType } from 'vue'
  import { optionsColors } from './enums/optionsColors.enum'
  import { colors } from './constants/colors.const'

  const props = defineProps({
    pcolors: {
      type: String as PropType<`${optionsColors}`>,
      required: true,
    },
  })

  const optColors = colors[props.pcolors]
</script>
<style lang="scss">
.container-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>
