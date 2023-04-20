<template>
  <q-page padding class="container">

    {{ userStore.user }}

    <illustrative-message illustration="search" />
    <illustrative-message illustration="calendar" />
    <illustrative-message illustration="dashboard" />
    <illustrative-message illustration="file" />
    <illustrative-message illustration="folder" />
    <illustrative-message illustration="notebook" />

  </q-page>
</template>
<script lang="ts" setup>
import IllustrativeMessage from 'src/components/user-interface/illustrative-message/IllustrativeMessage.vue';
import useMetaHtml from 'src/composables/useMetaHtml'
import { useUserStore } from 'src/stores/UserStore'

// const { titlePage } = useMetaHtml()
// titlePage('ui.dashboard', true)

const userStore = useUserStore()

</script>
