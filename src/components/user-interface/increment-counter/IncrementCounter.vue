<template>
  <span>
    <span>
      <q-button
        visual="default"
        icon="remove"
        round
        size="xs"
        @click="handleUpdate(false)"
      />
      <span class="q-mx-sm">{{ incrementValue }}</span>
      <q-button
        visual="default"
        icon="add"
        round
        size="xs"
        @click="handleUpdate(true)"
      />
    </span>
    <span v-if="label" class="q-pl-sm">
      {{ label }}
    </span>
  </span>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import QButton from '../button/QButton.vue'

interface IProps {
  modelValue: number
  label?: string
}

const props = defineProps<IProps>()
const incrementValue = ref<number>(props.modelValue)
const emit = defineEmits(['update:modelValue'])

function handleUpdate(increment: boolean) {
  incrementValue.value = increment
    ? incrementValue.value + 1
    : incrementValue.value - 1

  emit('update:modelValue', incrementValue)
}
</script>
