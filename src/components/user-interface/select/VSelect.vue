<template>
  <q-select
    v-model="selectValue"
    @update:model-value="emitModelValue"
    :outlined="true"
    :options="autoFilter ? optionsValue : options"
    @filter="handleFilter"
  >
    <template v-if="!propsCurrent.disableOptionSlot" v-slot:option="scope">
      <slot name="v-option" :scope="{ ...scope }" />
      <q-item v-if="!propsCurrent.disableOptionSlot" v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label>
            {{ te(scope.opt.label) ? $t(scope.opt.label) : scope.opt.label }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </template>
    <template v-slot:selected-item="scope">
      <slot name="v-selected-item" :scope="{ ...scope }" />

      <template v-if="!propsCurrent.disableSelectedItemSlot">
        {{ te(scope.opt.label) ? $t(scope.opt.label) : scope.opt.label }}
      </template>
    </template>
  </q-select>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'src/boot/i18n'
  import { slugify } from 'src/utils/slugfy.utils'
  import { useLocalStorage } from 'src/composables/useLocalStorage'
  import { translateForce } from 'src/utils/translate/translateUtils'
  import { Languages } from 'src/i18n/enums/languages.enum'

  /* eslint-disable @typescript-eslint/no-explicit-any */
  /* eslint-disable no-unused-vars */

  interface IProps {
    modelValue: any
    options?: any[]
    autoFilter?: boolean
    disableSelectedItemSlot?: boolean
    disableOptionSlot?: boolean
  }

  const { te } = useI18n()
  const props = defineProps<IProps>()
  const emit = defineEmits(['update:modelValue', 'filter'])

  const propsCurrent = {
    disableSelectedItemSlot: isDefault(false, props.disableSelectedItemSlot),
    disableOptionSlot: isDefault(false, props.disableOptionSlot),
    autoFilter: isDefault(false, props.autoFilter),
    options: !props.options ? [] : props.options,
  }

  const selectValue = ref(props.modelValue)
  const optionsValue = ref(propsCurrent.options)

  function isDefault(defaultt: boolean, value?: boolean) {
    return value === undefined ? defaultt : value
  }

  function emitModelValue(value: unknown) {
    emit('update:modelValue', value)
  }

  function handleFilter(val: string, update: (callbackFn: () => void) => void) {
    emit('filter', { val, update })

    const { storage } = useLocalStorage()

    update(() => {
      const key = slugify(val)

      optionsValue.value = propsCurrent.options?.filter((v) => {
        const label = te(v.label)
          ? translateForce(v.label, storage.value.language as Languages)
          : v.label
        return slugify(label).indexOf(key) > -1
      })
    })
  }
</script>
