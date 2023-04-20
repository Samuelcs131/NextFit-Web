import { emailRule } from 'src/utils/validations/form-rules/emailRule.utils'
import { spacedPwdRule } from 'src/utils/validations/form-rules/passwordRule.utils'
import { rangeRule } from 'src/utils/validations/form-rules/rangeRule.utils'

export const formRules = {
  email: [emailRule],
  password: [spacedPwdRule, (v: string) => rangeRule(v, 8, 16)],
}
