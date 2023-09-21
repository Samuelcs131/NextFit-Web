<template>
  <q-breadcrumbs
    separator="•"
    class="text-disabled"
    active-color="body-primary"
  >
    <q-breadcrumbs-el
      v-for="(page, idx) in breadcrumbs"
      :key="idx"
      :label="$t(routerTitle[page.name])"
      :to="breadcrumbs.length !== idx + 1 ? page.to : undefined"
    />
  </q-breadcrumbs>
</template>
<script setup lang="ts">
  import { routerTitle } from 'src/constants/routes/router.const'
  import { useUserLayout } from '../../composables/useUserLayout'

  const { breadcrumbs } = useUserLayout()
</script>
