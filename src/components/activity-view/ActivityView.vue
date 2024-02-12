<template>
  <q-card v-bind="$vCard" class="bg-black border-primary" bordered>
    <q-card-section class="flex justify-center">
      <q-img fit="contain" v-if="url" :src="url" height="350px"/>
    </q-card-section>
    <q-card-section>
      <p class="q-mb-none q-mt-sm text-primary text-caption">
        {{ activityName || $t('activityBiew') }}
      </p>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
  interface IProps {
    url: string
    activityName?: string
  }

  defineProps<IProps>()
</script>
