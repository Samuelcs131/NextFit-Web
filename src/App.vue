<template>
  <router-view />
</template>

<script setup lang="ts">

import { useSettingsGlobalStore } from './stores/SettingsGlobalStore'

const { initializationSettingsGlobal } = useSettingsGlobalStore()
initializationSettingsGlobal()
</script>
