import { api } from 'src/boot/axios'
import { BaseService } from 'src/service/base.service'
import { IApiResponse } from 'src/types/api/IApiResponse.type'
import { endpoint } from 'src/service/endpoint/index.const'
import { AxiosError } from 'axios'
import { IUser } from 'src/models/user/IUser.mode'

class AuthService extends BaseService {
  async auth (email: string, password: string): Promise<IApiResponse<IUser>> {
    try {
      const { data: user } = await api.post(endpoint.auth.auth, { password, email }, { withCredentials: true })
      return this.apiResult(user)
    } catch (error) {
      return this.apiError(error as AxiosError)
    }
  }
}

export default new AuthService()
