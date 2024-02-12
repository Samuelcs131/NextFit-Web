import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'

export interface IBodyMeasurement {
  id: GeneratorId
  date: string
  weight: number
  rightArm: number
  leftArm: number
  rightThigh: number
  leftThigh: number
  rightForearm: number
  leftForearm: number
  breastplate: number
  abdomen: number
  glute: number
  rightCalf: number
  leftCalf: number
  deltoid: number
}
