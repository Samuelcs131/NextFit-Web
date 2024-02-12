import { Category } from 'src/enums/exercises/Category.enum'
import { Limb } from 'src/enums/limb/Limb.enum'
import { Muscles } from 'src/enums/muscles/Muscles.enum'

export interface IExerciseDto {
  id: string | null
  name: string
  description: string
  illustrativeVideo: string
  category: Category
  muscles: Muscles[]
  limbs: Limb[]
}
