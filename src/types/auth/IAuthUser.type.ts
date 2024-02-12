import { IUser } from '../user/IUser.type'

export interface IAuthUser {
  user: IUser
  token: string
}
