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
          v-for="({ label, id }, idx) in state.tree[state.treeId].selectedNodes"
          :key="idx"
          :label="label"
          @remove="() => removeItem(id)"
          removable
          size=".8rem"
          dense
        />
      </template>
      <span v-else> {{ getSelectedLabels(state.treeId) }}</span>
      <input
        type="text"
        class="q-field__input q-placeholder col"
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
          @click="handleClear(state.treeId)"
          :size="dense ? '1rem' : '1.5rem'"
          class="cursor-pointer"
        />
        <q-icon
          :name="state.isPopupShown ? 'arrow_drop_up' : 'arrow_drop_down'"
          class="cursor-pointer"
        />
      </div>
    </template>
    <q-popup-proxy no-parent-event no-focus fit v-model="state.isPopupShown">
      <q-tree
        :dense="optionsDense"
        ref="treeView"
        :nodes="options"
        node-key="id"
        label-key="label"
        :filter="state.inputValue || ''"
        :tick-strategy="tickStrategy || 'leaf'"
        v-model:ticked="state.tree[state.treeId].ticked"
        @update:ticked="handleSelect"
        :filter-method="filterTreeSelect"
        class="q-pa-xs"
        no-results-label="Nenhum resultado encontrado"
      />
    </q-popup-proxy>
  </q-field>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useTreeSelect } from './composables/useTreeSelect'
import { ITreeNode } from './types/ITreeNode.type'
import { QFieldProps } from 'quasar'

interface IProp extends QFieldProps {
  options: ITreeNode[]
  tickStrategy?: 'none' | 'strict' | 'leaf' | 'leaf-filtered'
  dense?: boolean
  optionsDense?: boolean
  useChips?: boolean
  loading?: boolean
  disable?: boolean
  modelValue: string[] | null
}

const props = defineProps<IProp>()

const {
  state,
  treeView,
  isSelected,
  createTree,
  clearField,
  expandOptions,
  getTickedNodes,
  setValueDefault,
  filterTreeSelect,
  handleRemoveItem,
  getSelectedLabels,
} = useTreeSelect()

onBeforeMount(() => {
  const { options, modelValue } = props

  createTree(state.value.treeId, options)
  if (modelValue) setValueDefault(modelValue)
})

const emit = defineEmits(['update:modelValue'])

function handleSelect(ids: readonly string[]) {
  getTickedNodes(state.value.treeId)
  emit('update:modelValue', ids)
}

function handleClear(id: string) {
  clearField(id)
  emit('update:modelValue', [])
}

function removeItem(id: string) {
  handleRemoveItem(id)

  const ids = state.value.tree[state.value.treeId].selectedNodes.map(
    (item) => item.id
  )

  emit('update:modelValue', ids)
}

</script>
