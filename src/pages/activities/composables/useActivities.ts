import { List } from 'src/domain/application/entities/list/List.entity'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import { fakePromise } from 'src/utils/fakePromise.util'
import { computed, ref } from 'vue'
import { activityLoader } from '../constants/activityLoader.const'
import { Form } from 'src/domain/application/entities/form/Form.entity'
import { activityRules } from 'src/constants/rules/activityRules.const'
import { musclesDictionary } from 'src/constants/muscles/muscles.const'
import { useLocalStorage } from 'src/composables/useLocalStorage'
import { themeColors } from 'src/theme/colors.theme'
import { useDialog } from 'src/composables/useDialog'
import { activityDialog } from '../constants/activityDialog.const'
import { ActivityService } from 'src/service/nextfit/activity/activity.service'
import { IActivity } from 'src/types/activity/IActivity.type'
import { storageKeys } from 'src/enums/storage/storage.enum'
import { ThemeColors } from 'src/theme/enums/colors.enum'

interface IState {
  listActivities: List<IActivity>
  form: Form<IActivity>
  activityDisabled: boolean
  countdownSeconds: number
  timeLeft: number
  countSeries: number
  activityDialog: IActivity
}

const state = ref({
  listActivities: new List<IActivity>([]),
  form: new Form<IActivity>(),
  activityDisabled: true,
  countdownSeconds: 100,
  timeLeft: 0,
  countSeries: 0,
} as IState)

export function useActivities() {
  const { getLocalStorage } = useLocalStorage()
  const { toggleDialog, dialogIsOpen, createDialog, closeDialog } = useDialog()

  async function fetchActivities() {
    ActionDispatcher.dispatch({
      callback: async () => {
        const { data: activities } = await ActivityService.getAll()

        await fakePromise(500)

        state.value.listActivities = new List<IActivity>(activities)
      },
      loaders: [activityLoader.fetchActivities],
    })
  }

  async function fetchActivity(id: string) {
    ActionDispatcher.dispatch({
      callback: async () => {
        const { data: activity } = await ActivityService.getById(id)

        await fakePromise(500)

        state.value.form = new Form<IActivity>(activity)
      },
      loaders: [activityLoader.fetchActivity],
    })
  }

  function resetForm() {
    state.value.form = new Form<IActivity>()
  }

  function openActivityPlayerDialog(activity: IActivity) {
    state.value.activityDialog = activity
    toggleDialog(activityDialog.activityPlayerDialog)
  }

  function calculatePercentage() {
    state.value.countdownSeconds =
      (state.value.timeLeft / state.value.activityDialog.interval) * 100
  }

  function openDeleteActivity(activity: IActivity) {
    const { toggleDialog, setDataDialog } = useDialog()
    setDataDialog(activityDialog.deleteActivityDialog, activity)
    toggleDialog(activityDialog.deleteActivityDialog)
  }

  function resetCountdown() {
    state.value.timeLeft = state.value.activityDialog.interval
    state.value.countdownSeconds = 100
  }

  function formIncomplete() {
    const fields = state.value.form.fields
    const isWeight =
      typeof fields.weight == 'number' &&
      fields.weight >= activityRules.weight.min &&
      fields.weight <= activityRules.weight.max

    return [
      fields.date || null,
      fields.exercise || null,
      fields.interval || null,
      fields.repetitions || null,
      fields.series || null,
      isWeight || null,
    ].includes(null)
  }

  const bodySelectOptions = computed(() => {
    const themeColor = getLocalStorage<ThemeColors>(storageKeys.themeColors)

    return (
      state.value.form.fields.exercise?.muscles.map((muscle) => {
        return {
          label: musclesDictionary[muscle].name,
          value: muscle,
          color: `${themeColors[themeColor].primary.main}90`,
        }
      }) || []
    )
  })

  return {
    state,
    bodySelectOptions,
    resetForm,
    closeDialog,
    toggleDialog,
    dialogIsOpen,
    createDialog,
    fetchActivity,
    resetCountdown,
    formIncomplete,
    fetchActivities,
    openDeleteActivity,
    calculatePercentage,
    openActivityPlayerDialog,
  }
}
