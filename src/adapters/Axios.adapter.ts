import { injectable } from 'inversify'
import { IHttpClient } from './contracts/IHttpClient.contract'
import { api } from 'src/boot/axios'
import { useCookies } from 'src/composables/useCookies'
import { tokenAccessKey } from 'src/constants/auth-user/tokenAccessKey.const'
import { IReponseAPI } from './types/IResponseAPI.type'
import { IHttpClientOptions } from './types/IHttpClientOptions.type'

const { getCookie } = useCookies()

@injectable()
export class AxiosAdapter implements IHttpClient {
  private token: string | null = null

  handleAuth() {
    const token = getCookie(tokenAccessKey)
    this.token = `Bearear ${token}`
  }

  async get<T, R>(
    path: string,
    config?: IHttpClientOptions<T>,
    options?: object
  ): Promise<IReponseAPI<R>> {
    let response = null

    if (config?.authorization) this.handleAuth()

    response = await api.get(path, {
      headers: {
        authorization: config?.authorization ? this.token : undefined,
        ...config?.headers,
      },
      ...config,
      ...options,
    })

    return { data: response.data, APIResponse: response }
  }

  async post<T, R>(
    path: string,
    config?: IHttpClientOptions<T>,
    options?: object
  ): Promise<IReponseAPI<R>> {
    let response = null

    if (config?.authorization) this.handleAuth()

    response = await api.post<R>(
      path,
      {
        ...config?.data,
      },
      {
        headers: {
          authorization: config?.authorization ? this.token : undefined,
          ...config?.headers,
        },
        ...config,
        ...options,
      }
    )

    return { data: response.data, APIResponse: response }
  }

  async put<T, R>(
    path: string,
    config?: IHttpClientOptions<T>,
    options?: object
  ): Promise<IReponseAPI<R>> {
    if (config?.authorization) this.handleAuth()

    const response = await api.put(
      path,
      {
        ...config?.data,
      },
      {
        headers: {
          authorization: config?.authorization ? this.token : undefined,
          ...config?.headers,
        },
        ...config,
        ...options,
      }
    )
    return { data: response.data, APIResponse: response }
  }

  async patch<T, R>(
    path: string,
    config?: IHttpClientOptions<T>,
    options?: object
  ): Promise<IReponseAPI<R>> {
    if (config?.authorization) this.handleAuth()

    const response = await api.patch(
      path,
      {
        ...config?.data,
      },
      {
        headers: {
          authorization: config?.authorization ? this.token : undefined,
          ...config?.headers,
        },
        ...config,
        ...options,
      }
    )
    return { data: response.data, APIResponse: response }
  }

  async delete<T, R>(
    path: string,
    config?: IHttpClientOptions<T>,
    options?: object
  ): Promise<IReponseAPI<R>> {
    let response = null

    if (config?.authorization) this.handleAuth()

    response = await api.delete(path, {
      headers: {
        authorization: config?.authorization ? this.token : undefined,
        ...config?.headers,
      },
      ...config,
      ...options,
    })

    return { data: response.data, APIResponse: response }
  }
}
