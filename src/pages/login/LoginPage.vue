<template>
  <div class="flex items-center justify-center window-width window-height">
    <q-card flat style="width: 350px" class="bg">
      <q-form @submit="onLogin">
        <q-card-section
          class="q-py-none flex justify-center"
          style="left: -30px"
        >
          <div class="flex items-center font-prosto-one">
            <logo-nextfit class="q-mr-md" size="xl" color="primary" />
            <h1 class="text-h4 text-bold non-selectable">NextFit</h1>
          </div>
        </q-card-section>
        <q-card-section class="q-gutter-sm q-pb-none">
          <q-input
            v-bind="$vInput"
            v-model="state.email"
            :rules="formRules.email"
            :label="$t('email')"
          />

          <q-input
            v-bind="$vInput"
            v-model="state.password"
            :rules="formRules.password"
            hint=""
            :type="state.visibilityPwd ? 'password' : 'text'"
            :label="$t('password')"
          >
            <template v-slot:append>
              <q-icon
                :name="state.visibilityPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="state.visibilityPwd = !state.visibilityPwd"
              />
            </template>
          </q-input>
        </q-card-section>

        <q-card-section class="q-pt-none flex justify-between items-center">
          <q-chip
            clickable
            square
            dense
            label="Demo"
            outline
            color="secondary"
          />

          <router-link
            class="q-ma-none text-body-primary no-decoration"
            to="/forgotPassword"
          >
            {{ $t('forgotPassword') }}</router-link
          >
        </q-card-section>

        <q-card-section class="flex items-center q-pt-none">
          <q-btn
            unelevated
            :loading="loaderStatus(loginLoader.loginUser)"
            type="submit"
            color="primary"
            class="full-width"
            >{{ $t('logIn') }}</q-btn
          >
        </q-card-section>

        <q-card-section class="text-center q-py-none">
          <p>
            {{ $t('newToNextFit') }}
            <router-link to="/register" class="text-primary no-decoration">{{
              $t('createAccount')
            }}</router-link>
          </p>
        </q-card-section>
      </q-form>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
  import useLoginMain from './composables/useLoginMain'
  import LogoNextfit from 'src/components/user-interface/logo/LogoNextfit.vue'
  import { formRules } from './constants/formRules.const'
  import useLoader from 'src/composables/useLoader'
  import { loginLoader } from './constants/loginLoader.const'
  import { onBeforeMount } from 'vue'
  import { redirectToApp } from 'src/utils/redirect/redirectToApp.util'

  const { onLogin, state } = useLoginMain()
  const { loaderStatus } = useLoader()

  onBeforeMount(() => redirectToApp())
</script>

<style lang="scss"></style>
