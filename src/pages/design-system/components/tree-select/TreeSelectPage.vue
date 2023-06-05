<template>
  <page-layout>
    <div class="border-dashed q-pa-md border-radius-sm">
      <h1 class="text-h6 q-mt-none">Tree select</h1>

      <div class="q-mb-md">
        <q-toggle v-model="treeValue.dense" label="Dense" />
        <q-toggle v-model="treeValue.optionsDense" label="Options dense" />
        <q-toggle v-model="treeValue.useChips" label="Use chips" />
        <q-toggle v-model="treeValue.useInput" label="Use input" />

        <span class="q-mx-sm">
          <span class="q-mx-sm">
            <q-button
              visual="default"
              icon="add"
              round
              size="xs"
              @click="
                treeValue.maxItemsDisplayed = treeValue.maxItemsDisplayed + 1
              "
            />
            <span class="q-mx-sm">{{ treeValue.maxItemsDisplayed }}</span>
            <q-button
              visual="default"
              icon="remove"
              round
              size="xs"
              @click="
                treeValue.maxItemsDisplayed = treeValue.maxItemsDisplayed - 1
              "
            />
          </span>
          Max items displayed
        </span>
      </div>

      <span class="q-py-sm block">Value: {{ treeValue.value }}</span>
      <tree-select
        v-model="treeValue.value"
        :options="options"
        label="Tree select"
        :use-chips="treeValue.useChips"
        :dense="treeValue.dense"
        :options-dense="treeValue.optionsDense"
        :useInput="treeValue.useInput"
        :maxItemsDisplayed="treeValue.maxItemsDisplayed"
      />
    </div>

    <q-separator class="q-my-xl" />

    <div class="border-dashed q-pa-md border-radius-sm">
      <h1 class="text-h6 q-mt-none">Tree select only</h1>

      <div class="q-mb-md">
        <q-toggle v-model="treeOnlyValue.dense" label="Dense" />
        <q-toggle v-model="treeOnlyValue.optionsDense" label="Options dense" />
        <q-toggle v-model="treeOnlyValue.useInput" label="Use input" />
      </div>

      <span class="q-py-sm block">Value: {{ treeOnlyValue.value }}</span>
      <tree-select-only
        v-model="treeOnlyValue.value"
        :options="options"
        label="Tree select only"
        :dense="treeOnlyValue.dense"
        :options-dense="treeOnlyValue.optionsDense"
        :useInput="treeOnlyValue.useInput"
        :max-height-menu="250"
      />
    </div>
  </page-layout>
</template>
<script setup lang="ts">
import QButton from 'src/components/user-interface/button/QButton.vue'
import TreeSelect from 'src/components/user-interface/tree-select/TreeSelect.vue'
import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
import { ref } from 'vue'
import { treeOptions } from './constants/treeSelectOptions'
import TreeSelectOnly from 'src/components/user-interface/tree-select-only/TreeSelectOnly.vue'

const treeValue = ref({
  value: ['2', '3'],
  dense: false,
  optionsDense: false,
  useChips: false,
  useInput: false,
  maxItemsDisplayed: 0,
})

const treeOnlyValue = ref({
  value: '2',
  dense: false,
  optionsDense: false,
  useChips: false,
  useInput: false,
  selectOnly: false,
})

const options = ref(treeOptions)
</script>
