import { UserEntity } from 'src/entities/user/UserEntity'

export interface IUserAuthUseCases {
  userAuth(email: string, password: string): Promise<UserEntity | null>
}
