<template>
  <page-layout>
    <p class="q-mb-sm">Modo</p>
    <q-select
      v-model="storage.themeMode"
      v-bind="$vInput"
      :clearable="false"
      :options="themeMode"
      options-dense
      dense
      map-options
      emit-value
      style="width: 100%; max-width: 200px"
      @update:model-value="setThemeMode"
    >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section>
            <q-item-label>{{ $t(`ui.${scope.opt.label}`) }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-slot:selected-item="{ opt }">
        <q-icon class="q-mr-sm" size="sm" :name="opt.icon" />
        {{ $t(`ui.${opt.label}`) }}
      </template>
    </q-select>

    <p class="q-mb-sm q-mt-xl">{{ $t('ui.colors') }}</p>
    <div class="q-gutter-sm">
      <q-radio
        v-for="color in colorsOptions"
        v-model="storage.themeColors"
        :key="color.name"
        :val="color.name"
        v-on:click="() => setThemeColors(color.name)"
        :label="$t(`colors.${color.name}`)"
        keep-color
        class="non-selectable"
        checked-icon="check_circle"
        unchecked-icon="circle"
        size="lg"
      />
    </div>

    <p class="q-mb-sm q-mt-xl">Largura conteúdo</p>
    <q-select
      v-model="storage.stretch"
      :options="stretchOptions"
      dense
      outlined
      v-bind="$vInput"
      :clearable="false"
      emit-value
      options-dense
      map-options
      @update:model-value="setStretch"
      style="width: 100%; max-width: 200px"
    >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section>
            <q-item-label>{{ $t(`ui.${scope.opt.label}`) }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-slot:selected-item="{ opt }">
        <q-icon class="q-mr-sm" size="sm" :name="opt.icon" />
        {{ $t(`ui.${opt.label}`) }}
      </template>
    </q-select>

    <p class="q-mb-sm q-mt-xl">{{ $t('ui.language') }}</p>
    <q-select
      v-model="locale"
      :options="localeOptions"
      dense
      outlined
      emit-value
      options-dense
      map-options
      style="width: 100%; max-width: 200px"
      v-bind="$vInput"
      @update:model-value="setLanguage"
    />

    <q-btn
      v-bind="$vPrimaryBtn"
      class="q-mb-sm q-mt-xl primary-brightness"
      :label="$t('common.designSystem')"
      to="/app/settings/designSystem"
    />
  </page-layout>
</template>

<script lang="ts" setup>
import { colorsOptions } from './constants/colorsOptions.const'
import { localeOptions } from './constants/localeOptions.const'
import { useI18n } from 'vue-i18n'
import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
import { themeMode } from './constants/themeOptions.const'
import { useGlobalSettings } from 'stores/global-settings/globalSettings.store'
import { stretchOptions } from './constants/stretchOptions.const'

const { locale } = useI18n()
const { storage, setLanguage, setStretch, setThemeMode, setThemeColors } =
  useGlobalSettings()
</script>
