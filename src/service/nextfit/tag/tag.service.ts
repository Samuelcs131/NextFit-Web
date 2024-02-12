// import { api } from 'src/boot/axios'
// import { tagEndpoint as endpoint } from './endpoint/tagEndpoint.const'
import { IResponseAPI } from 'src/types/service/IResponseAPI.type'
import { getAllTag } from './mock/getAllTag.mock'
import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'
import { fakePromise } from 'src/utils/fakePromise.util'
import { ITag } from 'src/components/selects/tag/types/ITag.type'

export class TagService {
  static async getAll(): Promise<IResponseAPI<ITag[], any>> {
    // const response = await api.get<IExercise>(endpoint.getAll)
    const response = {
      data: getAllTag,
      status: {},
    }

    const data: ITag[] = response.data.map((e) => {
      return { ...e, id: GeneratorId.create(e.id) }
    })

    await fakePromise(2000)

    return {
      data,
      status: response.status,
    }
  }

  static async save(tag: ITag): Promise<IResponseAPI<ITag, any>> {
    // await api.post(endpoint.save, tag)
    await fakePromise(2000)

    return {
      data: tag,
      status: {},
    }
  }

  static async delete(tagId: string): Promise<IResponseAPI<undefined, any>> {
    // await api.post(endpoint.save, tag)
    await fakePromise(2000)

    return {
      data: undefined,
      status: {},
    }
  }

  /*   static async update(tag: ITag): Promise<IResponseAPI<ITag, any>> {
    // await api.post(endpoint.save, tag)
    await fakePromise(2000)

    return {
      data: tag,
      status: {}
    }
  } */
}
