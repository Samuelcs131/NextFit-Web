/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "*" }] */

import { IHttpClientOptions } from '../types/IHttpClientOptions.type'
import { IReponseAPI } from '../types/IResponseAPI.type'

export interface IHttpClient {
  get<T, R>(
    path: string,
    config?: IHttpClientOptions<T>,
    options?: object
  ): Promise<IReponseAPI<R>>
  post<T, R>(
    path: string,
    config?: IHttpClientOptions<T>,
    options?: object
  ): Promise<IReponseAPI<R>>
  put<T, R>(
    path: string,
    config?: IHttpClientOptions<T>,
    options?: object
  ): Promise<IReponseAPI<R>>
  patch<T, R>(
    path: string,
    config?: IHttpClientOptions<T>,
    options?: object
  ): Promise<IReponseAPI<R>>
  delete<T, R>(
    path: string,
    config?: IHttpClientOptions<T>,
    options?: object
  ): Promise<IReponseAPI<R>>
}
