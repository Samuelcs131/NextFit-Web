<template>
  <q-page padding class="container">
    <div v-if="userStore.userState">
      <p>Id: {{ userStore.userState.id }}</p>
      <p>
        Nome: {{ userStore.userState.name }} {{ userStore.userState.lastName }}
      </p>
      <p>email: {{ userStore.userState.email }}</p>
      <p>tipo usuario: {{ userStore.userState.userType }}</p>
      <p>altura: {{ userStore.userState.height }}</p>
      <p>sexo: {{ userStore.userState.sex }}</p>
      <p>avatar: {{ userStore.userState.avatar }}</p>
      <p>país: {{ countryDictionary[userStore.userState.country] }}</p>
    </div>

    <!-- <illustrative-message illustration="search" />
    <illustrative-message illustration="calendar" />
    <illustrative-message illustration="dashboard" />
    <illustrative-message illustration="file" />
    <illustrative-message illustration="folder" />
    <illustrative-message illustration="notebook" /> -->
  </q-page>
</template>
<script lang="ts" setup>
  import IllustrativeMessage from 'src/components/user-interface/illustrative-message/IllustrativeMessage.vue'
  import { useUserStore } from 'src/stores/UserStore'
  import { countryDictionary } from 'src/constants/user/country.const'


  const userStore = useUserStore()
</script>
