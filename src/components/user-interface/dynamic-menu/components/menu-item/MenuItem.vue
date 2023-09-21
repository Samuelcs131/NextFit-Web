<template>
  <div class="dynamic-menu">
    <q-item
      v-if="!item.children"
      :to="{ name: item.routeName }"
      :active-class="itemActiveClass(item.level)"
      class="rounded-borders"
      :aria-level="item.level"
    >
      <q-item-section v-if="item.icon" avatar>
        <q-icon :name="item.icon" />
      </q-item-section>

      <div v-else class="text-h5 q-mr-sm">•</div>

      <q-item-section>
        <q-item-label>{{ te(item.title) ? $t(item.title) : item.title }}</q-item-label>
      </q-item-section>
    </q-item>

    <q-expansion-item
      v-else
      :label="item.title"
      :icon="item.icon"
      :group="`${item.level}`"
      :aria-level="item.level"
      :model-value="defineActiveExpansive(item.title)"
      :class="expansionItemClass(item.title)"
      :aria-minimenu="miniMenu"
      :disable="miniMenu"
    >
      <template #header>
        <q-item-section v-if="item.icon" avatar>
          <q-icon :name="item.icon" />
        </q-item-section>

        <div v-else class="text-h5 q-mr-sm icon-point">•</div>

        <q-item-section>
          <q-item-label>{{
            te(item.title) ? $t(item.title) : item.title
          }}</q-item-label>
        </q-item-section>
      </template>

      <div class="q-pl-xs">
        <menu-item
          v-for="child in item.children"
          :item="child"
          :key="child.title"
          :mini-menu="false"
        />
      </div>
    </q-expansion-item>

    <menu-dropdown
      v-if="miniMenu && item.children && item.level === 1"
      :items="item.children"
    />
  </div>
</template>

<script setup lang="ts">
  import { IMenuItemType } from '../../types/IMenuItemType.type'
  import { useDynamicMenu } from '../../composables/useDynamicMenu'
  import MenuDropdown from '../menu-dropdown/MenuDropdown.vue'
  import { useI18n } from 'src/boot/i18n'

  interface IProp {
    item: IMenuItemType
    miniMenu: boolean
  }

  defineProps<IProp>()

  const { te } = useI18n()
  const { defineActiveExpansive, expansionItemClass, itemActiveClass } =
    useDynamicMenu()
</script>
