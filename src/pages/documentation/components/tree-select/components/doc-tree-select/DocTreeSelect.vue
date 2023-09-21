<template>
  <doc-card title="Tree select" :template="treeSelectCode">
    <div class="q-mb-md">
      <q-toggle v-model="treeValue.dense" label="Dense" />
      <q-toggle v-model="treeValue.optionsDense" label="Options dense" />
      <q-toggle v-model="treeValue.useChips" label="Use chips" />
      <q-toggle v-model="treeValue.useInput" label="Use input" />
      <increment-counter
        v-model="treeValue.maxItemsDisplayed"
        label="Max items displayed"
        class="q-mx-md"
      />
    </div>

    <span class="q-py-sm block">Value: {{ treeValue.value }}</span>

    <tree-select
      v-model="treeValue.value"
      :options="treeOptions"
      label="Tree select"
      :use-chips="treeValue.useChips"
      :dense="treeValue.dense"
      :options-dense="treeValue.optionsDense"
      :useInput="treeValue.useInput"
      :maxItemsDisplayed="treeValue.maxItemsDisplayed"
    />
  </doc-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import DocCard from 'src/components/user-interface/doc-card/DocCard.vue'
import { treeSelectCode } from './constants/treeSelectCode.const'
import { treeOptions } from '../../constants/treeSelectOptions'
import TreeSelect from 'src/components/user-interface/tree-select/TreeSelect.vue'
import IncrementCounter from 'src/components/user-interface/increment-counter/IncrementCounter.vue'

const treeValue = ref({
  value: ['2', '3'],
  dense: false,
  optionsDense: false,
  useChips: false,
  useInput: false,
  maxItemsDisplayed: 0,
})
</script>
