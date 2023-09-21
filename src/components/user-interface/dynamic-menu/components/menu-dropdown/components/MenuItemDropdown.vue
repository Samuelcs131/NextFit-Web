<template>
  <div>
    <q-item
      v-if="!item.children"
      clickable
      v-close-popup
      :to="{ name: item.routeName }"
    >
      <q-item-section>{{
        te(item.title) ? $t(item.title) : item.title
      }}</q-item-section>
    </q-item>

    <q-item v-else clickable :active="defineActiveExpansive(item.title)">
      <q-item-section>{{
        te(item.title) ? $t(item.title) : item.title
      }}</q-item-section>
      <q-item-section side>
        <q-icon
          name="keyboard_arrow_right"
          :class="{ 'text-primary': defineActiveExpansive(item.title) }"
        />
      </q-item-section>

      <q-menu anchor="top end" self="top start">
        <menu-item-dropdown
          v-for="(child, idx) in item.children"
          :key="idx"
          :item="child"
        />
      </q-menu>
    </q-item>
  </div>
</template>
<script setup lang="ts">
  import { useI18n } from 'src/boot/i18n'
  import { useDynamicMenu } from '../../../composables/useDynamicMenu'
  import { IMenuItemType } from '../../../types/IMenuItemType.type'

  interface IProp {
    item: IMenuItemType
  }

  defineProps<IProp>()

  const { te } = useI18n()
  const { defineActiveExpansive } = useDynamicMenu()
</script>
