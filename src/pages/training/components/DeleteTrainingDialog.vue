<template>
  <q-dialog
    :model-value="dialogIsOpen(deleteTraining)"
    ref="dialog"
    transition-show="scale"
    transition-hide="scale"
    @hide="handleCloseDialog"
  >
    <q-card style="width: 500px" bordered v-bind="$vCard">
      <q-card-section class="q-pb-none">
        <h6 class="text-h6 q-my-none">{{ $t('deleteExercise') }}</h6>
      </q-card-section>

      <q-card-section>
        <p class="text-body">
          {{
            $t('wantToDeleteTraining', {
              training: state.trainingDialog.name,
            })
          }}
        </p>
      </q-card-section>
      <q-separator />

      <q-card-actions align="right">
        <q-btn
          color="negative"
          unelevated
          outline
          :label="$t('yesDelete')"
          @click="handleCloseDialog"
        />
        <q-btn
          color="default"
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
  import { trainingDialog } from '../constants/trainingDialog.const'
  import { useTraining } from '../composables/useTraining'

  const { closeDialog, dialogIsOpen, createDialog } = useDialog()

  const { deleteTraining } = trainingDialog
  const { state, resetTrainingDialog } = useTraining()

  createDialog(deleteTraining)

  function handleCloseDialog() {
    closeDialog(deleteTraining)
    resetTrainingDialog()
  }
</script>
