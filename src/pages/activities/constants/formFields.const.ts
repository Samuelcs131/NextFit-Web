import { IVFormField } from 'src/components/v-form/types/IVFormField.type'
import { requiredRule } from 'src/utils/validations/form-rules/mixedRules.util'
import { t } from 'src/utils/translate/translateUtils'
import {
  isNumericRule,
  maxRule,
  minRule,
} from 'src/utils/validations/form-rules/numberRules.util'
import { activityRules } from 'src/constants/rules/activityRules.const'

const { interval, repetitions, series, weight } = activityRules

export const formFields: IVFormField[] = [
  {
    columnSize: 6,
    fieldName: 'date',
    label: t('date'),
    type: 'date',
    ruleDatePicker: true
  },
  {
    columnSize: 6,
    fieldName: 'series',
    label: t('series'),
    type: 'number',
    rules: [
      requiredRule,
      (v) => maxRule(v, series.max),
      (v) => minRule(v, series.min),
    ],
  },
  {
    columnSize: 6,
    fieldName: 'repetitions',
    label: t('repetitions'),
    type: 'number',
    rules: [
      requiredRule,
      (v) => maxRule(v, repetitions.max),
      (v) => minRule(v, repetitions.min),
    ],
  },
  {
    columnSize: 6,
    fieldName: 'weight',
    label: `${t('weight')} (kg)`,
    type: 'number',
    rules: [
      isNumericRule,
      (v) => maxRule(v, weight.max),
      (v) => minRule(v, weight.min),
    ],
  },
  {
    columnSize: 6,
    fieldName: 'interval',
    label: `${t('interval')} (${t('seconds').toLocaleLowerCase()})`,
    type: 'number',
    rules: [
      requiredRule,
      (v) => maxRule(v, interval.max),
      (v) => minRule(v, interval.min),
    ],
  },
]
