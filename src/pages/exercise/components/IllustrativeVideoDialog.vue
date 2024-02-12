<template>
  <q-dialog
    :model-value="dialogIsOpen(illustrativeVideo)"
    ref="dialog"
    transition-show="scale"
    transition-hide="scale"
    persistent
    @hide="handleCloseDialog"
  >
    <q-card
      class="bg-black border-primary"
      style="width: 500px"
      bordered
      v-bind="$vCard"
    >
      <q-card-section>
        <p class="text-primary text-bold">
          {{ dialogState[illustrativeVideo]?.data.name }}
        </p>
      </q-card-section>
      <q-img :src="dialogState[illustrativeVideo]?.data.illustrativeVideo" />

      <q-card-actions align="right">
        <q-btn
          color="primary"
          flat
          :label="$t('close')"
          @click="handleCloseDialog"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
  import { useDialog } from 'src/composables/useDialog'
  import { exerciseDialog } from '../constants/exerciseDialog.const'

  const {
    dialogState,
    closeDialog,
    dialogIsOpen,
    createDialog,
    clearDataDialog,
  } = useDialog()

  const { illustrativeVideo } = exerciseDialog

  createDialog(illustrativeVideo)

  function handleCloseDialog() {
    closeDialog(illustrativeVideo)
    clearDataDialog(illustrativeVideo)
  }
</script>
