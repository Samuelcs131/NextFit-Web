<template>
  <q-menu :offset="[15, 0]" anchor="top right" self="top left">
    <q-list dense style="min-width: 100px">
      <menu-item-dropdown
        v-for="(item, idx) in items"
        :key="idx"
        :item="item"
      />
    </q-list>
  </q-menu>
</template>
<script setup lang="ts">
  import { IMenuItemType } from '../../types/IMenuItemType.type'
  import MenuItemDropdown from './components/MenuItemDropdown.vue'

  interface IProp {
    items: IMenuItemType[]
  }

  defineProps<IProp>()
</script>
