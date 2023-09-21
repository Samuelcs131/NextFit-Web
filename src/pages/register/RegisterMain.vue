<template>
  <q-card flat style="width: 350px" class="q-mx-auto q-my-xl">
    <q-card-section class="q-py-none flex justify-center" style="left: -30px">
      <div class="flex items-center font-prosto-one">
        <logo-nextfit class="q-mr-md" size="xl" color="primary" />
        <h1 class="text-h4 text-bold non-selectable">NextFit</h1>
      </div>
    </q-card-section>

    <q-card-section class="column q-col-gutter-sm q-py-none">
      <default-form
        v-model="state.user"
        :form-fields="formFields"
        submit-btn-full-width
        form-gutter="sm"
        :disable-submit-btn="!state.policyTerms|| isLoading"
        :loading-form="isLoading"
        @on-submit="handleSubmitForm"
      >
        <template #after-country>
          <q-input
            v-bind="$vInput"
            v-model="state.user.fields.password"
            :label="$t('labels.password')"
            class="full-width"
            :rules="formRules.password"
            :type="state.visibilityPassword ? 'password' : 'text'"
            :disable="isLoading"
          >
            <template v-slot:append>
              <q-icon
                :name="
                  state.visibilityPassword ? 'visibility_off' : 'visibility'
                "
                class="cursor-pointer"
                @click="state.visibilityPassword = !state.visibilityPassword"
              />
            </template>
          </q-input>
          <q-field :value="state.policyTerms" borderless dense>
            <template v-slot:control>
              <q-checkbox
                v-model="state.policyTerms"
                color="primary"
                class="text-caption"
                :label="$t('placeholders.policyTerms')"
                :rules="formRules.policyTerms"
                :disable="isLoading"
              />
            </template>
          </q-field>
        </template>
      </default-form>
    </q-card-section>

    <q-card-section class="q-py-none"> </q-card-section>

    <q-card-section class="q-my-none">
      <q-separator />
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-btn
        :disable="isLoading"
        label="Fazer login em vez disso"
        color="secondary"
        class="full-width"
        flat
        to="/login"
      />
    </q-card-section>

    <q-inner-loading
      :showing="isLoading"
      :label="$t('interface.pleaseWait')"
      label-class="text-primary"
      label-style="font-size: 1.1em"
    />
  </q-card>
</template>

<script lang="ts" setup>
  import useLoginMain from './composables/useRegisterMain'
  import LogoNextfit from 'src/components/user-interface/logo/LogoNextfit.vue'
  import { redirectToApp } from 'src/utils/redirect/redirectToApp.util'
  import { onMounted, computed, onBeforeUnmount } from 'vue'
  import DefaultForm from 'src/components/default-form/DefaultForm.vue'
  import { formFields } from './constants/formFields.const'
  import { formRules } from './constants/formRules.const'
  import { registerLoader } from './constants/registerLoader.const'
  import useLoader from 'src/composables/useLoader'

  const { state, resetState, handleSubmitForm } = useLoginMain()
  const { loaderStatus } = useLoader()

  const isLoading = computed(() => loaderStatus(registerLoader.submitForm))

  onMounted(() => redirectToApp())
  onBeforeUnmount(() => resetState())
</script>

<style lang="scss"></style>
