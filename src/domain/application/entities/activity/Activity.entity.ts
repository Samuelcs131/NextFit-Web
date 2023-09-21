/* eslint-disable no-unused-vars */
import { ActivityId } from './ActitityId.entity'

export class Activity {
  constructor(
    readonly id: ActivityId,
    public exerciseId: string,
    public date: string,
    public series: number,
    public repetitions: number,
    public weight: number,
    public interval: number
  ) {}
}
