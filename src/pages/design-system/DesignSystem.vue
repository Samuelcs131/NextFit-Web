<template>
  <page-layout>
    <group-color title="Primarias">
      <color-palette
        v-for="(color, idx) in principal"
        :key="idx"
        :name="$t(`colors.${color.name}`)"
        :color-main="color.main"
        :shadow-color-main="color.shadow"
        :accent-colors="[color.lighter, color.light, color.dark, color.darker]"
      />
    </group-color>

    <group-color title="Alertas">
      <color-palette
        v-for="(color, idx) in colorsAlert"
        :key="idx"
        :name="$t(`ui.${color.name}`)"
        :color-main="color.main"
        :shadow-color-main="color.shadow"
        :accent-colors="[color.lighter, color.light, color.dark, color.darker]"
        :col-container="3"
        :col-main="10"
        :col-accents="2"
      />
    </group-color>

    <group-color title="Escala cinza">
      <color-palette
        v-for="(color, idx) in scaleGrey"
        :key="idx"
        :name="`G${color.name}`"
        :color-main="color.color"
        :col-container="1"
        :col-main="12"
        :col-accents="0"
        borded
      />
    </group-color>

    <group-color title="Background">
      <color-palette
        v-for="(color, idx) in backgroundTheme"
        :key="idx"
        :name="color.name"
        :color-main="color.color"
        :col-container="2"
        :col-main="12"
        :col-accents="0"
        borded
      />
    </group-color>

    <group-color title="Texto">
      <color-palette
        v-for="(color, idx) in colorsText"
        :key="idx"
        :name="color.name"
        :color-main="color.color"
        :col-container="2"
        :col-main="12"
        :col-accents="0"
        borded
      />
    </group-color>

    <h1 class="text-h5 q-mt-xl">Tipográfia</h1>
    <div class="row items-center" v-for="(text, idx) in textStyle" :key="idx">
      <p class="col-12 q-mb-none col-sm-2">{{ text.name }}</p>
      <p :class="`col-12 q-mb-none col-sm-10 text-${text.type}`">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

    <h1 class="text-h5 q-mt-xl">Botões</h1>
    <div class="row q-col-gutter-lg">
      <buttons-group />
    </div>

    <h1 class="text-h5 q-mt-xl">Alertas</h1>
    <div class="row q-col-gutter-lg">
      <div class="col q-gutter-sm">
        <q-btn
          v-bind="$vInfoBtn"
          label="Alerta"
          @click="openFeedback('info')"
        />
        <q-btn
          v-bind="$vNegativeBtn"
          label="Alerta"
          @click="openFeedback('negative')"
        />
        <q-btn
          v-bind="$vPositiveBtn"
          label="Alerta"
          @click="openFeedback('positive')"
        />
        <q-btn
          v-bind="$vWarningBtn"
          label="Alerta"
          @click="openFeedback('warning')"
        />
        <q-btn
          v-bind="$vSecondaryBtn"
          label="Alerta"
          @click="openFeedback('ongoing')"
        />
      </div>
    </div>
  </page-layout>
</template>
<script setup lang="ts">
import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
import ColorPalette from './components/ColorPalette.vue'
import { useDesignSystem } from './composables/useDesignSystem'
import GroupColor from './components/GroupColor.vue'
import ButtonsGroup from './components/ButtonsGroup.vue'
import { useNotify } from 'src/composables/useNotify'
import { QType } from 'src/enums/quasar/type.enum'

const {
  principal,
  colorsAlert,
  scaleGrey,
  backgroundTheme,
  textStyle,
  colorsText,
} = useDesignSystem()
const { feedback } = useNotify()

function openFeedback(opa: `${QType}`) {
  feedback({
    title: 'lorem ipsum',
    description: 'lorem fkodonsdofnoisdf',
    position: 'top-right',
    type: opa,
    timeout: 5000,
  })
}
</script>
