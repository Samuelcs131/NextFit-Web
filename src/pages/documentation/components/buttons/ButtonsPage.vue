<template>
  <page-layout>
    <q-card v-bind="$vCard" class="flex items-center q-py-md column">
      <q-card-section>
        <ButtonExample
          v-for="(button, idx) in buttons"
          :key="idx"
          :props="button"
          class="q-mb-md"
        />
      </q-card-section>
    </q-card>
  </page-layout>
</template>
<script setup lang="ts">
import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
import ButtonExample from './components/buttons-examples/ButtonExample.vue'
import { buttons } from './constants/buttons.const'
</script>
