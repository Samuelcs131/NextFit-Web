<template>
  <v-select
    v-bind="props"
    :options="options || limbsOptions"
    @update:model-value="(v) => $emit('update:modelValue', v)"
  />
</template>
<script setup lang="ts">
  import VSelect from 'src/components/user-interface/select/VSelect.vue'
  import { limbsOptions } from 'src/constants/limb/limbs.const'

  interface IProps {
    modelValue: unknown
    options?: unknown[]
  }

  const props = defineProps<IProps>()
</script>
