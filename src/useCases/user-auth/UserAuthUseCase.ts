import { IUserAuthRepository } from 'src/repositories/user-auth/IUserAuthRepository.contract'
import { IUserAuthUseCases } from './IUserAuthUseCases.contract'

export class UserAuthUseCase implements IUserAuthUseCases {
  private readonly _userRepository

  constructor(userRepository: IUserAuthRepository) {
    this._userRepository = userRepository
  }

  async userAuth(email: string, password: string) {
    const user = await this._userRepository.userAuth(email, password)
    return user
  }
}
