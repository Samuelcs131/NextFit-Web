import { IUser } from 'src/entities/user/IUser.model'

export interface IUserUseCases {
  getUserByToken(token: string): Promise<IUser | null>
}
