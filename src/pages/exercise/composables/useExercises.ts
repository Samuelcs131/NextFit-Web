import { Form } from 'src/domain/application/entities/form/Form.entity'
import { List } from 'src/domain/application/entities/list/List.entity'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import { ref } from 'vue'
import { exerciseLoader } from '../constants/exerciseLoader.const'
import { ExerciseService } from 'src/service/nextfit/exercise/exercise.service'
import { IExercise } from 'src/types/exercise/IExercise.type'

interface IState {
  listExercises: List<IExercise>
  form: Form<IExercise>
}

const state = ref({
  listExercises: new List<IExercise>([]),
  form: new Form<IExercise>(),
} as IState)

export function useExercises() {
  async function fetchExercises() {
    ActionDispatcher.dispatch({
      callback: async () => {
        const { data: exercices } = await ExerciseService.getAll()
        state.value.listExercises = new List<IExercise>(exercices)
      },
      loaders: [exerciseLoader.fetchExercises],
    })
  }

  async function fetchExercise(id: string) {
    ActionDispatcher.dispatch({
      callback: async () => {
        const { data: exercice } = await ExerciseService.getById(id)

        state.value.form = new Form(exercice)
      },
      loaders: [exerciseLoader.fetchExercise],
    })
  }

  function resetMuscles() {
    state.value.form.fields.muscles = null
  }

  function resetForm() {
    state.value.form = new Form<IExercise>()
  }

  return { state, fetchExercises, fetchExercise, resetMuscles, resetForm }
}
