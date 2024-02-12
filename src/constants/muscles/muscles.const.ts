import { Limb } from 'src/enums/limb/Limb.enum'
import { Muscles } from 'src/enums/muscles/Muscles.enum'
import { t } from 'src/utils/translate/translateUtils'

export const musclesDictionary = {
  [Muscles.glutes]: {
    name: 'glutes',
    value: Muscles.glutes,
  },
  [Muscles.calves]: {
    name: 'calves',
    value: Muscles.calves,
  },
  [Muscles.hamstrings]: {
    name: 'hamstrings',
    value: Muscles.hamstrings,
  },
  [Muscles.quadriceps]: {
    name: 'quadriceps',
    value: Muscles.quadriceps,
  },

  [Muscles.deltoidsFront]: {
    name: 'deltoidsFront',
    value: Muscles.deltoidsFront,
  },
  [Muscles.deltoidsSide]: {
    name: 'deltoidsSide',
    value: Muscles.deltoidsSide,
  },
  [Muscles.deltoidsBack]: {
    name: 'deltoidsBack',
    value: Muscles.deltoidsBack,
  },

  [Muscles.chest]: {
    name: 'chest',
    value: Muscles.chest,
  },

  [Muscles.upperAbdominis]: {
    name: 'upperAbdominis',
    value: Muscles.upperAbdominis,
  },
  [Muscles.lowerAbdominis]: {
    name: 'lowerAbdominis',
    value: Muscles.lowerAbdominis,
  },
  [Muscles.obliques]: {
    name: 'obliques',
    value: Muscles.obliques,
  },

  [Muscles.innerbiceps]: {
    name: 'innerBiceps',
    value: Muscles.innerbiceps,
  },
  [Muscles.outerbiceps]: {
    name: 'outerBiceps',
    value: Muscles.outerbiceps,
  },

  [Muscles.tricepsOuter]: {
    name: 'tricepsOuter',
    value: Muscles.tricepsOuter,
  },
  [Muscles.tricepsLower]: {
    name: 'tricepsLower',
    value: Muscles.tricepsLower,
  },
  [Muscles.tricepsUpper]: {
    name: 'tricepsUpper',
    value: Muscles.tricepsUpper,
  },

  [Muscles.wristExtensors]: {
    name: 'wristExtensors',
    value: Muscles.wristExtensors,
  },
  [Muscles.wristFlexors]: {
    name: 'wristFlexors',
    value: Muscles.wristFlexors,
  },

  [Muscles.latissimusDorsi]: {
    name: 'latissimusDorsi',
    value: Muscles.latissimusDorsi,
  },
  [Muscles.trapezius]: {
    name: 'trapezius',
    value: Muscles.trapezius,
  },
  [Muscles.lowerBack]: {
    name: 'lowerBack',
    value: Muscles.lowerBack,
  },
}

export const musclesOptions = Object.keys(musclesDictionary).map((key) => {
  const muscleKey = Number(key) as Muscles
  const { name } = musclesDictionary[muscleKey]
  return { label: t(name), value: muscleKey }
})

export const muclesByLimbsOptions = {
  [Limb.trunk]: [
    {
      label: t('lowerBack'),
      value: Muscles.lowerBack,
    },
    {
      label: t('latissimusDorsi'),
      value: Muscles.latissimusDorsi,
    },
    {
      label: t('trapezius'),
      value: Muscles.trapezius,
    },
    {
      label: t('chest'),
      value: Muscles.chest,
    },
    {
      label: t('upperAbdominis'),
      value: Muscles.upperAbdominis,
    },
    {
      label: t('lowerAbdominis'),
      value: Muscles.lowerAbdominis,
    },
    {
      label: t('obliques'),
      value: Muscles.obliques,
    },
  ],
  [Limb.lowerLimb]: [
    {
      label: t('glutes'),
      value: Muscles.glutes,
    },
    {
      label: t('calves'),
      value: Muscles.calves,
    },
    {
      label: t('hamstrings'),
      value: Muscles.hamstrings,
    },
    {
      label: t('quadriceps'),
      value: Muscles.quadriceps,
    },
  ],

  [Limb.upperLimb]: [
    {
      label: t('deltoidsFront'),
      value: Muscles.deltoidsFront,
    },
    {
      label: t('deltoidsSide'),
      value: Muscles.deltoidsSide,
    },
    {
      label: t('deltoidsBack'),
      value: Muscles.deltoidsBack,
    },
    {
      label: t('innerbiceps'),
      value: Muscles.innerbiceps,
    },
    {
      label: t('outerbiceps'),
      value: Muscles.outerbiceps,
    },
    {
      label: t('wristExtensors'),
      value: Muscles.wristExtensors,
    },
    {
      label: t('wristFlexors'),
      value: Muscles.wristFlexors,
    },
  ],
}
