/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "_httpClient" }] */

import { inject, injectable } from 'inversify'
import { IUserRepository } from './contract/IUserRepository.contract'
import { adapters } from 'src/constants/adapters/adapters.const'
import { IHttpClient } from 'src/adapters/contracts/IHttpClient.contract'
import { UserMappper } from './mapper/User.mapper'
import { userEndpoints } from './endpoints/userEndpoints'
import { IAuthUserDto } from './dto/IAuthUser.dto'
import { IAuthUser } from './types/IAuthUser.type'
import { User } from '../../entities/user/User.entity'
import { IUserDto } from './dto/IUser.dto'

@injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @inject(adapters.httpClientAxiosAdapter)
    private readonly _httpClient: IHttpClient
  ) {}

  async login(email: string, password: string): Promise<IAuthUser> {
    const { data: authUser } = await this._httpClient.post<
      unknown,
      IAuthUserDto
    >(userEndpoints.login, {
      data: {
        email,
        password,
      },
    })

    return UserMappper.toEntityWithToken(authUser)
  }

  async refresh(): Promise<User> {
    const { data: user } = await this._httpClient.post<unknown, IUserDto>(
      userEndpoints.refresh,
      { authorization: true }
    )

    return UserMappper.toEntity(user)
  }

  async update(user: User): Promise<void> {
    const userDto = UserMappper.toDto(user)

    await this._httpClient.put<unknown, IUserDto>(
      userEndpoints.update,
      { authorization: true },
      {
        data: userDto,
        params: userDto.id,
      }
    )
  }
}
