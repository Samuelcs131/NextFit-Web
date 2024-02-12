<template>
  <router-view v-if="!loaderStatus(userLayoutLoader.isLoggedIn)" />
  <next-fit-loading v-else :loader-id="userLayoutLoader.isLoggedIn" />
</template>

<script setup lang="ts">
  import { metaData } from './constants/meta-data/metaData.const'
  import { useMeta } from 'quasar'
  import { useSettingMeta } from './composables/useMetaHtml'
  import { userLayoutLoader } from './layouts/user/constants/userLayoutLoaders.const'
  import NextFitLoading from './components/user-interface/loading-templates/nextfit-loading/NextFitLoading.vue'
  import useLoader from './composables/useLoader'
  import { useInterface } from './composables/useInterface'

  const { loaderStatus } = useLoader()
  const { loadInterface } = useInterface()

  useMeta(metaData)
  useSettingMeta()
  loadInterface()
</script>
