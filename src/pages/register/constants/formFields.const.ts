import { IVFormField } from 'src/components/v-form/types/IVFormField.type'
import { countryOptions } from 'src/constants/user/country.const'
import { userEntityRoles } from 'src/constants/user/entityRoles.const'
import { sexOptions } from 'src/constants/user/sex.const'
import {
  hasSpacesRule,
  requiredRule,
} from 'src/utils/validations/form-rules/mixedRules.util'
import { rangeRule } from 'src/utils/validations/form-rules/stringRules.uti'
import {
  minRule,
  maxRule,
} from 'src/utils/validations/form-rules/numberRules.util'

const { name, lastName, height, age } = userEntityRoles

export const formFields: IVFormField[] = [
  {
    columnSize: 12,
    fieldName: 'name',
    label: 'name',
    type: 'string',
    rules: [
      requiredRule,
      (val) => rangeRule(val, name.min, name.max),
      hasSpacesRule,
    ],
  },
  {
    columnSize: 12,
    fieldName: 'lastName',
    label: 'surName',
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
    label: 'sex',
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
    label: 'height',
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
    label: 'age',
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
    label: 'country',
    type: 'options',
    rules: [requiredRule],
    options: countryOptions,
    selectOptions: {
      emitValue: true,
      useInput: true,
    },
  },
]
