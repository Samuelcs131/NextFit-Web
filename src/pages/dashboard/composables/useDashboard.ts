import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import { ActivityService } from 'src/service/nextfit/activity/activity.service'
import { IActivity } from 'src/types/activity/IActivity.type'
import {
  dateLocaleToString,
  getFirstAndLastDayOfMonth,
} from 'src/utils/date/dateUtils.util'
import { ref } from 'vue'
import { activitiesOptionsChart } from '../constants/optionsChart.const'
import { t } from 'src/utils/translate/translateUtils'
import { cloneShallow } from 'src/utils/clone/cloneUtils.util'
import { IDateRange } from 'src/components/user-interface/date-range/types/IDateRange.type'
import { dashboardLoader } from '../constants/dashboardLoader.const'
import { Category } from 'src/enums/exercises/Category.enum'
import { categoriesDictionary } from 'src/constants/category/category.const'
import { useChart } from 'src/composables/useChart'
import { IChart } from 'src/types/chart/IChart.type'
import { BodyMeasurementService } from 'src/service/nextfit/body-measurement/bodyMeasurement.service'
import { IBodyMeasurement } from 'src/types/body-measurement/IBodyMeasurement.type'

interface IState {
  activityFilter: {
    rangeDate: IDateRange
    exerciseIds: GeneratorId[]
  }
  activities: IActivity[]
  bodyMeasurements: IBodyMeasurement[]
  activityDashboard: IDashboardConfig
  pieAnalytic: IDashboardConfig
  barAnalytic: IDashboardConfig
  radarAnalytic: IDashboardConfig
}

interface IDashboardConfig {
  options: any
  series: any[]
}

const initializeState = {
  activityDashboard: {
    options: {} as any,
    series: [],
  },
  pieAnalytic: {
    options: {} as any,
    series: [],
  },
  barAnalytic: {
    options: {} as any,
    series: [],
  },
  radarAnalytic: {
    options: {} as any,
    series: [],
  },
  activities: [],
  bodyMeasurements: [],
  activityFilter: {
    rangeDate: { from: '01/01/2021', to: '01/01/2025' }, // { from: null, to: null },
    exerciseIds: [],
  },
} as IState

const state = ref(cloneShallow(initializeState))

