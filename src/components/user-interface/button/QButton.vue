<template>
  <q-btn
    :style="{ width: width }"
    v-bind="{
      color: visual,
      unelevated: defaultUnelevated,
      flat: flat || soft,
      class: visualClass(),
    }"
  >
    <slot></slot>
  </q-btn>
</template>
<script setup lang="ts">
import { TypeButton } from './enum/typeButton.enum'
import { QBtnProps } from 'quasar'
import { removeFalsey } from 'src/utils/array/removeFalsey.utils'

interface IProps extends QBtnProps {
  visual: `${TypeButton}`
  brightness?: boolean
  soft?: boolean
  width?: string
}

const props = defineProps<IProps>()

const defaultUnelevated = props.unelevated === undefined ? true : props.unelevated

function visualClass() {
  const classCss = [
    props.brightness && `${props.visual}-brightness`,
    props.soft && 'q-manual-focusable--focused',
  ]

  return removeFalsey(classCss).join(' ')
}
</script>
