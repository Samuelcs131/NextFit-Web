<template>
  <div class="row gap-sm q-mb-xl">
    <div class="col">
      <h2 class="text-h5 q-my-none q-mb-md">{{ title }}</h2>
      <div class="row q-col-gutter-lg">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: false,
    }
  })
</script>
