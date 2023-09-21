<template>
  <q-page padding class="container">
    <v-table :list="state.listActivities" :columns="[]" />
  </q-page>
</template>
<script lang="ts" setup>
  import VTable from 'src/components/v-table/VTable.vue'
  import { useActivities } from './composables/useActivities'
  const { state } = useActivities()
</script>
