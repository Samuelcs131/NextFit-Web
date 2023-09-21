import { emailRule } from 'src/utils/validations/form-rules/stringRules.uti'
import { strongPasswordRule } from 'src/utils/validations/form-rules/mixedRules.util'
import { rangeRule } from 'src/utils/validations/form-rules/stringRules.uti'

export const formRules = {
  email: [emailRule],
  password: [strongPasswordRule, (v: string) => rangeRule(v, 8, 16)],
}
