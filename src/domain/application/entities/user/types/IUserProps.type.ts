import { avatar } from '@enums/user/avatar.enum'
import { country } from '@enums/user/country.enum'
import { sex } from '@enums/user/sex.enum'
import { userType } from '@enums/user/userType.enum'

export type IUserProps = {
  name: string
  lastName: string
  email: string
  height: number
  age: number
  country: country
  sex: sex
  userType?: userType
  avatar?: avatar
  disabled?: string | Date
  password?: string
  passwordResetToken?: string
  passwordResetExpires?: string | Date
}
