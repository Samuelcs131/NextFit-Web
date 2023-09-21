<template>
  <doc-card title="Tree select only" :template="treeSelectOnlyCode">
    <div class="q-mb-md">
      <q-toggle v-model="treeValue.dense" label="Dense" />
      <q-toggle v-model="treeValue.optionsDense" label="Options dense" />
      <q-toggle v-model="treeValue.useInput" label="Use input" />
    </div>

    <span class="q-py-sm block">Value: {{ treeValue.value }}</span>

    <tree-select-only
      v-model="treeValue.value"
      :options="treeOptions"
      label="Tree select only"
      :dense="treeValue.dense"
      :options-dense="treeValue.optionsDense"
      :useInput="treeValue.useInput"
    />
  </doc-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import DocCard from 'src/components/user-interface/doc-card/DocCard.vue'
import { treeSelectOnlyCode } from './constants/treeSelectOnlyCode.const'
import { treeOptions } from '../../constants/treeSelectOptions'
import TreeSelectOnly from 'src/components/user-interface/tree-select-only/TreeSelectOnly.vue'

const treeValue = ref({
  value: '2',
  dense: false,
  optionsDense: false,
  useInput: false,
})
</script>
