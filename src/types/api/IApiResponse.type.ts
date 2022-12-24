import { AxiosError } from 'axios'

export type IApiResponse<T> = [null, T] | [AxiosError]
