import { IUserRepository } from 'src/repositories/user/IUserRepository.contract'
import { IUserUseCases } from './IUserUseCases.contract'

export class UserUseCase implements IUserUseCases {
  private readonly _userRepository

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository
  }

  async getUserByToken(token: string) {
    const user = await this._userRepository.getUserByToken(token)
    return user
  }
}
