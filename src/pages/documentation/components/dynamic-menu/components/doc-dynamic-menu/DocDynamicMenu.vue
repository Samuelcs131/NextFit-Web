<template>
  <doc-card title="Menu dinâmico" :template="dynamicMenuCode">
    <div class="q-mb-md">
      <q-toggle v-model="dynamicMenuState.miniMenu" label="Mini menu" />
    </div>
 
  </doc-card>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import DocCard from 'src/components/user-interface/doc-card/DocCard.vue'
  import { dynamicMenuCode } from './constants/dynamicMenuCode.const'
  import DynamicMenu from 'src/components/user-interface/dynamic-menu/DynamicMenu.vue'
  import { menuItens } from './constants/menuItens.const'

  const dynamicMenuState = ref({
    miniMenu: false,
  })
</script>