export function useDashboard() {
  async function getByRangeDateAndExerciseId() {
    const filter = state.value.activityFilter

    await ActionDispatcher.dispatch({
      callback: async () => {
        const [{ data: activities }, { data: bodyMeasurements }] =
          await Promise.all([
            ActivityService.getByRangeDateAndExerciseId(
              filter.rangeDate.from,
              filter.rangeDate.to,
              filter.exerciseIds.map((e) => e.value) || []
            ),
            BodyMeasurementService.getByRangeDate(
              filter.rangeDate.from,
              filter.rangeDate.to
            ),
          ])

        state.value.activities = activities
        state.value.bodyMeasurements = bodyMeasurements
      },
      loaders: [dashboardLoader.getByRangeDateAndExerciseId],
    })
  }

  async function getAllData() {
    await Promise.all([getByRangeDateAndExerciseId()])

    handleActivitiesDashboard()
  }

  function handleActivitiesDashboard() {
    const dates: string[] = []
    const repetitions: number[] = []
    const weights: number[] = []
    const series: number[] = []
    const exerciseCount: any = {}
    const categoryCount: any = {}

    state.value.activities.forEach((activity) => {
      dates.push(activity.date)
      repetitions.push(activity.repetitions)
      weights.push(activity.weight)
      series.push(activity.series)

      exerciseCount[activity.exercise.id.value] = {
        amount: exerciseCount[activity.exercise.id.value]?.amount
          ? exerciseCount[activity.exercise.id.value].amount + 1
          : 1,
        name: activity.exercise.name,
      }

      categoryCount[activity.exercise.category] = {
        amount: categoryCount[activity.exercise.category]?.amount
          ? categoryCount[activity.exercise.category].amount + 1
          : 1,
        name: categoriesDictionary[activity.exercise.category].name,
      }
    })

    const upperLimb = {
      series: [] as any[],
      labels: [
        t('chest'),
        `${t('arm')} (${t('rightLetter')})`,
        `${t('forearm')} (${t('rightLetter')})`,
        t('deltoid'),
        `${t('forearm')} (${t('leftLetter')})`,
        `${t('arm')} (${t('leftLetter')})`,
      ],
    }

    state.value.bodyMeasurements.forEach((bm) => {
      upperLimb.series.push({
        name: dateLocaleToString(bm.date, { dateStyle: 'short' }),
        data: [
          bm.breastplate,
          bm.rightArm,
          bm.rightForearm,
          bm.deltoid,
          bm.leftForearm,
          bm.rightArm,
        ],
      })
    })

    console.log(state.value.bodyMeasurements)

    analysisOfRepetitionsWeights(dates, repetitions, weights, series)
    exerciseAnalysisByCategory(categoryCount)
    exerciseQuantityAnalysis(exerciseCount)
    measurementAnalysisRadar(upperLimb)
  }

  function disableSearchActivities() {
    const { rangeDate, exerciseIds } = state.value.activityFilter
    return !rangeDate.from || !rangeDate.to || !exerciseIds
  }

  function resetState() {
    state.value = cloneShallow(initializeState)
  }

  async function searchActivities() {
    await getByRangeDateAndExerciseId()
    if (state.value.activities.length > 0) handleActivitiesDashboard()
  }

  function separateInformation(object: any) {
    const amounts = []
    const names = []

    for (const chave in object) {
      if (object.hasOwnProperty(chave)) {
        amounts.push(object[chave].amount)
        names.push(object[chave].name)
      }
    }

    return { amounts, names }
  }

  function exerciseAnalysisByCategory(categoryCount: any) {
    const { amounts, names } = separateInformation(categoryCount)

    const { chartOptions } = useChart({
      chart: {
        type: 'polarArea',
      },
      labels: names,
      yaxis: {
        show: false,
      },
      xaxis: {},
      legend: {
        position: 'bottom',
      },
      stroke: {
        width: 0,
        colors: undefined,
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      tooltip: {
        fillSeriesColor: false,
        y: {
          title: {
            formatter: (seriesName) => `${seriesName}`,
          },
        },
      },
    } as IChart)

    state.value.pieAnalytic = {
      options: chartOptions,
      series: amounts, // amounts,
    }
  }

  function exerciseQuantityAnalysis(exerciseCount: any) {
    const { amounts, names } = separateInformation(exerciseCount)

    const { chartOptions } = useChart({
      series: [
        {
          data: amounts,
        },
      ],
      chart: {
        type: 'bar',
        theme: false,
      },
      plotOptions: {
        bar: {
          barHeight: 10,
          borderRadius: 4,
          horizontal: true,
        },
      },
      xaxis: {
        categories: names,
      },
      tooltip: {
        x: {
          show: true,
        },
        marker: { show: false },
        y: {
          title: {
            formatter: () => '',
          },
        },
      },
    } as IChart)

    state.value.barAnalytic = {
      options: chartOptions,
      series: amounts,
    }
  }

  function analysisOfRepetitionsWeights(
    categories: string[],
    repetitions: number[],
    weights: number[],
    series: number[]
  ) {
    const { chartOptions } = useChart({
      chart: {
        type: 'area',
      },
      xaxis: {
        categories,
        labels: {
          formatter: (value: string) => {
            return value
              ? dateLocaleToString(value, {
                  dateStyle: 'short',
                })
              : '-'
          },
        },
      },
      dataLabels: {
        enabled: true,
      },
    })

    state.value.activityDashboard = {
      options: chartOptions,
      series: [
        {
          name: t('repetitions'),
          data: repetitions,
        },
        {
          name: `${t('weight')} (kg)`,
          data: weights,
        },
        {
          name: `${t('series')}`,
          data: series,
        },
      ],
    }
  }

  function measurementAnalysisRadar(upperLimb: any) {
    const { chartOptions } = useChart({
      series: upperLimb.series,
      chart: {
        type: 'radar',
      },
      grid: {
        xaxis: {},
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        categories: upperLimb.labels,
      },
    } as IChart)

    state.value.radarAnalytic = {
      options: chartOptions,
      series: [80, 50, 30, 40, 100, 20],
    }
  }

  return {
    state,
    resetState,
    getAllData,
    searchActivities,
    disableSearchActivities,
    handleActivitiesDashboard,
    getByRangeDateAndExerciseId,
  }
}
