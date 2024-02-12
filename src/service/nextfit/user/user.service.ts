import { api } from 'src/boot/axios'
import { IResponseAPI } from 'src/types/service/IResponseAPI.type'
import { userEndpoint as endpoint } from './endpoint/userEndpoint.const'
import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'
import { IAuthUser } from 'src/types/auth/IAuthUser.type'
import { IAuthUserDto } from './dto/IAuthUser.dto'
import { IUser } from 'src/types/user/IUser.type'
import { IUserDto } from './dto/IUser.dto'
import { tokenAccessKey } from 'src/constants/auth-user/tokenAccessKey.const'
import { useCookies } from 'src/composables/useCookies'

const { getCookie } = useCookies()

export class UserService {
  static async refresh(): Promise<IResponseAPI<IUser, any>> {
    const token = getCookie(tokenAccessKey)

    const response = await api.post<IUserDto>(
      endpoint.refresh,
      {},
      {
        headers: {
          authorization: `Bearear ${token}`,
        },
      }
    )

    const data: IUser = {
      ...response.data,
      id: GeneratorId.create(response.data.id),
    }

    return {
      data,
      status: response.status,
    }
  }

  static async login(
    email: string,
    password: string
  ): Promise<IResponseAPI<IAuthUser, any>> {
    const response = await api.post<IAuthUserDto>(endpoint.login, {
      email,
      password,
    })

    const data: IAuthUser = {
      ...response.data,
      user: {
        ...response.data.user,
        id: GeneratorId.create(response.data.user.id),
      },
    }

    return {
      data,
      status: response.status,
    }
  }
}
