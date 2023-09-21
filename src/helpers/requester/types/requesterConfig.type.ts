/* eslint-disable no-unused-vars */
import { ErrorException } from 'src/domain/application/entities/error/ErrorException.entity'

export type ActionConfiguration = {
  callback: (data?: unknown) => unknown
  errorException?: ErrorException[]
  loaders?: string[]
  successMessageTitle?: string
  successMessage?: string
  errorMessageTitle?: string
  errorMessage?: string
  showAPIError?: boolean
  messageTimeout?: number
  successCallback?: () => unknown
  errorCallback?: () => unknown
}
