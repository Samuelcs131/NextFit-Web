import { AxiosError } from 'axios'

interface IFeedback {
  title: string
  message?: string
}

export interface IRequesterConfig {
  callback: () => unknown
  loaders?: Array<string>
  successFeedback?: IFeedback
  successCallback?: (response: unknown) => unknown
  errorCallback: (error: AxiosError) => IFeedback
}
