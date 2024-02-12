<template>
  <q-card v-bind="$vCard">
    <q-expansion-item
      class="no-borders q-pa-none q-mb-sm"
      expand-icon-toggle
      hide-expand-icon
      v-model="expanded"
    >
      <template #header>
        <q-item-section>
          <h1 class="text-h6 q-my-none">{{ title }}</h1>
        </q-item-section>
        <q-item-section side>
          <q-btn flat icon="code" round @click="expanded = !expanded" />
        </q-item-section>
      </template>

      <template #default>
        <q-tabs v-model="tab" no-caps align="left" dense>
          <q-tab
            v-if="template"
            :name="TabPanelOptions.template"
            label="Template"
          />
          <q-tab v-if="script" :name="TabPanelOptions.script" label="Script" />
        </q-tabs>
        <q-tab-panels v-model="tab" animated class="full-height">
          <q-tab-panel v-if="template" name="template" class="q-pa-none">
            <highlight-code :code="template" />
          </q-tab-panel>

          <q-tab-panel v-if="script" name="script" class="q-pa-none">
            <highlight-code :code="script" />
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-expansion-item>

    <div class="q-pb-md q-px-md">
      <slot></slot>
    </div>
  </q-card>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import HighlightCode from '../highlight-code/HighlightCode.vue'
  import { TabPanelOptions } from './enums/TabPanelOptions.enum'

  interface IProps {
    title: string
    template?: string
    script?: string
  }

  defineProps<IProps>()

  const tab = ref<TabPanelOptions>(TabPanelOptions.template)
  const expanded = ref<boolean>(false)
</script>
<style lang="scss" scoped>
.wrapper-documentation {
  position: relative;
  .group-buttons-doc {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
}
</style>
