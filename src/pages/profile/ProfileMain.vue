<template>
  <page-layout padding class="container">
    <main class="row q-col-gutter-lg">
      <div class="col-12 col-md-4">
        <change-avatar />
      </div>

      <div class="col-12 col-md-8">
        <q-card v-bind="$vCard">
          <q-card-section>
            <v-form
              class="q-pa-md"
              v-model="state.user"
              :disable-submit-btn="state.disableSubmitBtn"
              :form-fields="formFields"
              :submit-label="$t('saveChanges')"
              @on-submit="saveUser"
            />
          </q-card-section>
        </q-card>
      </div>
    </main>
  </page-layout>
</template>
<script lang="ts" setup>
  import { useProfileMain } from './composables/useProfileMain'
  import { onBeforeMount } from 'vue'
  import ChangeAvatar from './components/change-avatar/ChangeAvatar.vue'
  import { formFields } from './constants/formFields.const'
  import VForm from 'src/components/v-form/VForm.vue'
  import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'

  const { state, fetchUser, saveUser } = useProfileMain()

  onBeforeMount(() => fetchUser())
</script>
