<template>
  <page-layout>
    <p class="q-mb-sm">Modo</p>
    <v-select
      v-model="storage.themeMode"
      :clearable="false"
      :options="themeMode"
      options-dense
      dense
      map-options
      emit-value
      :style="sizeDefault"
      @update:model-value="setThemeMode"
      disable-selected-item-slot
    >
      <template #v-selected-item="{ scope }">
        <q-icon class="q-mr-sm" size="sm" :name="scope.opt.icon" />
        {{ $t(scope.opt.label) }}
      </template>
    </v-select>

    <p class="q-mb-sm q-mt-xl">{{ $t('colors.colors') }}</p>
    <toggle-colors
      v-model="storage.themeColors"
      @update:model-value="setThemeColors"
    />

    <p class="q-mb-sm q-mt-xl">Largura conteúdo</p>
    <v-select
      v-model="storage.stretch"
      :options="stretchOptions"
      dense
      :clearable="false"
      emit-value
      options-dense
      map-options
      @update:model-value="setStretch"
      :style="sizeDefault"
    />

    <p class="q-mb-sm q-mt-xl">{{ $t('labels.language') }}</p>
    <v-select
      v-model="locale"
      :options="localeOptions"
      dense
      emit-value
      options-dense
      map-options
      :style="sizeDefault"
      @update:model-value="setLanguage"
    />
  </page-layout>
</template>

<script lang="ts" setup>
  import { localeOptions } from './constants/localeOptions.const'
  import { useI18n } from 'vue-i18n'
  import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
  import { themeMode } from './constants/themeOptions.const'
  import { useGlobalSettings } from 'stores/global-settings/globalSettings.store'
  import { stretchOptions } from './constants/stretchOptions.const'
  import ToggleColors from './toggle-colors/ToggleColors.vue'
  import VSelect from 'src/components/user-interface/select/VSelect.vue'

  const sizeDefault = { width: '100%', maxWidth: '200px' }

  const { locale } = useI18n()
  const { storage, setLanguage, setStretch, setThemeMode, setThemeColors } =
    useGlobalSettings()
</script>
<style lang="scss"></style>
