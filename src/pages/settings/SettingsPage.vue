<template>
  <page-layout>
    <p class="q-mb-sm">{{ $t('mode') }}</p>
    <q-select
      v-model="state.themeMode"
      :clearable="false"
      :options="themeMode"
      options-dense
      dense
      map-options
      emit-value
      outlined
      :style="sizeDefault"
      @update:model-value="setThemeMode"
      disable-selected-item-slot
    >
      <template #selected-item="scope">
        <q-icon class="q-mr-sm" size="sm" :name="scope.opt.icon" />
        {{ scope.opt.label }}
      </template>
    </q-select>

    <p class="q-mb-sm q-mt-xl">{{ $t('colors') }}</p>
    <toggle-colors
      :value="state.themeColors"
      @update:model-value="setThemeColors"
    />

    <p class="q-mb-sm q-mt-xl">{{ $t('contentWidth') }}</p>
    <q-select
      v-model="state.stretch"
      :options="stretchOptions"
      outlined
      dense
      :clearable="false"
      emit-value
      options-dense
      map-options
      @update:model-value="setStretch"
      :style="sizeDefault"
    />

    <p class="q-mb-sm q-mt-xl">{{ $t('language') }}</p>
    <q-select
      :model-value="state.language"
      :options="localeOptions"
      outlined
      dense
      emit-value
      options-dense
      map-options
      :style="sizeDefault"
      @update:model-value="handleLocaleSelect"
    />

    <q-btn
      color="default"
      unelevated
      class="q-mb-sm q-mt-xl"
      @click="$q.fullscreen.toggle()"
      :label="$t('fullscreen')"
      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
    />
  </page-layout>
</template>

<script lang="ts" setup>
  import { localeOptions } from './constants/localeOptions.const'
  import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
  import { themeMode } from './constants/themeOptions.const'
  import { stretchOptions } from './constants/stretchOptions.const'
  import ToggleColors from './toggle-colors/ToggleColors.vue'
  import { useRouter } from 'vue-router'
  import { ref, onBeforeMount } from 'vue'
  import { useLocalStorage } from 'src/composables/useLocalStorage'
  import { defaultTheme } from 'src/constants/theme/defaultTheme.const'
  import { useInterface } from 'src/composables/useInterface'
  import { Languages } from 'src/i18n/enums/languages.enum'

  const sizeDefault = { width: '100%', maxWidth: '250px' }
  const state = ref(defaultTheme)

  const { go } = useRouter()
  const { setLanguage, setStretch, setThemeMode, setThemeColors } = useInterface()

  function handleLocaleSelect(value: Languages) {
    setLanguage(value)
    go(0)
  }

  onBeforeMount(() => {
    const { getAll } = useLocalStorage()
    state.value = getAll()
  })
</script>
<style lang="scss"></style>
