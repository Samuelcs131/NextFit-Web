import { UserEntity } from 'src/entities/user/UserEntity'

export interface IUserAuthRepository {
  userAuth(email: string, password: string): Promise<UserEntity | null>
}
