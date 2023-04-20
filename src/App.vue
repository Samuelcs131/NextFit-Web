<template>
  <router-view />
</template>

<script setup lang="ts">
import { metaData } from './constants/meta-data/metaData.const'
import { useMeta } from 'quasar'
import { useGlobalSettings } from 'stores/global-settings/globalSettings.store'
import { useSettingMeta } from './composables/useMetaHtml'

const { loadGlobalSettings } = useGlobalSettings()

useMeta(metaData)
useSettingMeta()
loadGlobalSettings()


</script> 
