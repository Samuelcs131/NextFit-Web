<template>
  <div class="flex items-center justify-center window-width window-height">
    <q-card flat style="width: 350px" class="bg">
      <q-form @submit="onRegister">
        <q-card-section class="q-py-none flex justify-center" style="left: -30px">
          <div class="flex items-center font-prosto-one" >
            <logo-nextfit class="q-mr-md" size="xl" color="primary" />
            <h1 class="text-h4 text-bold non-selectable">NextFit</h1>
          </div>
        </q-card-section>

        <q-card-section class="column q-col-gutter-sm q-py-none">
          <div class="row q-col-gutter-sm items-start">
            <div class="col-6">
              <q-input
                dense
                v-bind="$vInput"
                v-model="state.form.name"
                :label="'Nome'"
                :rules="[requiredRule]"
                type="text"
              />
            </div>
            <div class="col-6">
              <q-input
                dense
                v-bind="$vInput"
                v-model="state.form.lastName"
                :label="'Sobrenome'"
                :rules="[requiredRule]"
                type="text"
              />
            </div>
          </div>

          <q-input
            dense
            v-bind="$vInput"
            v-model="state.form.email"
            :label="'Email'"
            :rules="[emailRule]"
            type="email"
          />

          <q-input
            dense
            v-bind="$vInput"
            v-model="state.form.age"
            :label="'Idade'"
            :rules="[requiredRule]"
            type="number"
          />

          <q-select
            dense
            v-bind="$vInput"
            v-model="state.form.sex"
            :options="sexOptions"
            :clearable="false"
            label="Sexo"
            emit-value
            map-options
            :rules="[requiredRule]"
          />

          <q-select
            dense
            v-bind="$vInput"
            v-model="state.form.country"
            :options="state.options.country"
            :clearable="false"
            label="País"
            emit-value
            map-options
            use-input
            :rules="[requiredRule]"
            @Filter="handleFilterCountry"
          />

          <q-input
            dense
            v-bind="$vInput"
            v-model="state.form.height"
            :label="'Altura (Centímetros)'"
            :rules="[requiredRule]"
            type="number"
          />

          <q-input
            dense
            v-bind="$vInput"
            v-model="state.form.weight"
            :label="'Peso (Kilo)'"
            :rules="[requiredRule]"
            type="number"
          />

          <q-input
            dense
            v-bind="$vInput"
            v-model="state.form.password"
            :rules="[requiredRule, spacedPwdRule]"
            :type="state.visibilityPwd ? 'password' : 'text'"
            :label="t('form.password')"
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

        <q-card-section class="q-py-none">
          <q-field :value="state.form.terms" borderless dense>
            <template v-slot:control>
              <q-checkbox
                v-model="state.form.terms"
                color="primary"
                class="text-caption"
                label="Ao se inscrever, concordo com os Termos de Serviço e a Política de Privacidade."
              />
            </template>
          </q-field>
        </q-card-section>

        <q-card-section class="q-my-none">
          <q-btn
            unelevated
            :loading="state.btnLogInLoading"
            type="submit"
            color="primary"
            class="full-width"
            >{{ 'Cadastre-se' }}</q-btn
          >
          <q-separator />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn
            label="Fazer login em vez disso"
            color="secondary"
            class="full-width"
            flat
            to="/login"
          />
        </q-card-section>
      </q-form>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'src/boot/i18n'
import useLoginMain from './composables/useRegisterMain'
import { emailRule } from 'src/utils/validations/form-rules/emailRule.utils'
import {
  spacedPwdRule,
} from 'src/utils/validations/form-rules/passwordRule.utils'
import LogoNextfit from 'src/components/user-interface/logo/LogoNextfit.vue'
import { sexOptions } from './constants/sexOptions.const'
import { requiredRule } from 'src/utils/validations/form-rules/requiredRule.utils'

// const { titlePage } = useMetaHtml()
// titlePage('Login')

const { t } = useI18n()
const { state, onRegister, handleFilterCountry } = useLoginMain()
</script>

<style lang="scss"></style>
