/* eslint-disable no-unused-vars */
import { User } from 'src/domain/application/entities/user/User.entity'
import { IAuthUser } from '../types/IAuthUser.type'

export interface IUserRepository {
  login(email: string, password: string): Promise<IAuthUser>
  refresh(): Promise<User>
  update(user: User): Promise<void>
}
