import type { User } from 'src/domain/application/entities/user/User.entity'

export interface IAuthUser {
  user: User
  token: string
}
