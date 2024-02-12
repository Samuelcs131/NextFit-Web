<template>
  <div class="flex justify-between items-center q-pb-xs">
    <span class="flex justify-center items-center gap-xs">
      <q-icon name="timer" />
      {{ formatSeconds(state.timeTraining) }}
    </span>
    <div class="flex justify-center items-center gap-xs">
      <q-icon
        v-for="(activity, idx) in state.activities"
        :key="idx"
        :name="activity.isCompleted ? 'circle' : 'radio_button_unchecked'"
        :color="
          state.activities[state.playerIndex].id.value == activity.id.value &&
          state.isPlayerActivity
            ? 'secondary'
            : 'primary'
        "
      />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { formatSeconds } from 'src/utils/date/timeUtils.util'
  import { useTraining } from '../../composables/useTraining'

  const { state } = useTraining()
</script>
