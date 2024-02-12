<template>
  <page-layout breadcrumbs>
    <q-card v-bind="$vCard" class="overflow-hidden">
      <q-card-section>
        <v-form
          v-model="state.form"
          :form-fields="formFields"
          cancel-label-show
          :active-skeleton="
            loaderStatus(bodyMeasurementLoader.fetchBodyMeasurement)
          "
          :cancel-label-show-props="{ to: { name: 'bodyMeasurement' } }"
        >
          <template #after-deltoid>
            <div class="col-12">
              <p>
                {{ $t('allMeasurementsAreInCentimeters') }}
              </p>
            </div>
          </template>
        </v-form>
      </q-card-section>
      <q-inner-loading
        :showing="loaderStatus(bodyMeasurementLoader.fetchBodyMeasurement)"
      >
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
  </page-layout>
</template>
<script setup lang="ts">
  import VForm from 'src/components/v-form/VForm.vue'
  import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
  import { formFields } from '../constants/formFields.const'
  import { onBeforeMount } from 'vue'
  import { useRoute } from 'vue-router'
  import useLoader from 'src/composables/useLoader'
  import { bodyMeasurementLoader } from '../constants/bodyMeasurementLoader.const'
  import { useBodyMeasurement } from '../composables/useBodyMeasurement'
  import MuscleVisualization from 'src/components/muscle-visualization/MuscleVisualization.vue'

  const { state, resetForm, fetchBodyMeasurement } = useBodyMeasurement()
  const { params } = useRoute()
  const { loaderStatus } = useLoader()

  onBeforeMount(async () => {
    resetForm()
    if (params.id) await fetchBodyMeasurement(params.id as string)
  })
</script>
