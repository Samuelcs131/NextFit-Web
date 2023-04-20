import { AxiosError } from 'axios'
import { api } from 'src/boot/axios'
import { IUser } from 'src/entities/user/IUser.model'
import { BaseService } from 'src/service/base.service'
import { endpoint } from 'src/service/endpoint/index.const'
import { IApiResponse } from 'src/types/api/IApiResponse.type'

class UserService extends BaseService {
  async getUserByToken (token: string): Promise<IApiResponse<IUser>> {
    try {
      const { data: user } = await api.get<IUser>(endpoint.user.getUserByToken, {
        headers: {
          authorization: token
        }
      })
      return this.apiResult(user)
    } catch (error) {
      return this.apiError(error as AxiosError)
    }
  }
}

export default new UserService()
