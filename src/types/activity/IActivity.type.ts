import { IExercise } from '../exercise/IExercise.type'
import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'

export interface IActivity {
  id: GeneratorId
  exercise: IExercise
  date: string
  series: number
  repetitions: number
  weight: number
  interval: number
}
