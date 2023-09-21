export const treeSelectCode = `
<template>
  <tree-select
    v-model="value"
    :options="options"
    label="Tree select"
  />
</temaplte>

<script>
  const value = ref<string[] | null>(null)

  const options: ITreeSelectOnly[] = [
    {
      id: '1',
      label: 'Group 1',
      children: [
        { id: '2', label: 'Toyota' },
        { id: '3', label: 'Honda' },
      ],
    },
  ]
<script>
`
