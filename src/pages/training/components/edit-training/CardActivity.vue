<template>
  <q-card
    class="no-shadow q-mb-md"
    bordered
    v-if="state.form.fields.activities && state.form.fields.activities[index]"
  >
    <div class="row q-col-gutter-md q-pa-md">
      <div class="col-12 col-sm-4 col-md-2">
        <q-img
          class="rounded-borders img-card-activity bg-black"
          :src="state.form.fields.activities[index].illustrativeVideo"
        />
      </div>
      <div class="col-12 col-sm-8 col-md-10">
        <div class="row q-col-gutter-md">
          <template v-if="!isEdit">
            <div class="col-12">
              <span>
                <span class="text-caption text-disabled">{{
                  $t('exercise')
                }}</span>
                <p class="q-mb-none">
                  {{ state.form.fields.activities[index].exerciseName }}
                </p>
              </span>
            </div>
            <template v-if="state.denseVisibility || !($q.screen.sm || $q.screen.xs)">
              <div class="col-6 col-md-3">
                <span>
                  <span class="text-caption text-disabled">{{
                    $t('series')
                  }}</span>
                  <p class="q-mb-none">
                    {{ state.form.fields.activities[index].series }}
                  </p>
                </span>
              </div>
              <div class="col-6 col-md-3">
                <span>
                  <span class="text-caption text-disabled">{{
                    $t('repetitions')
                  }}</span>
                  <p class="q-mb-none">
                    {{ state.form.fields.activities[index].repetitions }}
                  </p>
                </span>
              </div>
              <div class="col-6 col-md-3">
                <span>
                  <span class="text-caption text-disabled">{{
                    $t('weight')
                  }}</span>
                  <p class="q-mb-none">
                    {{ state.form.fields.activities[index].weight }} Kg
                  </p>
                </span>
              </div>
              <div class="col-6 col-md-3">
                <span>
                  <span class="text-caption text-disabled">{{
                    $t('interval')
                  }}</span>
                  <p class="q-mb-none">
                    {{
                      timeHumanized(
                        state.form.fields.activities[index].interval
                      )
                    }}
                  </p>
                </span>
              </div>
            </template>
          </template>
          <template v-else>
            <div class="col-12">
              <exercise-select
                v-model="state.form.fields.activities[index].exerciseId"
                :label="$t('exercise')"
                v-bind="$vInput"
                dense
                :rules="[requiredRule]"
                @update:model-value="handleExercise"
              />
            </div>
            <div class="col-6">
              <q-input
                v-model="state.form.fields.activities[index].series"
                :label="$t('series')"
                v-bind="$vInput"
                dense
                type="number"
                :rules="handleRulesNumber(series)"
              />
            </div>
            <div class="col-6">
              <q-input
                v-model="state.form.fields.activities[index].repetitions"
                :label="$t('repetitions')"
                v-bind="$vInput"
                dense
                type="number"
                :rules="handleRulesNumber(repetitions)"
              />
            </div>
            <div class="col-6">
              <q-input
                v-model="state.form.fields.activities[index].weight"
                :label="$t('weight')"
                v-bind="$vInput"
                dense
                type="number"
                :rules="handleRulesNumber(weight)"
              />
            </div>
            <div class="col-6">
              <q-input
                v-model="state.form.fields.activities[index].interval"
                :label="$t('interval')"
                v-bind="$vInput"
                dense
                type="number"
                :rules="handleRulesNumber(interval)"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
    <q-separator />
    <q-card-section class="q-pa-xs flex justify-between items-center">
      <span class="flex">
        <q-icon
          name="drag_indicator"
          class="draggable-move"
          color="grey"
          size="xs"
        />
        <p class="q-mb-none q-ml-sm">#{{ index + 1 }}</p>
      </span>
      <span class="q-gutter-sm q-mr-sm">
        <q-btn
          v-if="!isEdit"
          flat
          dense
          color="default"
          :label="$t('edit')"
          @click="isEdit = true"
        />
        <q-btn
          v-if="isEdit"
          flat
          dense
          color="primary"
          :label="$t('change')"
          @click="handleEdit"
        />
        <q-btn
          v-if="!isEdit"
          flat
          dense
          color="negative"
          :label="$t('delete')"
          @click="handleDelete(state.form.fields.activities[index].id.value)"
        />
      </span>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
  import ExerciseSelect from 'src/components/selects/exercise/ExerciseSelect.vue'
  import { useTraining } from '../../composables/useTraining'
  import { requiredRule } from 'src/utils/validations/form-rules/mixedRules.util'
  import { ref, onMounted } from 'vue'
  import { timeHumanized } from 'src/utils/date/dateUtils.util'
  import { activityEntityRoles } from 'src/constants/activity/activityEntityRoles.const'
  import {
    maxRule,
    minRule,
  } from 'src/utils/validations/form-rules/numberRules.util'
  import { IExercise } from 'src/types/exercise/IExercise.type'

  interface IProps {
    index: number
  }

  interface IMinMax {
    max: number
    min: number
  }

  const props = defineProps<IProps>()
  const isEdit = ref<boolean>(false)

  function handleEdit() {
    if (!state.value.form.fields.activities) return
    const activityItem = state.value.form.fields.activities[props.index]

    const proprety = [
      activityItem.id.value || null,
      activityItem.exerciseId || null,
      activityItem.interval || null,
      activityItem.series || null,
      activityItem.weight || null,
      activityItem.repetitions || null,
    ]

    isEdit.value = proprety.includes(null)
  }

  const { interval, repetitions, series, weight } = activityEntityRoles

  function handleRulesNumber({ max, min }: IMinMax) {
    return [
      requiredRule,
      (v: number) => maxRule(v, max),
      (v: number) => minRule(v, min),
    ]
  }

  function handleExercise(value?: IExercise) {
    if (!state.value.form.fields.activities || !value) return
    state.value.form.fields.activities[props.index].exerciseName = value.name
    state.value.form.fields.activities[props.index].id = value.id
    state.value.form.fields.activities[props.index].illustrativeVideo =
      value.illustrativeVideo
  }

  function handleDelete(id: string) {
    if (!state.value.form.fields.activities) return

    state.value.form.fields.activities =
      state.value.form.fields.activities.filter((activity) => {
        return activity.id.value !== id
      })
  }

  const { state } = useTraining()

  onMounted(() => handleEdit())
</script>
<style lang="scss">
.img-card-activity {
  border: 0.8px solid $separator-color;
  height: 100%;
  width: 100%;
}

.draggable-move {
  cursor: move;
}
</style>
