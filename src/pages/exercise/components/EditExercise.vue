<template>
  <page-layout breadcrumbs>
    <q-card v-bind="$vCard" class="overflow-hidden">
      <q-card-section>
        <v-form
          v-model="state.form"
          :form-fields="formFields"
          cancel-label-show
          :active-skeleton="loaderStatus(exerciseLoader.fetchExercise)"
          :cancel-label-show-props="{ to: { name: 'exercise' } }"
        >
          <template #after-illustrativeVideo>
            <div class="full-width">
              <div class="row q-col-gutter-md">
                <div class="col-12 col-sm-6">
                  <limb-select
                    :active-skeleton="
                      loaderStatus(exerciseLoader.fetchExercise)
                    "
                    class="full-width"
                    v-model="state.form.fields.limbs"
                    auto-filter
                    use-input
                    label="limbs"
                    :max-items-displayed="2"
                    multiple
                    use-chips
                    emit-value
                    map-options
                    @update:model-value="resetMuscles()"
                    :rules="[requiredRule]"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <q-skeleton
                    v-if="loaderStatus(exerciseLoader.fetchExercise)"
                    type="QInput"
                    height="56px"
                  />
                  <v-select
                    v-else
                    class="full-width"
                    v-model="state.form.fields.muscles"
                    auto-filter
                    use-input
                    emit-value
                    label="muscles"
                    :max-items-displayed="2"
                    multiple
                    map-options
                    :options="filteredMuscleOptions"
                    use-chips
                    :rules="[requiredRule]"
                  />
                </div>
              </div>
            </div>
          </template>
        </v-form>
      </q-card-section>
      <q-inner-loading :showing="loaderStatus(exerciseLoader.fetchExercise)">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-6">
        <muscle-visualization :body-select-options="bodySelectOptions" />
      </div>
      <div class="col-12 col-sm-6" v-if="state.form.fields.illustrativeVideo">
        <activity-view :url="state.form.fields.illustrativeVideo" />
      </div>
    </div>
  </page-layout>
</template>
<script setup lang="ts">
  import VForm from 'src/components/v-form/VForm.vue'
  import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
  import { formFields } from '../constants/formFields.const'
  import { computed, onMounted } from 'vue'
  import LimbSelect from 'src/components/selects/limb/LimbSelect.vue'
  import {
    muclesByLimbsOptions,
    musclesDictionary,
  } from 'src/constants/muscles/muscles.const'
  import VSelect from 'src/components/user-interface/select/VSelect.vue'
  import { Muscles } from 'src/enums/muscles/Muscles.enum'
  import MuscleVisualization from 'src/components/muscle-visualization/MuscleVisualization.vue'
  import ActivityView from 'src/components/activity-view/ActivityView.vue'
  import { requiredRule } from 'src/utils/validations/form-rules/mixedRules.util'
  import { useLocalStorage } from 'src/composables/useLocalStorage'
  import { themeColors } from 'src/theme/colors.theme'
  import { useRoute } from 'vue-router'
  import { useExercises } from './../composables/useExercises'
  import useLoader from 'src/composables/useLoader'
  import { exerciseLoader } from './../constants/exerciseLoader.const'

  const { state, resetMuscles, fetchExercise, resetForm } = useExercises()
  const { storage } = useLocalStorage()

  const filteredMuscleOptions = computed(() => {
    const muscles: unknown[] = []

    state.value.form.fields.limbs?.forEach((limb) =>
      muscles.push(...muclesByLimbsOptions[limb])
    )

    return muscles as IMusclesOptions[]
  })

  const bodySelectOptions = computed(() => {
    return state.value.form.fields.muscles?.map((muscle) => {
      return {
        label: musclesDictionary[muscle].name,
        value: muscle,
        color: `${themeColors[storage.value.themeColors].primary.main}90`,
      }
    })
  })

  const { params } = useRoute()
  const { loaderStatus } = useLoader()

  onMounted(() => {
    resetForm()
    if (params.id) fetchExercise(params.id as string)
  })

  interface IMusclesOptions {
    name: string
    value: Muscles
  }
</script>
