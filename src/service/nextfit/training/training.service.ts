import { api } from 'src/boot/axios'
import { IResponseAPI } from 'src/types/service/IResponseAPI.type'
import { ITraining } from 'src/types/training/ITraining.type'
import { trainingEndpoint as endpoint } from './endpoint/trainingEndpoint.const'
import { getAllTraining } from './mock/getAllTraining.mock'
import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'
import { ITrainingDto } from './dto/ITrainingDto.type'

export class TrainingService {
  static async getAll(): Promise<IResponseAPI<ITraining[], any>> {
    // const response = await api.get<ITraining>(endpoint.getAll)
    const response = {
      data: getAllTraining as ITrainingDto[],
      status: {},
    }

    const training: ITraining[] = response.data.map((t) => ({
      ...t,
      id: GeneratorId.create(t.id),
      tags: t.tags.map((tag) => {
        return {
          id: GeneratorId.create(tag.id),
          name: tag.name,
          color: tag.color,
        }
      }),
      activities: t.activities.map((a) => ({
        ...a,
        id: GeneratorId.create(a.id),
        exerciseId: GeneratorId.create(a.exerciseId),
      })),
    }))

    return {
      data: training,
      status: response.status,
    }
  }

  static async getById(id: string): Promise<IResponseAPI<ITraining, any>> {
    // const response = await api.get<ITraining>(endpoint.getAll)
    const response = {
      data: (getAllTraining.find((t) => t.id === id) || {}) as ITrainingDto,
      status: {},
    }

    const training: ITraining = {
      ...response.data,
      id: GeneratorId.create(response.data.id),
      tags: response.data.tags.map((tag) => {
        return {
          id: GeneratorId.create(tag.id),
          name: tag.name,
          color: tag.color,
        }
      }),
      activities: response.data.activities.map((a) => ({
        ...a,
        id: GeneratorId.create(a.id),
        exerciseId: GeneratorId.create(a.exerciseId),
      })),
    }

    return {
      data: training,
      status: response.status,
    }
  }
}
