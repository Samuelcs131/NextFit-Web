<template>
  <q-dialog
    :model-value="dialogIsOpen(deleteActivityDialog)"
    ref="dialog"
    transition-show="scale"
    transition-hide="scale"
    @hide="handleCloseDialog"
  >
    <q-card style="width: 500px" bordered v-bind="$vCard">
      <q-card-section class="q-pb-none">
        <h6 class="text-h6 q-my-none">{{ $t('deleteActivity') }}</h6>
      </q-card-section>

      <q-card-section>
        <p class="text-body">
          {{ $t('wantToDeleteActivity') }}
        </p>
        <p class="q-mb-xs">
          <span class="text-grey-500">{{ $t('exercise') }}: </span>
          <span>
            {{ dialogState[deleteActivityDialog]?.data.exercise.name }}
          </span>
        </p>
        <p class="q-mb-xs">
          <span class="text-grey-500">{{ $t('date') }}: </span>
          <span>
            {{
              dateLocaleToString(dialogState[deleteActivityDialog]?.data.date, {
                dateStyle: 'full',
                timeStyle: 'medium',
              })
            }}
          </span>
        </p>
        <p class="q-mb-xs">
          <span class="text-grey-500">{{ $t('series') }}: </span>
          <span>{{ dialogState[deleteActivityDialog]?.data.series }}</span>
        </p>
        <p class="q-mb-xs">
          <span class="text-grey-500">{{ $t('repetitions') }}: </span>
          <span>{{ dialogState[deleteActivityDialog]?.data.repetitions }}</span>
        </p>
        <p class="q-mb-xs">
          <span class="text-grey-500">{{ $t('weight') }}: </span>
          <span>{{ dialogState[deleteActivityDialog]?.data.weight }}</span>
        </p>
        <p class="q-mb-xs">
          <span class="text-grey-500">{{ $t('interval') }}: </span>
          <span>
            {{
              timeHumanized(dialogState[deleteActivityDialog]?.data.interval)
            }}
          </span>
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
  import { activityDialog } from '../constants/activityDialog.const'
  import {
    dateLocaleToString,
    timeHumanized,
  } from 'src/utils/date/dateUtils.util'

  const {
    dialogState,
    closeDialog,
    dialogIsOpen,
    createDialog,
    clearDataDialog,
  } = useDialog()

  const { deleteActivityDialog } = activityDialog

  createDialog(deleteActivityDialog)

  function handleCloseDialog() {
    closeDialog(deleteActivityDialog)
    clearDataDialog(deleteActivityDialog)
  }


  console.log('CREATE')
</script>
