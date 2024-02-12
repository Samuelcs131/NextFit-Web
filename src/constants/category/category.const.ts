import { Category } from 'src/enums/exercises/Category.enum'
import { t } from 'src/utils/translate/translateUtils'

export const categoriesDictionary = {
  [Category.machine]: {
    name: t('machine')
  },
  [Category.cables]: {
    name: t('cables')
  },
  [Category.halters]: {
    name: t('halters')
  },
  [Category.elastic]: {
    name: t('elastic')
  },
  [Category.ball]: {
    name: t('ball')
  },
  [Category.kettlebell]: {
    name: t('kettlebell')
  },
  [Category.balancim]: {
    name: t('balancim')
  },
}

export const categoriesOptions = Object.keys(categoriesDictionary).map((key) => {
  const muscleKey = Number(key) as Category
  const { name } = categoriesDictionary[muscleKey]
  return { label: name, value: muscleKey }
})
