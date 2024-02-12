import { QTableColumn } from 'quasar'
import { categoriesDictionary } from 'src/constants/category/category.const'
import { limbsDictionary } from 'src/constants/limb/limbs.const'
import { musclesDictionary } from 'src/constants/muscles/muscles.const'
import { Category } from 'src/enums/exercises/Category.enum'
import { Limb } from 'src/enums/limb/Limb.enum'
import { Muscles } from 'src/enums/muscles/Muscles.enum'
import { formatArrayToString } from 'src/utils/array/formatArrayToString.utils'
import { t } from 'src/utils/translate/translateUtils'

export const exerciseColumns: QTableColumn[] = [
  {
    field: 'name',
    label: t('name'),
    name: 'name',
    sortable: true,
    align: 'left',
  },
  {
    field: 'weight',
    label: t('weight'),
    name: 'weight',
    sortable: true,
    align: 'left',
  },
  {
    field: 'rightArm',
    label: t('rightArm'),
    name: 'rightArm',
    sortable: true,
    align: 'left',
  },
  {
    field: 'category',
    label: t('category'),
    name: 'category',
    sortable: true,
    align: 'left',
    format: (category) => t(categoriesDictionary[category as Category].name),
  },
  {
    field: 'muscles',
    label: t('muscles'),
    name: 'muscles',
    sortable: true,
    align: 'left',
    format: (muscles) => {
      return formatArrayToString(
        muscles.map((m: Muscles) => t(musclesDictionary[m].name))
      )
    },
  },
  {
    field: 'limbs',
    label: t('limbs'),
    name: 'limbs',
    sortable: true,
    align: 'left',
    format: (limbs) => {
      return formatArrayToString(
        limbs.map((l: Limb) => t(limbsDictionary[l].name))
      )
    },
  },
]
