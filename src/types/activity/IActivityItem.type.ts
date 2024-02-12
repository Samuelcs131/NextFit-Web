import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'

export interface IActivityItem {
  id: GeneratorId
  exerciseId: GeneratorId
  exerciseName: string
  illustrativeVideo: string
  series: number
  repetitions: number
  weight: number
  interval: number
  order: number
}
