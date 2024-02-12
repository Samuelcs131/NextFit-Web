// import { api } from 'src/boot/axios'
import { IResponseAPI } from 'src/types/service/IResponseAPI.type'
// import { exerciseEndpoint as endpoint } from './endpoint/exerciseEndpoint.const'
import { IExercise } from 'src/types/exercise/IExercise.type'
import { getAllExercise } from './mock/getAllExercise.mock'
import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'
import { fakePromise } from 'src/utils/fakePromise.util'

export class ExerciseService {
  static async getAll(): Promise<IResponseAPI<IExercise[], any>> {
    // const response = await api.get<IExercise>(endpoint.getAll)
    const response = {
      data: getAllExercise,
      status: {},
    }

    const exercises: IExercise[] = response.data.map((e) => {
      return { ...e, id: GeneratorId.create(e.id) }
    })

    await fakePromise(500)

    return {
      data: exercises,
      status: response.status,
    }
  }
  static async getById(id: string): Promise<IResponseAPI<IExercise, any>> {
    // const response = await api.get<IExercise>(endpoint.getAll)
    const response = {
      data: (getAllExercise.find((e) => e.id === id) || {}) as any,
      status: {},
    }

    const exercise: IExercise = {
      ...response.data,
      id: GeneratorId.create(response.data.id),
    }

    await fakePromise(500)

    return {
      data: exercise,
      status: response.status,
    }
  }
}
