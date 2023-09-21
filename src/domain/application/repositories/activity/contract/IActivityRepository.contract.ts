/* eslint-disable no-unused-vars */
import { Activity } from 'src/domain/application/entities/activity/Activity.entity'

export interface IActivityRepository {
  getAll(): Promise<Activity[]>
}
