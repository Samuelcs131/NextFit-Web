<template>
  <q-skeleton v-if="activeSkeleton" type="QInput" height="56px" />
  <q-select v-else
    v-bind="props"
    @update:model-value="emitModelValue"
    :outlined="true"
    :options="autoFilter ? currentOptionsValue : propsCurrent.options"
    @filter="handleFilter"
    :label="label ? (te(label) ? t(label) : label) : undefined"
    :use-chips="useChips"
  >
    <template v-if="!propsCurrent.disableOptionSlot" #option="scope">
      <slot name="v-option" :scope="{ ...scope }" />
      <q-item v-if="!propsCurrent.disableOptionSlot" v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label>
            {{ te(scope.opt.label) ? $t(scope.opt.label) : scope.opt.label }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </template>
    <template #selected-item="scope">
      <slot name="v-selected-item" :scope="{ ...scope }" />

      <template v-if="!propsCurrent.disableSelectedItemSlot">
        <template v-if="useChips">
          <q-chip
            v-if="maxItemsDisplayed && scope.index + 1 <= maxItemsDisplayed"
            dense
            color="default"
            @remove="scope.removeAtIndex(scope.index)"
            removable
            :label="te(scope.opt.label) ? $t(scope.opt.label) : scope.opt.label"
          />

          <q-chip
            v-if="
              maxItemsDisplayed &&
              modelValue.length === scope.index + 1 &&
              modelValue.length > maxItemsDisplayed
            "
            dense
            color="default"
            :label="`+${modelValue.length - (maxItemsDisplayed || 0)}`"
          />
        </template>
        <template v-else>
          {{
            maxItemsDisplayed
              ? handleMaxDisplayedItems(scope.opt.label, scope.index)
              : multiple
              ? handleLabel(scope.opt.label, scope.index)
              : handleTranslater(scope.opt.label)
          }}
        </template>
      </template>
    </template>
  </q-select>
</template>
<script setup lang="ts">
  import { ref, computed } from 'vue'
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
    multiple?: boolean
    disableOptionSlot?: boolean
    label?: string
    useChips?: boolean
    activeSkeleton?: boolean
    maxItemsDisplayed?: number
  }

  const { te, t } = useI18n()
  const props = defineProps<IProps>()
  const emit = defineEmits(['update:modelValue', 'filter'])

  const propsCurrent = computed(() => props)

  const optionsValue = ref(propsCurrent.value.options)

  const currentOptionsValue = computed(() => optionsValue.value)

  function emitModelValue(value: unknown) {
    emit('update:modelValue', value)
  }

  function handleFilter(val: string, update: (callbackFn: () => void) => void) {
    emit('filter', { val, update })

    const { storage } = useLocalStorage()

    update(() => {
      const key = slugify(val)

      optionsValue.value = propsCurrent.value.options?.filter((v) => {
        const label = te(v.label)
          ? translateForce(v.label, storage.value.language as Languages)
          : v.label
        return slugify(label).indexOf(key) > -1
      })
    })
  }

  function handleLabel(label: string, index: number) {
    const text = handleTranslater(label)
    const isNotLastItem = props.modelValue.length !== index + 1

    return isNotLastItem ? `${text}, ` : text
  }

  function handleTranslater(label: string) {
    return te(label) ? t(label) : label
  }

  function handleMaxDisplayedItems(label: string, index: number) {
    const { maxItemsDisplayed } = props
    const isHidden = (maxItemsDisplayed || 0) < index + 1
    const isLastItem = props.modelValue.length === index + 1
    const itemsBeyondMax = props.modelValue.length - (maxItemsDisplayed || 0)

    return isHidden
      ? isLastItem
        ? `(+${itemsBeyondMax})`
        : ''
      : handleLabel(label, index)
  }
</script>
