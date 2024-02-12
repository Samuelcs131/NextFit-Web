// import { api } from 'src/boot/axios'
import { IResponseAPI } from 'src/types/service/IResponseAPI.type'
// import { activityEndpoint as endpoint } from './endpoint/activityEndpoint.const'
import { IActivity } from 'src/types/activity/IActivity.type'
import { getAllActivities } from './mock/getAllActivities.mock'
import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'
import { fakePromise } from 'src/utils/fakePromise.util'

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
      data: (getAllActivities.find((e) => e.id === id) || {}) as any,
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
}
