<template>
  <page-layout breadcrumbs>
    <q-card v-bind="$vCard" class="overflow-hidden">
      <q-card-section>
        <v-form
          v-model="state.form"
          :form-fields="formFields"
          cancel-label-show
          :active-skeleton="loaderStatus(activityLoader.fetchActivity)"
          :cancel-label-show-props="{ to: { name: 'activity' } }"
        >
          <template #after-date>
            <div class="col-12 col-md-6">
              <q-skeleton
                v-if="loaderStatus(activityLoader.fetchActivity)"
                type="QInput"
                height="56px"
              />
              <exercise-select
                v-else
                class="full-width"
                v-model="state.form.fields.exercise"
                :rules="[requiredRule]"
              />
            </div>
          </template>
          <template #before-toolbar>
            <q-btn
              :disable="state.activityDisabled"
              color="primary"
              outline
              :label="$t('carryOutActivity')"
              icon="play_circle"
              @click="openActivityPlayerDialog(state.form.fields as IActivity)"
            />
          </template>
        </v-form>
      </q-card-section>
      <q-inner-loading :showing="loaderStatus(activityLoader.fetchActivity)">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
    <div
      class="q-mt-xs row q-col-gutter-md"
      v-if="!dialogIsOpen(activityDialog.activityPlayerDialog)"
    >
      <div class="col-12 col-sm-6">
        <muscle-visualization class="full-height" :body-select-options="bodySelectOptions" />
      </div>
      <div
        class="col-12 col-sm-6"
        v-if="state.form.fields.exercise?.illustrativeVideo"
      >
        <activity-view :url="state.form.fields.exercise.illustrativeVideo" />
      </div>
    </div>
  </page-layout>

  <activity-player-dialog />
</template>
<script setup lang="ts">
  import VForm from 'src/components/v-form/VForm.vue'
  import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
  import { formFields } from '../constants/formFields.const'
  import { onBeforeMount, watch } from 'vue'
  import { requiredRule } from 'src/utils/validations/form-rules/mixedRules.util'
  import { useRoute } from 'vue-router'
  import useLoader from 'src/composables/useLoader'
  import { activityLoader } from '../constants/activityLoader.const'
  import { useActivities } from '../composables/useActivities'
  import ActivityView from 'src/components/activity-view/ActivityView.vue'
  import MuscleVisualization from 'src/components/muscle-visualization/MuscleVisualization.vue'
  import { activityDialog } from '../constants/activityDialog.const'
  import ActivityPlayerDialog from './ActivityPlayerDialog.vue'
  import ExerciseSelect from 'src/components/selects/exercise/ExerciseSelect.vue'
  import { IActivity } from 'src/types/activity/IActivity.type'

  const {
    state,
    bodySelectOptions,
    fetchActivity,
    resetForm,
    formIncomplete,
    dialogIsOpen,
    createDialog,
    openActivityPlayerDialog,
  } = useActivities()
  const { params } = useRoute()
  const { loaderStatus } = useLoader()

  watch(state.value, () => {
    state.value.activityDisabled = formIncomplete()
  })

  onBeforeMount(async () => {
    createDialog(activityDialog.activityPlayerDialog)
    resetForm()
    if (params.id) await fetchActivity(params.id as string)
  })
</script>
