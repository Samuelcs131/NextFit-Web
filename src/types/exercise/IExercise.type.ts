import { Category } from 'src/enums/exercises/Category.enum'
import { Limb } from 'src/enums/limb/Limb.enum'
import { Muscles } from 'src/enums/muscles/Muscles.enum'
import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'

export interface IExercise {
  id: GeneratorId
  name: string
  description: string
  illustrativeVideo: string
  category: Category
  muscles: Muscles[]
  limbs: Limb[]
}
