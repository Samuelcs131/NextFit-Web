<template>
  <div class="group-options gap-md">
    <item-option
      class="paper-shadow"
      v-for="({ icon, name, routeName }, idx) in optionsPages"
      :key="idx"
      :icon="icon"
      :name="name"
      :routeName="routeName"
    />
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { optionsPages } from './ItemOption/constants/optionsPages.const';
const ItemOption = defineAsyncComponent(
  () => import('./ItemOption/ItemOption.vue')
)

</script>
<style lang="scss">
.group-options {
  display: grid;
  grid-template-columns: repeat(auto-fill,100px);
}
</style>
