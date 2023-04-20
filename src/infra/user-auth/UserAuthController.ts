import { AxiosError } from 'axios'
import { api } from 'src/boot/axios'
import { IUser } from 'src/entities/user/IUser.model'
import { BaseService } from 'src/service/base.service'
import { endpoint } from 'src/service/endpoint/index.const'
import { IApiResponse } from 'src/types/api/IApiResponse.type'

export interface IUserAuthController {
  userAuth(email: string, password: string): Promise<IApiResponse<IUser>>
}

export class UserAuthController
  extends BaseService
  implements IUserAuthController
{
  async userAuth(email: string, password: string) {
    try {
      const { data: user } = await api.post(
        endpoint.auth.auth,
        { password, email },
        { withCredentials: true }
      )
      return this.apiResult(user)
    } catch (error) {
      return this.apiError(error as AxiosError)
    }
  }
}
