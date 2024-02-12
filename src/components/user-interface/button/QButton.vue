<template>
  <q-btn
    :style="{ width: width }"
    :color="visual"
    :unelevated="unelevated === undefined ? true : unelevated"
    :flat="flat || soft"
    :class="`${visualClass()} ${props.class}`"
  >
    <slot></slot>
    <q-tooltip v-if="tooltip">{{ tooltip }}</q-tooltip>
  </q-btn>
</template>
<script setup lang="ts">
  import { TypeButton } from './enum/TypeButton.enum'
  import { QBtnProps } from 'quasar'
  import { removeFalsey } from 'src/utils/array/removeFalsey.utils'

  interface IProps extends QBtnProps {
    visual: `${TypeButton}`
    brightness?: boolean
    soft?: boolean
    width?: string
    unelevated?: boolean
    flat?: boolean
    class?: string
    tooltip?: string
  }

  const props = defineProps<IProps>()

  function visualClass() {
    const { brightness, soft, visual } = props

    const styles = removeFalsey([
      brightness && `${visual}-brightness`,
      soft && 'q-manual-focusable--focused',
    ])

    return styles.join(' ')
  }
</script>
