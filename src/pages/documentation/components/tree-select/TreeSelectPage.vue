<template>
  <page-layout>

    <doc-tree-select />

    <q-separator class="q-my-xl" />

    <doc-tree-select-only />

  </page-layout>
</template>
<script setup lang="ts">
import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
import DocTreeSelect from './components/doc-tree-select/DocTreeSelect.vue'
import DocTreeSelectOnly from './components/doc-tree-select-only/DocTreeSelectOnly.vue'
</script>
