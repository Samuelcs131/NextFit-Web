<template>
  <q-page padding class="container">
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <q-card v-bind="$vCard" class="overflow-hidden">
          <q-expansion-item
            style="border-radius: 15px 15px 0 0"
            label="Filtro"
            header-class="text-white"
            expand-icon-class="text-white"
            expand-icon="filter_alt"
          >
            <div class="q-px-md q-py-sm flex gap-md">
              <date-range
                :class="
                  $q.screen.width <= 1023 ? 'full-width' : 'default-width-input'
                "
                dense
                v-model="state.activityFilter.rangeDate"
              />
              <exercise-select
                dense
                emit-value
                multiple
                v-model="state.activityFilter.exerciseIds"
                :class="$q.screen.width <= 1023 ? 'full-width' : ''"
              />
              <q-btn
                color="primary"
                unelevated
                :label="$t('search')"
                @click="searchActivities()"
                :disable="disableSearchActivities()"
                v-close-popup
              />
            </div>
          </q-expansion-item>
        </q-card>
      </div>
      <div class="col-12">
        <q-card v-bind="$vCard" class="overflow-hidden">
          <q-card-section>
            <h2 class="text-h6 q-ma-none">{{ $t('exercise') }}</h2>
            <p class="text-default-secondary">{{ $t('repetitionandWeightAnalysis') }}</p>
            <vue-apex-charts
              v-show="state.activities.length"
              type="area"
              height="300"
              class="q-mb-sm"
              :options="state.activityDashboard.options"
              :series="state.activityDashboard.series"
            />
            <p v-if="loader.getByRangeDateAndExerciseId">Carregando</p>
            <illustrative-message
              v-else-if="state.activities.length == 0"
              class="q-mb-sm"
              height="300px"
              width="undefined"
              illustration="empty"
              message="Nenhum dado encontrado"
            />
          </q-card-section>

          <q-inner-loading :showing="loader.getByRangeDateAndExerciseId">
            <q-spinner-oval size="50px" color="primary" />
          </q-inner-loading>
        </q-card>
      </div>

      <div class="col-12 col-md-8">
        <q-card v-bind="$vCard" class="full-height" >
          <q-card-section class="q-pb-none">
            <h2 class="text-h6 q-ma-none">{{ $t('exerciseQuantity') }}</h2>
            <!-- <vue-apex-charts
              v-show="state.barAnalytic.series.length"
              type="bar"
              height="300"
              class="q-mb-sm"
              :options="state.barAnalytic.options"
              :series="state.barAnalytic.series"
            /> -->
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card v-bind="$vCard" class="full-height" >
          <q-card-section class="q-px-none">
            <h2 class="text-h6 q-ma-none q-mx-md">{{ $t('categories') }}</h2>
            <vue-apex-charts
              v-show="state.pieAnalytic.series.length"
              type="pie"
              height="300"
              class="q-mb-sm"
              :options="state.pieAnalytic.options"
              :series="state.pieAnalytic.series"
            />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card v-bind="$vCard" class="full-height" >
          <q-card-section class="q-px-none">
            <h2 class="text-h6 q-ma-none q-mx-md">{{ $t('bodyMeasurement') }}</h2>
            <vue-apex-charts
              v-show="state.radarAnalytic.series.length"
              type="radar"
              height="300"
              class="q-mb-sm"
              :options="state.radarAnalytic.options"
              :series="state.radarAnalytic.series"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts" setup>
  import VueApexCharts from 'vue3-apexcharts'
  import { useDashboard } from './composables/useDashboard'
  import { onMounted, onUnmounted, computed } from 'vue'
  import ExerciseSelect from 'src/components/selects/exercise/ExerciseSelect.vue'
  import IllustrativeMessage from 'src/components/user-interface/illustrative-message/IllustrativeMessage.vue'
  import DateRange from 'src/components/user-interface/date-range/DateRange.vue'
  import useLoader from 'src/composables/useLoader'
  import { dashboardLoader } from './constants/dashboardLoader.const'

  const {
    state,
    resetState,
    getAllData,
    searchActivities,
    disableSearchActivities,
  } = useDashboard()

  const { loaderStatus } = useLoader()

  const loader = computed(() => {
    return {
      getByRangeDateAndExerciseId: loaderStatus(
        dashboardLoader.getByRangeDateAndExerciseId
      ),
    }
  })

  onMounted(async () => {
    await getAllData()
  })

  onUnmounted(() => resetState())
</script>
<style lang="scss">
.default-width-input {
  width: 100%;
  max-width: 270px;
}
</style>
