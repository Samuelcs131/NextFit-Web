import { IUser } from 'src/entities/user/IUser.model'

export interface IUserRepository {
  getUserByToken(token: string): Promise<IUser | null>
}
