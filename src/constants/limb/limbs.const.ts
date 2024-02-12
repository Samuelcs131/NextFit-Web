import { Limb } from 'src/enums/limb/Limb.enum'
import { t } from 'src/utils/translate/translateUtils'

export const limbsDictionary = {
  [Limb.trunk]: { name: 'trunk' },
  [Limb.lowerLimb]: { name: 'lowerLimb' },
  [Limb.upperLimb]: { name: 'upperLimb' },
}

export const limbsOptions = Object.keys(limbsDictionary).map((key) => {
  const limb = Number(key) as Limb
  const { name } = limbsDictionary[limb]
  return { label: t(name), value: limb }
})
