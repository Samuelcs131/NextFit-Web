/* eslint-disable no-unused-vars */
import { Country } from 'src/enums/user/Country.enum'
import { UserId } from './UserId.entity'
import { Sex } from 'src/enums/user/Sex.enum'
import { UserType } from 'src/enums/user/UserType.enum'
import { Avatar } from 'src/enums/user/Avatar.enum'

export class User {
  constructor(
    readonly id: UserId,
    public name: string,
    public lastName: string,
    readonly email: string,
    public height: number,
    public age: number,
    public country: Country,
    public sex: Sex,
    readonly userType: UserType,
    public avatar: Avatar,
    readonly password: string
  ) {}
}
