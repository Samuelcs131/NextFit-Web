<template>

  <v-select
    v-model="selectValue"
    :options="optionsValue"
    @update:model-value="emitModelValue"
    :auto-filter="currentProps.autoFilter"
  ></v-select>
</template>
<script setup lang="ts">
  import VSelect from 'src/components/user-interface/select/VSelect.vue'
  import { computed, ref } from 'vue'
  import { musclesOptions } from 'src/constants/muscles/muscles.const'

  interface IProps {
    modelValue: unknown
    options?: unknown[]
    autoFilter?: boolean
  }

  const props = defineProps<IProps>()
  const emit = defineEmits(['update:modelValue', 'filter'])

  const currentProps = computed(() => {
    return {
      options: props.options || musclesOptions,
      autoFilter: props.autoFilter ?? false,
    }
  })

  const selectValue = ref(props.modelValue)
  const optionsValue = ref(currentProps.value.options)

  function emitModelValue(value: unknown) {
    emit('update:modelValue', value)
  }
</script>
