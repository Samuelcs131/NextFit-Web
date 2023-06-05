<template>
  <q-field
    v-bind="$vInput"
    :stack-label="isSelected() || !!state.inputValue"
    :dense="dense"
    :disable="disable || loading"
    :loading="loading"
    @focus="state.isPopupShown = true"
  >
    <template #control>
      <template v-if="useChips">
        <q-chip
          v-for="{ label, id } in labelsChip(maxItemsDisplayed).labels"
          :key="id"
          :label="label"
          @remove="() => removeItem(id)"
          removable
          size=".8rem"
          dense
        />
        <span>{{ labelsChip(maxItemsDisplayed).plus }}</span>
      </template>
      <span v-else> {{ labelsText(maxItemsDisplayed) }}</span>
      <input
        v-if="useInput"
        type="text"
        class="q-ml-xs q-field__input q-placeholder col"
        v-model="state.inputValue"
        @click="state.isPopupShown = true"
        @input="expandOptions"
      />
    </template>
    <template #append>
      <div class="row items-center">
        <q-icon
          v-show="isSelected()"
          name="cancel"
          @click="handleClear"
          :size="dense ? '1rem' : '1.5rem'"
          class="cursor-pointer"
        />
        <q-icon
          :name="state.isPopupShown ? 'arrow_drop_up' : 'arrow_drop_down'"
          class="cursor-pointer"
        />
      </div>
    </template>
    <q-popup-proxy
      :style="{ maxHeight: `${maxHeightMenu}px` }"
      no-parent-event
      no-focus
      fit
      v-model="state.isPopupShown"
    >
      <q-tree
        :dense="optionsDense"
        ref="treeView"
        :nodes="options"
        node-key="id"
        label-key="label"
        :filter="state.inputValue || ''"
        :tick-strategy="tickStrategy || 'leaf'"
        v-model:ticked="state.tree.ticked"
        @update:ticked="handleSelect"
        :filter-method="filterTreeSelect"
        class="q-pa-xs"
        no-results-label="Nenhum resultado encontrado"
        :accordion="accordion"
      />
    </q-popup-proxy>
  </q-field>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useTreeSelect } from './composables/useTreeSelect'
import { ITreeSelect } from './types/ITreeSelect.type'
import { QFieldProps, QTree } from 'quasar'

interface IProp extends QFieldProps {
  options: ITreeSelect[]
  tickStrategy?: 'none' | 'strict' | 'leaf' | 'leaf-filtered'
  dense?: boolean
  optionsDense?: boolean
  useChips?: boolean
  loading?: boolean
  disable?: boolean
  modelValue: string[] | null
  useInput?: boolean
  maxItemsDisplayed?: number
  maxHeightMenu?: number
  accordion?: boolean
}

const props = defineProps<IProp>()

const {
  state,
  treeView,
  labelsText,
  labelsChip,
  isSelected,
  clearField,
  expandOptions,
  getTickedNodes,
  setValueInitial,
  filterTreeSelect,
  handleRemoveItem,
} = useTreeSelect()

onBeforeMount(() => {
  const { options, modelValue } = props
  setValueInitial(modelValue, options)
})

const emit = defineEmits(['update:modelValue'])

function handleSelect(ids: readonly string[]) {
  getTickedNodes()
  emit('update:modelValue', ids)
}

function handleClear() {
  clearField()
  emit('update:modelValue', [])
}

function removeItem(id: string) {
  handleRemoveItem(id)
  const ids = state.value.tree.selected.map(({ id }) => id)
  emit('update:modelValue', ids)
}
</script>
