<template>
  <div class="flex items-center justify-between">
    <slot name="before" />

    <q-breadcrumbs
      separator="•"
      class="text-disabled"
      active-color="body-primary"
    >
      <q-breadcrumbs-el
        v-for="(page, idx) in formattedBreadcrumbs"
        :key="idx"
        :label="$t(page?.toString())"
        :to="{ name: page }"
      />
    </q-breadcrumbs>

    <slot name="after" />
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const formattedBreadcrumbs = computed(() => {
    const paths = route.matched.map((r) => {
      return (r.name || r.children[0].name) as string
    })
    return Array.from(new Set(paths))
  })
</script>
