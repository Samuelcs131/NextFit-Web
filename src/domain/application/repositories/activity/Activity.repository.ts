/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "_httpClient" }] */

import { inject, injectable } from 'inversify'
import { adapters } from 'src/constants/adapters/adapters.const'
import { IHttpClient } from 'src/adapters/contracts/IHttpClient.contract'
import { IActivityRepository } from './contract/IActivityRepository.contract'
import { activityEndpoints } from './endpoints/activityEndpoints'
import { IActivityDto } from './dto/IActivity.dto'
import { ActivityMappper } from './mapper/Activity.mapper'
import { Activity } from '../../entities/activity/Activity.entity'

@injectable()
export class ActivityRepository implements IActivityRepository {
  constructor(
    @inject(adapters.httpClientAxiosAdapter)
    private readonly _httpClient: IHttpClient
  ) {}

  async getAll(): Promise<Activity[]> {
    const { data: activitiesDto } = await this._httpClient.get<
      unknown,
      IActivityDto[]
    >(activityEndpoints.trainings, { authorization: true })

    return ActivityMappper.toEntities(activitiesDto)
  }
}
