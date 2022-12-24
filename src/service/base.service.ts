import { IApiResponse } from 'src/types/api/IApiResponse.type'
import { AxiosError } from 'axios'

export class BaseService {
  apiResult<T> (apiResponse: T): IApiResponse<T> {
    return [null, apiResponse]
  }

  apiError (error: AxiosError): [AxiosError] {
    return [error as AxiosError]
  }
}
