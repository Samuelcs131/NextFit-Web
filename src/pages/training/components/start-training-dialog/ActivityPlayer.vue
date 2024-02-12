<template>
  <q-card
    style="display: flex; flex-direction: column; width: 500px"
    bordered
    v-bind="$vCard"
    class="full-height"
  >
    <q-card-section
      v-if="state.activities[state.playerIndex].illustrativeVideo"
      class="full-height overflow-auto q-pt-sm"
    >
      <count-activity-completed />
      <activity-view
        :activity-name="state.activities[state.playerIndex].exerciseName"
        :url="state.activities[state.playerIndex].illustrativeVideo"
      />
      <div class="flex justify-evenly q-pt-sm">
        <div class="text-center">
          <p class="q-mb-xs text-uppercase">{{ $t('series') }}</p>
          <span class="text-h6 text-bold">
            {{ state.countSeries }} /
            {{ state.activities[state.playerIndex].series }}
          </span>
        </div>
        <div class="text-center">
          <p class="q-mb-xs text-uppercase">{{ $t('repetitions') }}</p>
          <span class="text-h6 text-bold">{{
            state.activities[state.playerIndex].repetitions
          }}</span>
        </div>
        <div class="text-center">
          <p class="q-mb-xs text-uppercase">{{ $t('weight') }}</p>
          <span class="text-h6 text-bold"
            >{{ state.activities[state.playerIndex].weight }} kg</span
          >
        </div>
      </div>

      <div class="flex justify-center">
        <q-circular-progress
          show-value
          rounded
          :class="`text-bold q-mt-md cursor-pointer ${
            state.countSeries === state.activities[state.playerIndex].series
              ? 'text-positive'
              : 'text-primary'
          }
          `"
          :value="state.countdownSeconds"
          :thickness="0.1"
          :size="$q.screen.sm || $q.screen.xs ? '150px' : '100px'"
          :color="
            state.countSeries === state.activities[state.playerIndex].series
              ? 'positive'
              : 'primary'
          "
          center-color="black"
          @click="activeCircularProgress"
        >
          <q-icon
            v-if="
              state.countSeries === state.activities[state.playerIndex].series
            "
            name="done"
            size="4rem"
          />
          <span v-else class="non-selectable">{{
            formatSeconds(state.timeLeft)
          }}</span>
        </q-circular-progress>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-actions class="flex justify-between">
      <q-btn flat :label="$t('back')" @click="unselectActivity" />

      <q-btn
        color="primary"
        unelevated
        :disable="!state.activities[state.playerIndex].isCompleted"
        :label="
          state.playerIndex + 1 < state.activities.length
            ? $t('next')
            : $t('finish')
        "
        @click="nextActivity"
      />
    </q-card-actions>
  </q-card>
</template>
<script setup lang="ts">
  import { formatSeconds } from 'src/utils/date/timeUtils.util'
  import { useTraining } from '../../composables/useTraining'
  import ActivityView from 'src/components/activity-view/ActivityView.vue'
  import CountActivityCompleted from './CountActivityCompleted.vue'

  const {
    state,
    nextActivity,
    resetCountdown,
    unselectActivity,
    calculatePercentage,
    setActivityCompleted,
  } = useTraining()

  let intervalId: NodeJS.Timeout | undefined

  function handleCountdown() {
    const activity = state.value.activities[state.value.playerIndex]

    if (intervalId || state.value.countSeries === activity.series) return

    state.value.timeLeft = activity.interval

    intervalId = setInterval(() => {
      if (state.value.timeLeft > 0) {
        state.value.timeLeft--
        calculatePercentage()
        return
      }

      if (state.value.countSeries < activity.series) state.value.countSeries++

      resetCountdown()
      resetInterval()

      if (state.value.countSeries === activity.series) {
        setActivityCompleted()
      }
    }, 1000)
  }

  function activeCircularProgress() {
    state.value.countSeries ===
      state.value.activities[state.value.playerIndex].series
      ? nextActivity()
      : handleCountdown()
  }

  function resetInterval() {
    clearInterval(intervalId)
    intervalId = undefined
  }
</script>
