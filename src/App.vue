<template>
  <router-view v-if="!loaderStatus(userLayoutLoader.isLoggedIn)" />
  <next-fit-loading v-else :loader-id="userLayoutLoader.isLoggedIn" />
</template>

<script setup lang="ts">
  import { metaData } from './constants/meta-data/metaData.const'
  import { useMeta } from 'quasar'
  import { useGlobalSettings } from 'stores/global-settings/globalSettings.store'
  import { useSettingMeta } from './composables/useMetaHtml'
  import { onBeforeMount } from 'vue'
  import { useUserAuth } from 'src/composables/useUserAuth'
  import { userLayoutLoader } from './layouts/user/constants/userLayoutLoaders.const'
  import NextFitLoading from './components/user-interface/loading-templates/nextfit-loading/NextFitLoading.vue'
  import useLoader from './composables/useLoader'
  import useQuasarLangComponents from './composables/useQuasarLangComponents'

  const { setupLangComponents } = useQuasarLangComponents()
  const { loadGlobalSettings } = useGlobalSettings()
  const { isLoggedIn } = useUserAuth()
  const { loaderStatus } = useLoader()

  useMeta(metaData)
  useSettingMeta()
  loadGlobalSettings()

  onBeforeMount(async () => {
    // await isLoggedIn([userLayoutLoader.isLoggedIn])
    setupLangComponents()
  })
</script>
