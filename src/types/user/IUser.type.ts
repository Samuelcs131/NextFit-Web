import { Avatar } from 'src/enums/user/Avatar.enum'
import { Country } from 'src/enums/user/Country.enum'
import { Sex } from 'src/enums/user/Sex.enum'
import { UserType } from 'src/enums/user/UserType.enum'
import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'

export interface IUser {
  id: GeneratorId
  name: string
  lastName: string
  email: string
  height: number
  age: number
  country: Country
  sex: Sex
  userType: UserType
  avatar: Avatar
  password: string
}
