<template>
  <q-list padding class="q-ma-sm">
    <q-item
      class="rounded-borders q-mb-xs"
      active-class="text-primary background-active"
      v-for="item in items"
      :key="item.link"
      v-ripple
      clickable
      :to="item.link"
    >
      <q-item-section v-if="item.icon" avatar>
        <q-icon :name="item.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ $t(`ui.${item.title}`) }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup>
interface IItem {
  title: string
  icon: string
  link: string
}

defineProps({
  items: {
    type: Array<IItem>,
    required: true,
  },
})
</script>
<style lang="scss" scoped>
.background-active {
  background-color: $primary-opacity-15;
}
</style>
