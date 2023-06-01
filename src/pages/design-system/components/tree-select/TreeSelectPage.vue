<template>
  <page-layout>
    {{ 'Value: ' + valor }}
    <tree-select v-model="valor" :options="options" label="Tree select" use-chips />

    <q-separator class="q-my-xl" />

    {{ 'Value two: ' + valorTwo }}
    <tree-select v-model="valorTwo" :options="options" label="Tree select" use-chips />
  </page-layout>
</template>
<script setup lang="ts">
import TreeSelect from 'src/components/user-interface/tree-select/TreeSelect.vue'
import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
import { ref } from 'vue'

const valor = ref<string[] | null>(['2', '3'])

const valorTwo = ref<string[] | null>(['5'])

const options = ref([
  {
    id: '1',
    label: 'Opt 1',
    children: [
      { id: '2', label: 'sub 1' },
      { id: '3', label: 'sub 2' },
      {
        id: '4',
        label: 'sub 3',
        children: [
          { id: '5', label: 'tri 1' },
          { id: '6', label: 'tri 2' },
          {
            id: '7',
            label: 'tri 3',
            children: [
              { id: '8', label: 'quad 1' },
              { id: '9', label: 'quad 2' },
              { id: '10', label: 'quad 3' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '11',
    label: 'Opt 2',
    children: [
      { id: '12', label: 'sub 10' },
      { id: '13', label: 'sub 20' },
      {
        id: '14',
        label: 'sub 30',
        children: [
          { id: '15', label: 'tri 10' },
          { id: '16', label: 'tri 20' },
          {
            id: '17',
            label: 'tri 30',
            children: [
              { id: '18', label: 'quad 10' },
              { id: '19', label: 'quad 20' },
              { id: '110', label: 'quad 30' },
            ],
          },
        ],
      },
    ],
  },
])
</script>
