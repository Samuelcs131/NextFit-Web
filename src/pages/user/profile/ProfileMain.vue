<template>
  <q-page padding class="container">
    <main class="row q-col-gutter-lg">
      <div class="col-12 col-md-4">
        <change-avatar />
      </div>

      <div class="col-12 col-md-8">
        <form-user />
      </div>
    </main>
  </q-page>
</template>
<script lang="ts" setup>
import { useProfileMain } from './composables/useProfileMain'
import { onMounted } from 'vue'
import FormUser from './components/form-user/FormUser.vue'
import ChangeAvatar from './components/change-avatar/ChangeAvatar.vue'

const { fetchUser } = useProfileMain()

onMounted(() => fetchUser())
</script>
