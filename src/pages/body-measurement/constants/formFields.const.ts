import { IVFormField } from 'src/components/v-form/types/IVFormField.type'
import { requiredRule } from 'src/utils/validations/form-rules/mixedRules.util'
import { t } from 'src/utils/translate/translateUtils'
import { bodyMeasurementRules } from 'src/constants/rules/bodyMeasurementRules.const'
import {
  maxRule,
  minRule,
} from 'src/utils/validations/form-rules/numberRules.util'

const {
  abdomen,
  breastplate,
  deltoid,
  glute,
  weight,
  leftArm,
  leftCalf,
  leftForearm,
  leftThigh,
  rightArm,
  rightCalf,
  rightForearm,
  rightThigh,
} = bodyMeasurementRules

export const formFields: IVFormField[] = [
  {
    columnSize: 6,
    fieldName: 'date',
    label: t('date'),
    type: 'date',
    ruleDatePicker: true,
  },
  {
    columnSize: 6,
    fieldName: 'weight',
    label: t('weight'),
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, weight.min),
      (val) => maxRule(val, weight.max),
    ],
  },
  {
    columnSize: 3,
    fieldName: 'leftArm',
    label: `${t('arm')} (${t('leftLetter')})`,
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, leftArm.min),
      (val) => maxRule(val, leftArm.max),
    ],
  },
  {
    columnSize: 3,
    fieldName: 'rightArm',
    label: `${t('arm')} (${t('rightLetter')})`,
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, rightArm.min),
      (val) => maxRule(val, rightArm.max),
    ],
  },
  {
    columnSize: 3,
    fieldName: 'leftCalf',
    label: `${t('calf')} (${t('leftLetter')})`,
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, leftCalf.min),
      (val) => maxRule(val, leftCalf.max),
    ],
  },
  {
    columnSize: 3,
    fieldName: 'rightCalf',
    label: `${t('calf')} (${t('rightLetter')})`,
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, rightCalf.min),
      (val) => maxRule(val, rightCalf.max),
    ],
  },
  {
    columnSize: 3,
    fieldName: 'leftCalf',
    label: `${t('forearm')} (${t('leftLetter')})`,
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, leftForearm.min),
      (val) => maxRule(val, leftForearm.max),
    ],
  },
  {
    columnSize: 3,
    fieldName: 'rightForearm',
    label: `${t('forearm')} (${t('rightLetter')})`,
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, rightForearm.min),
      (val) => maxRule(val, rightForearm.max),
    ],
  },
  {
    columnSize: 3,
    fieldName: 'leftCalf',
    label: `${t('thigh')} (${t('leftLetter')})`,
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, leftThigh.min),
      (val) => maxRule(val, leftThigh.max),
    ],
  },
  {
    columnSize: 3,
    fieldName: 'rightThigh',
    label: `${t('thigh')} (${t('rightLetter')})`,
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, rightThigh.min),
      (val) => maxRule(val, rightThigh.max),
    ],
  },
  {
    columnSize: 6,
    fieldName: 'abdomen',
    label: t('abdomen'),
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, abdomen.min),
      (val) => maxRule(val, abdomen.max),
    ],
  },
  {
    columnSize: 6,
    fieldName: 'breastplate',
    label: t('breastplate'),
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, breastplate.min),
      (val) => maxRule(val, breastplate.max),
    ],
  },
  {
    columnSize: 6,
    fieldName: 'glute',
    label: t('glute'),
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, glute.min),
      (val) => maxRule(val, glute.max),
    ],
  },
  {
    columnSize: 6,
    fieldName: 'deltoid',
    label: t('deltoid'),
    type: 'number',
    rules: [
      requiredRule,
      (val) => minRule(val, deltoid.min),
      (val) => maxRule(val, deltoid.max),
    ],
  },
]
