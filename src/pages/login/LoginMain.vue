<template>
  <div class="bg-grandient flex items-center justify-center window-width window-height">
    <q-card flat bordered style="width: 350px" class="bg-background">
      <q-form @submit="onLogin">
        <q-card-section>
          <h1 class="text-h4 text-bold">NextFit</h1>
          <p class="q-ma-none">Bora largar o sedentarismo boy</p>
        </q-card-section>
        <q-card-section class="q-gutter-md">
          <q-input outlined v-model="state.email" :rules="[emailRule]" :label="t('form.email')" />

          <q-input outlined v-model="state.password" :rules="[minPwdRule, maxPwdRule, spacedPwdRule]"
            :type="state.visibilityPwd ? 'password' : 'text'" :label="t('form.password')">
            <template v-slot:append>
              <q-icon :name="state.visibilityPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                @click="state.visibilityPwd = !state.visibilityPwd" />
            </template>
          </q-input>
        </q-card-section>

        <q-card-section class="q-py-none">
          <a class="q-ma-none">{{ $t('form.forgotPassword') }}</a>
        </q-card-section>

        <q-card-section class="flex items-center">
          <q-btn :loading="state.btnLogInLoading" type="submit" color="primary" class="full-width">{{ $t('form.logIn')
          }}</q-btn>
        </q-card-section>
      </q-form>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'src/boot/i18n'
import useLoginMain from './composables/useLoginMain'
import { emailRule } from 'src/utils/validations/form-rules/email'
import { spacedPwdRule, maxPwdRule, minPwdRule } from 'src/utils/validations/form-rules/password'
import useMetaHtml from 'src/composables/useMetaHtml'

const { titlePage } = useMetaHtml()
titlePage('Login')

const { t } = useI18n()
const { onLogin, state } = useLoginMain()

</script>

<style lang="scss">
.bg-grandient {
  /*  background: linear-gradient(64deg, #a80dff, #229bd4); */
  background: linear-gradient(-45deg, #ee7752, #563ce7, #23a6d5, #23d5ab);
  background-size: 150% 150%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }

}
</style>
