<template>
  <q-list padding class="q-pa-sm q-gutter-sm">
    <menu-item
      v-for="item in items"
      :item="item"
      :key="item.title"
      :mini-menu="miniMenu"
    />
  </q-list>
</template>

<script setup lang="ts">
  import MenuItem from './components/menu-item/MenuItem.vue'
  import { IMenuItemType } from './types/IMenuItemType.type'

  type IProps = {
    items: IMenuItemType[]
    miniMenu: boolean
  }

  defineProps<IProps>()
</script>
