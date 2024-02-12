import { IVFormField } from 'src/components/v-form/types/IVFormField.type'
import { countryOptions } from 'src/constants/user/country.const'
import { userEntityRoles } from 'src/constants/user/entityRoles.const'
import { sexOptions } from 'src/constants/user/sex.const'
import { t } from 'src/utils/translate/translateUtils'
import {
  hasSpacesRule,
  requiredRule,
} from 'src/utils/validations/form-rules/mixedRules.util'
import {
  maxRule,
  minRule,
} from 'src/utils/validations/form-rules/numberRules.util'
import { rangeRule } from 'src/utils/validations/form-rules/stringRules.uti'

const { name, lastName, height, age } = userEntityRoles

export const formFields: IVFormField[] = [
  {
    columnSize: 6,
    fieldName: 'name',
    label: t('name'),
    type: 'string',
    rules: [
      requiredRule,
      (val) => rangeRule(val, name.min, name.max),
      hasSpacesRule,
    ],
  },
  {
    columnSize: 6,
    fieldName: 'lastName',
    label: t('surName'),
    type: 'string',
    rules: [
      requiredRule,
      (val) => rangeRule(val, lastName.min, lastName.max),
      hasSpacesRule,
    ],
  },
  {
    columnSize: 12,
    fieldName: 'sex',
    label: t('sex'),
    type: 'options',
    rules: [requiredRule],
    options: sexOptions,
    selectOptions: {
      emitValue: true,
    },
  },
  {
    columnSize: 12,
    fieldName: 'height',
    label: t('height'),
    type: 'number',
    rules: [
      requiredRule,
      (v) => minRule(v, height.min),
      (v) => maxRule(v, height.max),
    ],
  },
  {
    columnSize: 12,
    fieldName: 'age',
    label: t('age'),
    type: 'number',
    rules: [
      requiredRule,
      (v) => minRule(v, age.min),
      (v) => maxRule(v, age.max),
    ],
  },
  {
    columnSize: 12,
    fieldName: 'country',
    label: t('country'),
    type: 'options',
    rules: [requiredRule],
    options: countryOptions,
    selectOptions: {
      emitValue: true,
      useInput: true,
    },
  },
]
