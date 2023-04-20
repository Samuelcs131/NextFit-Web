import { IUser } from 'src/entities/user/IUser.model'
import { UserEntity } from 'src/entities/user/UserEntity'
import { IUserController } from 'src/infra/user/UserController'
import { feedbackErrosApi } from 'src/utils/errors/feedbackErrosApi'
import { IUserRepository } from './IUserRepository.contract'

export class UserRepository implements IUserRepository {
  private readonly _userController: IUserController

  constructor(userController: IUserController){
    this._userController = userController
  }

  async getUserByToken(token: string) {
    const [error, user] = await this._userController.getUserByToken(token)

    if(error) {
      feedbackErrosApi(error.response?.status)
      return null
    }

    return new UserEntity(user) as unknown as IUser
  }
}
