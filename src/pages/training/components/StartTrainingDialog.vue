<template>
  <q-dialog
    :model-value="dialogIsOpen(startTraining)"
    ref="dialog"
    transition-show="scale"
    transition-hide="scale"
    @hide="handleCloseDialog"
    :full-width="$q.screen.sm || $q.screen.xs"
    :maximized="$q.screen.sm || $q.screen.xs"
    persistent
  >
    <activity-player v-if="state.isPlayerActivity" />
    <q-card
      v-else
      style="display: flex; flex-direction: column; width: 500px"
      bordered
      v-bind="$vCard"
      class="full-height"
    >
      <q-card-section class="q-pt-sm">
        <count-activity-completed />
      </q-card-section>
      <q-card-section class="full-height q-gutter-md overflow-auto q-pt-none">
        <q-card
          v-for="(activity, idx) in state.trainingDialog.activities"
          :key="idx"
          flat
          bordered
        >
          <q-card-section class="q-py-none bg-black">
            <q-img
              fit="contain"
              :draggable="false"
              height="180px"
              :src="activity.illustrativeVideo"
            />
          </q-card-section>

          <q-card-actions class="flex justify-between">
            <span>
              <p class="text-bold q-mb-none">{{ activity.exerciseName }}</p>
              <p class="text-caption q-mb-none">
                {{ legendActivity(activity) }}
              </p>
            </span>
            <span>
              <q-checkbox
                v-model="state.activities[idx].isCompleted"
                color="secondary"
              />
              <q-btn
                @click="selectActivity(idx)"
                flat
                round
                icon="play_arrow"
              />
            </span>
          </q-card-actions>
        </q-card>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right" class="flex justify-between">
        <q-btn
          color="default"
          flat
          :label="$t('toDiscart')"
          @click="handleCloseDialog"
        />
        <span class="flex gap-md">
          <q-btn
            v-if="showSaveButton"
            color="secondary"
            unelevated
            :label="$t('saveTraining')"
            @click="saveTraining"
          />
          <q-btn
            v-else-if="state.timeTraining == 0"
            color="primary"
            unelevated
            :label="$t('startTraining')"
            @click="handleStartTraining"
          />
        </span>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import { useDialog } from 'src/composables/useDialog'
  import { trainingDialog } from '../constants/trainingDialog.const'
  import { useTraining } from '../composables/useTraining'
  import { abbreviatedTime } from 'src/utils/date/timeUtils.util'
  import { IActivityItem } from 'src/types/activity/IActivityItem.type'
  import { t } from 'src/utils/translate/translateUtils'
  import ActivityPlayer from './start-training-dialog/ActivityPlayer.vue'
  import CountActivityCompleted from './start-training-dialog/CountActivityCompleted.vue'

  const { closeDialog, dialogIsOpen, createDialog } = useDialog()

  const { startTraining } = trainingDialog
  const {
    state,
    saveTraining,
    selectActivity,
    startTimeTraining,
    resetTrainingDialog,
    handleStartTraining,
  } = useTraining()

  const showSaveButton = computed(() => {
    return state.value.activities
      .map((activity) => activity.isCompleted)
      .includes(true)
  })

  createDialog(startTraining)

  function handleCloseDialog() {
    closeDialog(startTraining)
    resetTrainingDialog()
  }

  function legendActivity(activity: IActivityItem) {
    return `${activity.series} ${t('series').toLocaleLowerCase()} - ${
      activity.repetitions
    } ${t('repetitions').toLocaleLowerCase()} - ${abbreviatedTime(
      activity.interval,
      'minutes'
    )} ${t('interval').toLocaleLowerCase()}`
  }
</script>
