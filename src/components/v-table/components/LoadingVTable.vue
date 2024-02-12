<template>
  <q-markup-table bordered class="no-shadow border-radius-md">
    <thead>
      <tr>
        <th
          v-for="(col, idx) in tableColumns"
          :key="idx"
          :class="`text-${col.align == 'right' ? 'right' : 'left'} text-bold`"
        >
          {{ col.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in 5" :key="row">
        <td
          v-for="(col, idx) in tableColumns"
          :key="idx"
          :class="`text-${col.align == 'right' ? 'right' : 'left'} `"
        >
          <q-skeleton type="text" />
        </td>
      </tr>
    </tbody>
  </q-markup-table>
</template>
<script setup lang="ts">
  import { QTableColumn } from 'quasar'

  interface IProps {
    tableColumns: QTableColumn[]
  }
  defineProps<IProps>()
</script>
