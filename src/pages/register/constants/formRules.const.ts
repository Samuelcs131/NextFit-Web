import { requiredRule, strongPasswordRule } from 'src/utils/validations/form-rules/mixedRules.util'
import { rangeRule } from 'src/utils/validations/form-rules/stringRules.uti'

export const formRules = {
  password: [requiredRule, (v: string) => rangeRule(v, 8, 16), strongPasswordRule],
  policyTerms: [requiredRule]
}
