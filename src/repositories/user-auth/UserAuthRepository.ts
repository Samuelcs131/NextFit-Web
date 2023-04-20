import { UserEntity } from 'src/entities/user/UserEntity'
import { IUserAuthController } from 'src/infra/user-auth/UserAuthController'
import { feedbackErrosApi } from 'src/utils/errors/feedbackErrosApi'
import { IUserAuthRepository } from './IUserAuthRepository.contract'

export class UserAuthRepository implements IUserAuthRepository {
  private readonly _userAuthController: IUserAuthController

  constructor(userAuthController: IUserAuthController){
    this._userAuthController = userAuthController
  }

  async userAuth(email: string, password: string) {
    const [error, user] = await this._userAuthController.userAuth(email, password)

    if(error) {
      feedbackErrosApi(error.response?.status)
      return null
    }

    return new UserEntity(user)
  }
}
