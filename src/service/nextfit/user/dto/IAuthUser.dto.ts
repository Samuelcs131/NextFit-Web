import { IUserDto } from './IUser.dto'

export interface IAuthUserDto {
  user: IUserDto
  token: string
}
