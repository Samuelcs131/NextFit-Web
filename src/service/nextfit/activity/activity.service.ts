// import { api } from 'src/boot/axios'
import { IResponseAPI } from 'src/types/service/IResponseAPI.type'
// import { activityEndpoint as endpoint } from './endpoint/activityEndpoint.const'
import { IActivity } from 'src/types/activity/IActivity.type'
import { getAllActivities } from './mock/getAllActivities.mock'
import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'
import { fakePromise } from 'src/utils/fakePromise.util'
import { getAllExercise } from '../exercise/mock/getAllExercise.mock'

export class ActivityService {
  static async getAll(): Promise<IResponseAPI<IActivity[], any>> {
    // const response = await api.get<IActivity>(endpoint.getAll)

    const response = {
      data: getAllActivities,
      status: {},
    }

    const activity: IActivity[] = response.data.map((a) => {
      return {
        ...a,
        id: GeneratorId.create(a.id),
        exercise: {
          ...a.exercise,
          id: GeneratorId.create(a.exercise.id),
        },
      }
    })

    await fakePromise(500)

    return {
      data: activity,
      status: response.status,
    }
  }

  static async getById(id: string): Promise<IResponseAPI<IActivity, any>> {
    // const response = await api.get<IActivity>(endpoint.getAll)
    const response = {
      data: (getAllActivities.find((a) => a.id === id) || {}) as any,
      status: {},
    }

    const activity: IActivity = {
      ...response.data,
      id: GeneratorId.create(response.data.id),
      exercise: {
        ...response.data.exercise,
        id: GeneratorId.create(response.data.exercise.id),
      },
    }

    await fakePromise(500)

    return {
      data: activity,
      status: response.status,
    }
  }

  static async getByRangeDateAndExerciseId(
    startDate: string | null,
    endDate: string | null,
    exerciseIds: string[]
  ): Promise<IResponseAPI<IActivity[], any>> {
    // const response = await api.get<IActivity>(endpoint.getAll)
    // debugger

    if (!startDate || !endDate || !exerciseIds.length) {
      const filtered = getAllActivities.filter((a) => {
        return a.exercise.id
      })

      console.log(filtered)

      const response = {
        data: filtered,
        status: {},
      }

      const activities: IActivity[] = response.data.map((a) => {
        return {
          ...a,
          id: GeneratorId.create(a.id),
          exercise: {
            ...a.exercise,
            id: GeneratorId.create(a.exercise.id),
          },
        }
      })

      await fakePromise(2000)

      return {
        data: activities,
        status: response.status,
      }
    }

    const filtered = getAllActivities.filter((e) => {
      const date = new Date(e.date)
      const isRangeDate =
        date >= new Date(startDate) && date <= new Date(endDate)
      const exercise = exerciseIds.includes(e.exercise.id)
      const filter = isRangeDate && exercise


      return filter
    })

    console.log(filtered)
    const response = {
      data: filtered,
      status: {},
    }

    const activities: IActivity[] = response.data.map((a) => {
      return {
        ...a,
        id: GeneratorId.create(a.id),
        exercise: {
          ...a.exercise,
          id: GeneratorId.create(a.exercise.id),
        },
      }
    })

    await fakePromise(2000)

    return {
      data: activities,
      status: response.status,
    }
  }
}
