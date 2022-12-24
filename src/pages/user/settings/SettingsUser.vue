<template>
  <q-page padding class="container bg-background">
    <p class="q-mb-sm">Modo</p>
    <q-btn-group outline>
      <q-btn :outline="!currentThemeMode.light" color="primary" label="Light" icon="light_mode"
        v-on:click="changeThemeMode('light')" />
      <q-btn :outline="!currentThemeMode.dark" color="primary" label="Dark" icon="dark_mode"
        v-on:click="changeThemeMode('dark')" />
    </q-btn-group>

    <p class="q-mb-sm q-mt-xl">{{ $t('ui.colors') }}</p>
    <div class="q-gutter-sm">
      <q-radio v-model="preset" v-for="color in presetsOptions" :key="color.name" :val="color.name"
        v-on:click="changePreset(color.name)" :label="$t(`colors.${color.name}`)" keep-color :color="color.Qcolor"
        class="non-selectable" />
    </div>

    <p class="q-mb-sm q-mt-xl">Largura conteúdo</p>
    <q-btn-group outline>
      <q-btn :outline="stretch" color="primary" label="Limitado" v-on:click="changeStretch(false)" />
      <q-btn :outline="!stretch" color="primary" label="Maximizado" v-on:click="changeStretch(true)" />
    </q-btn-group>

    <p class="q-mb-sm q-mt-xl">{{ $t('ui.language') }}</p>
    <q-select v-model="locale" :options="localeOptions" label="Quasar Language" outlined emit-value
      map-options style="min-width: 200px" @update:model-value="changeLanguage"/>
  </q-page>
</template>

<script lang="ts" setup>
import useMetaHtml from 'src/composables/useMetaHtml'
import { storeToRefs } from 'pinia'
import useAuthUser from 'src/composables/useAuthUser'
import { useSettingsGlobalStore } from 'src/stores/SettingsGlobalStore'
import { presetsOptions } from './constants/presetOptions.const'
import { localeOptions } from './constants/localeOptions.const'
import { useI18n } from 'vue-i18n'

const { titlePage } = useMetaHtml()
titlePage('Definições')

const { isLoggedIn } = useAuthUser()
isLoggedIn()

const { locale } = useI18n()

const settingsGlobalStore = useSettingsGlobalStore()
const { currentThemeMode, stretch, preset } = storeToRefs(settingsGlobalStore)
const { changePreset, changeThemeMode, changeStretch, changeLanguage } = settingsGlobalStore

</script>
