<template>
  <q-page padding class="container">

    {{ userStore.data }}

  </q-page>
</template>
<script lang="ts" setup>
import useAuthUser from 'src/composables/useAuthUser'
import { useUserStore } from 'src/stores/UserStore'

const userStore = useUserStore()
const { isLoggedIn } = useAuthUser()

isLoggedIn()

</script>
