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
      <span> {{ state.selected?.label }}</span>
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
        :nodes="state.options.tree"
        node-key="id"
        label-key="label"
        :filter="state.inputValue || ''"
        v-model:selected="state.selectedId"
        @update:selected="handleSelect"
        :filter-method="filterTreeSelect"
        class="q-pa-xs"
        no-results-label="Nenhum resultado encontrado"
        selected-color="primary text-bold"
        :accordion="accordion"
      >
        <template #header-show="prop">
          <div class="row items-center full-width" @click.stop>
            <div class="text-weight-bold text-default-primary">
              {{ prop.node.label }}
            </div>
          </div>
        </template>
      </q-tree>
    </q-popup-proxy>
  </q-field>
</template>

<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { useTreeSelect } from './composables/useTreeSelectOnly'
  import { ITreeSelectOnly } from './types/ITreeSelectOnly.type'
  import { QFieldProps, QTree } from 'quasar'

  interface IProp extends QFieldProps {
    options: ITreeSelectOnly[]
    dense?: boolean
    optionsDense?: boolean
    useChips?: boolean
    loading?: boolean
    disable?: boolean
    modelValue: string | null
    useInput?: boolean
    accordion?: boolean
    maxHeightMenu?: number
  }

  const props = defineProps<IProp>()

  const {
    state,
    treeView,
    isSelected,
    expandOptions,
    setValueInitial,
    filterTreeSelect,
  } = useTreeSelect()

  onBeforeMount(() => {
    const { options, modelValue } = props
    setValueInitial(modelValue, options)
  })

  const emit = defineEmits(['update:modelValue'])

  function handleSelect(id: string | null) {
    const isNotSelect = state.value.options.notSelect.some(
      (groupId) => groupId === id
    )
    handleClear()
    if (isNotSelect || !id) return

    const selected = state.value.options.canSelect.find((item) => {
      return item.id === id
    })

    if (!selected) return

    state.value.selected = selected
    emit('update:modelValue', id)
  }

  function handleClear() {
    state.value.selected = null
    emit('update:modelValue', null)
  }
</script>
