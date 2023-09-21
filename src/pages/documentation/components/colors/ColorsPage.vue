<template>
  <page-layout>
    <color-palette pcolors="primary" />
    <color-palette pcolors="secondary" />
    <color-palette pcolors="positive" />
    <color-palette pcolors="info" />
    <color-palette pcolors="negative" />
    <color-palette pcolors="warning" />
  </page-layout>
</template>
<script setup lang="ts">
import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
import ColorPalette from './color-palette/ColorPalette.vue'
</script>
