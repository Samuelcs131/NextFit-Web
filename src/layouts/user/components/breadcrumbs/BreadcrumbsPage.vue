<template>
  <q-breadcrumbs separator="•" class="text-disabled" active-color="body-primary" >
    <q-breadcrumbs-el
      v-for="(page, idx) in breadcrumbs"
      :key="idx"
      :label="$t(`common.${page.name}`)"
      :to="breadcrumbs.length !== idx + 1 ? page.to : undefined"
    />
  </q-breadcrumbs>
</template>
<script setup lang="ts">
  import { useUserLayout } from '../../composables/useUserLayout';

  const { breadcrumbs } = useUserLayout()
</script>
