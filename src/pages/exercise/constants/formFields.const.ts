import { IVFormField } from 'src/components/v-form/types/IVFormField.type'
import { categoriesOptions } from 'src/constants/category/category.const'
import { exerciseRules } from 'src/constants/rules/exerciseRules.const'
import { requiredRule } from 'src/utils/validations/form-rules/mixedRules.util'
import { rangeRule } from 'src/utils/validations/form-rules/stringRules.uti'
import { t } from 'src/utils/translate/translateUtils'

const { name, description, illustrativeVideo } = exerciseRules

export const formFields: IVFormField[] = [
  {
    columnSize: 6,
    fieldName: 'name',
    label: t('name'),
    type: 'string',
    rules: [requiredRule, (val) => rangeRule(val, name.min, name.max)],
  },
  {
    columnSize: 6,
    fieldName: 'category',
    label: t('category'),
    type: 'options',
    options: categoriesOptions,
    selectOptions: {
      useInput: true,
    },
    rules: [requiredRule],
  },
  {
    columnSize: 12,
    fieldName: 'description',
    label: t('description'),
    type: 'string',
    rules: [
      requiredRule,
      (val) => rangeRule(val, description.min, description.max),
    ],
    textArea: true,
  },
  {
    columnSize: 12,
    fieldName: 'illustrativeVideo',
    label: t('URL'),
    type: 'string',
    rules: [
      requiredRule,
      (val) => rangeRule(val, illustrativeVideo.min, illustrativeVideo.max),
    ],
  },
]
