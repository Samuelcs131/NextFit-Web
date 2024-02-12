<template>
  <q-page padding class="container">
    <breadcrumbs-page v-if="breadcrumbs" class="q-mb-lg">
      <template #before>
        <slot name="breadcrumbs-before" />
      </template>
      <template #after>
        <slot name="breadcrumbs-after" />
      </template>
    </breadcrumbs-page>
    <slot name="header" />
    <slot></slot>
    <slot name="bottom" />
  </q-page>
</template>
<script setup lang="ts">
  import BreadcrumbsPage from '../breadcrumbs/BreadcrumbsPage.vue'

  interface IProps {
    breadcrumbs?: boolean
  }

  defineProps<IProps>()
</script>
