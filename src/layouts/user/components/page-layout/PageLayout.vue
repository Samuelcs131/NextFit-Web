<template>
  <q-page padding class="container">
    <breadcrumbs-page class="q-mb-lg"/>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="bottom"></slot>
  </q-page>
</template>
<script setup lang="ts">
import BreadcrumbsPage from '../breadcrumbs/BreadcrumbsPage.vue';

defineProps({
  breadcrumbs: {
    type: Boolean,
    default: true
  }
})
</script>
