<template>
  <q-dialog
    :model-value="dialogIsOpen(activityDialog.activityPlayerDialog)"
    ref="dialog"
    transition-show="scale"
    transition-hide="scale"
    @hide="closeActivityDialog"
    @show="resetCountdown"
    :full-width="$q.screen.sm || $q.screen.xs"
    :maximized="$q.screen.sm || $q.screen.xs"
    persistent
  >
    <q-card style="width: 500px" class="container" bordered v-bind="$vCard">
      <q-card-section v-if="state.activityDialog.exercise.illustrativeVideo">
        <activity-view
          :activity-name="state.activityDialog.exercise.name"
          :url="state.activityDialog.exercise.illustrativeVideo"
        />
      </q-card-section>
      <q-card-section class="q-pa-none flex justify-evenly">
        <div class="text-center">
          <p class="q-mb-xs text-uppercase">{{ $t('series') }}</p>
          <span class="text-h6 text-bold">
            {{ state.countSeries }} / {{ state.activityDialog.series }}
          </span>
        </div>
        <div class="text-center">
          <p class="q-mb-xs text-uppercase">{{ $t('repetitions') }}</p>
          <span class="text-h6 text-bold">{{
            state.activityDialog.repetitions
          }}</span>
        </div>
        <div class="text-center">
          <p class="q-mb-xs text-uppercase">{{ $t('weight') }}</p>
          <span class="text-h6 text-bold"
            >{{ state.activityDialog.weight }} kg</span
          >
        </div>
      </q-card-section>
      <q-card-section class="q-pa-none" align="center">
        <q-circular-progress
          show-value
          rounded
          :class="`text-bold q-ma-md ${
            state.countSeries === state.activityDialog.series
              ? 'text-positive'
              : 'text-primary cursor-pointer'
          }
          `"
          :value="state.countdownSeconds"
          :thickness="0.1"
          :size="$q.screen.sm || $q.screen.xs ? '150px' : '100px'"
          :color="
            state.countSeries === state.activityDialog.series
              ? 'positive'
              : 'primary'
          "
          center-color="black"
          @click="handleCountdown()"
        >
          <q-icon
            v-if="state.countSeries === state.activityDialog.series"
            name="done"
            size="4rem"
          />
          <span v-else class="non-selectable">{{
            formatSeconds(state.timeLeft)
          }}</span>
        </q-circular-progress>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn
          color="default"
          flat
          :label="$t('close')"
          @click="closeActivityDialog"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
  import { onUnmounted } from 'vue'
  import ActivityView from 'src/components/activity-view/ActivityView.vue'
  import { useActivities } from '../composables/useActivities'
  import { activityDialog } from '../constants/activityDialog.const'
  import { formatSeconds } from 'src/utils/date/timeUtils.util'
  import { IActivity } from 'src/types/activity/IActivity.type'

  const {
    state,
    resetCountdown,
    calculatePercentage,
    dialogIsOpen,
    closeDialog,
  } = useActivities()

  let intervalId: NodeJS.Timeout | undefined

  function closeActivityDialog() {
    closeDialog(activityDialog.activityPlayerDialog)
    resetActivityPlayer()
    state.value.activityDialog = {} as IActivity
  }

  function handleCountdown() {
    const { interval } = state.value.activityDialog

    if (
      intervalId ||
      state.value.countSeries === state.value.activityDialog.series
    )
      return

    state.value.timeLeft = interval

    intervalId = setInterval(() => {
      if (state.value.timeLeft > 0) {
        state.value.timeLeft--
        calculatePercentage()
      } else {
        if (state.value.countSeries < state.value.activityDialog.series)
          state.value.countSeries++
        resetCountdown()
        resetInterval()
      }
    }, 1000)
  }

  function resetInterval() {
    clearInterval(intervalId)
    intervalId = undefined
  }

  function resetActivityPlayer() {
    resetInterval()
    state.value.countSeries = 0
  }

  onUnmounted(() => resetActivityPlayer())
</script>
