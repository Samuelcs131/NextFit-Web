import { IVFormField } from 'src/components/v-form/types/IVFormField.type'
import { requiredRule } from 'src/utils/validations/form-rules/mixedRules.util'
import { t } from 'src/utils/translate/translateUtils'

export const formFields: IVFormField[] = [
  {
    columnSize: 12,
    fieldName: 'name',
    label: t('name'),
    type: 'string',
    rules: [requiredRule],
  },
]
