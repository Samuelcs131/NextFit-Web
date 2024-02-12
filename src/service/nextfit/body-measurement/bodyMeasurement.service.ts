// import { api } from 'src/boot/axios'
// import { exerciseEndpoint as endpoint } from './endpoint/exerciseEndpoint.const'
import { IResponseAPI } from 'src/types/service/IResponseAPI.type'
import { getAllBodyMeasurement } from './mock/getAllBodyMeasurement.mock'
import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'
import { fakePromise } from 'src/utils/fakePromise.util'
import { IBodyMeasurement } from 'src/types/body-measurement/IBodyMeasurement.type'
import { IBodyMeasurementDto } from './dto/IBodyMeasurement.dto'

export class BodyMeasurementService {
  static async getAll(): Promise<IResponseAPI<IBodyMeasurement[], any>> {
    // const response = await api.get<IExercise>(endpoint.getAll)
    const response = {
      data: getAllBodyMeasurement,
      status: {},
    }

    const bodyMeasurements: IBodyMeasurement[] = response.data.map((bm) => {
      return { ...bm, id: GeneratorId.create(bm.id) }
    })

    await fakePromise(500)

    return {
      data: bodyMeasurements,
      status: response.status,
    }
  }
  static async getById(
    id: string
  ): Promise<IResponseAPI<IBodyMeasurement, any>> {
    // const response = await api.get<IBodyMeasurement>(endpoint.getAll)
    const response = {
      data: (getAllBodyMeasurement.find((bm) => bm.id === id) ||
        {}) as IBodyMeasurementDto,
      status: {},
    }

    const bodyMeasurement: IBodyMeasurement = {
      ...response.data,
      id: GeneratorId.create(response.data.id),
    }

    await fakePromise(500)

    return {
      data: bodyMeasurement,
      status: response.status,
    }
  }
}
