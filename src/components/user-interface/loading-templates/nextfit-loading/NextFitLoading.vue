<template>
  <div
    v-if="loaderStatus(loaderId)"
    class="nextfit-loading fullscreen flex flex-center column z-max loading-full-screen"
  >
    <component :is="loaderSpinners[loaderSpinner || randomSpinners]" />

    <div class="q-pt-lg">
      {{ text }}
    </div>
  </div>
</template>
<script lang="ts" setup>
  import useLoader from 'src/composables/useLoader'
  import { loaderSpinners } from './constants/loaders.const'
  import { LoaderSpinners } from './enums/LoaderSpinners.enum'
  import { randomPickFromArray } from 'src/utils/array/sortUtils.util'

  interface IProps {
    loaderId: string
    text?: string
    loaderSpinner?: `${LoaderSpinners}`
  }

  defineProps<IProps>()

  const randomSpinners = randomPickFromArray(
    Object.values(LoaderSpinners)
  ) as LoaderSpinners

  const { loaderStatus } = useLoader()
</script>
<style lang="scss" scoped></style>
