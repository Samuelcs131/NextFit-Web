import { Form } from 'src/domain/application/entities/form/Form.entity'
import { List } from 'src/domain/application/entities/list/List.entity'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import { ref } from 'vue'
import { trainingLoader } from '../constants/trainingLoader.const'
import { TrainingService } from 'src/service/nextfit/training/training.service'
import { ITraining } from 'src/types/training/ITraining.type'
import { useDialog } from 'src/composables/useDialog'
import { trainingDialog } from '../constants/trainingDialog.const'
import { IActivityItem } from 'src/types/activity/IActivityItem.type'
import { timeHumanized } from 'src/utils/date/dateUtils.util'

interface IActivityPlayer extends IActivityItem {
  isCompleted: boolean
  completedSeries: number
}

interface IState {
  listTraining: List<ITraining>
  form: Form<ITraining>
  trainingDialog: ITraining
  activities: IActivityPlayer[]
  denseVisibility: boolean
  countdownSeconds: number
  timeLeft: number
  countSeries: number
  playerIndex: number
  isPlayerActivity: boolean
  timeTraining: number
  timeTrainingId: NodeJS.Timeout | undefined
}

const state = ref({
  listTraining: new List<ITraining>([]),
  form: new Form<ITraining>(),
  activities: [] as IActivityPlayer[],
  isPlayerActivity: false,
  playerIndex: 0,
  countdownSeconds: 100,
  denseVisibility: false,
  countSeries: 0,
  timeLeft: 0,
  timeTraining: 0,
  timeTrainingId: undefined,
} as IState)

export function useTraining() {
  const { toggleDialog } = useDialog()

  async function fetchTrainings() {
    ActionDispatcher.dispatch({
      callback: async () => {
        const { data: exercices } = await TrainingService.getAll()
        state.value.listTraining = new List<ITraining>(exercices)
      },
      loaders: [trainingLoader.fetchTrainings],
    })
  }

  async function fetchTraining(id: string) {
    ActionDispatcher.dispatch({
      callback: async () => {
        const { data: exercice } = await TrainingService.getById(id)

        state.value.form = new Form(exercice)
      },
      loaders: [trainingLoader.fetchTraining],
    })
  }

  function openDeleteDialog(training: ITraining) {
    state.value.trainingDialog = training
    toggleDialog(trainingDialog.deleteTraining)
  }

  function openStartTrainingDialog(training: ITraining) {
    state.value.trainingDialog = training

    state.value.activities = training.activities.map((activity) => {
      return { ...activity, isCompleted: false, completedSeries: 0 }
    })

    toggleDialog(trainingDialog.startTraining)
  }

  function selectActivity(index: number) {
    startTimeTraining()

    state.value.timeLeft = state.value.activities[index].interval
    state.value.playerIndex = index
    state.value.isPlayerActivity = true
  }

  function nextActivity() {
    const nextIndex = state.value.playerIndex + 1
    unselectActivity()
    if (nextIndex < state.value.activities.length) {
      selectActivity(nextIndex)
    }
  }

  function handleStartTraining() {
    selectActivity(0)
    startTimeTraining()
  }

  function startTimeTraining() {
    if (state.value.timeTraining > 0) return
    const time = setInterval(() => {
      state.value.timeTraining++
    }, 1000)

    state.value.timeTrainingId = time
  }

  function saveTraining() {
    resetTimeTraining()
  }

  function resetTimeTraining() {
    clearInterval(state.value.timeTrainingId)
    state.value.timeTraining = 0
    state.value.timeTrainingId = undefined
  }

  function unselectActivity() {
    state.value.isPlayerActivity = false
    state.value.countdownSeconds = 100
    state.value.countSeries = 0
    state.value.timeLeft = 0
  }

  function calculatePercentage() {
    state.value.countdownSeconds =
      (state.value.timeLeft /
        (state.value.activities[state.value.playerIndex].interval || 0)) *
      100
  }

  function resetCountdown() {
    state.value.timeLeft =
      state.value.activities[state.value.playerIndex].interval || 0
    state.value.countdownSeconds = 100
  }

  function resetForm() {
    state.value.form = new Form<ITraining>()
  }

  function resetTrainingDialog() {
    state.value.trainingDialog = {} as ITraining
  }

  function setActivityCompleted() {
    state.value.activities[state.value.playerIndex].isCompleted = true
  }

  function calculateTotalInterval(activities: IActivityItem[]) {
    const totalInterval = activities.reduce(
      (total: number, a: IActivityItem) => total + a.interval,
      0
    )
    return timeHumanized(totalInterval)
  }

  return {
    state,
    resetForm,
    nextActivity,
    saveTraining,
    fetchTraining,
    fetchTrainings,
    resetCountdown,
    selectActivity,
    unselectActivity,
    openDeleteDialog,
    startTimeTraining,
    resetTrainingDialog,
    calculatePercentage,
    handleStartTraining,
    setActivityCompleted,
    calculateTotalInterval,
    openStartTrainingDialog,
  }
}
