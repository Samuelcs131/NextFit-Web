import { useNotify } from 'src/composables/useNotify'
import { ActionConfiguration } from './types/requesterConfig.type'
import useLoader from 'src/composables/useLoader'
import { ICustomError } from './types/ICustomError.type'
import { ErrorException } from 'src/domain/application/entities/error/ErrorException.entity'

/**
 * Classe para despachar ações com feedback visual e gerenciamento de estado de carregamento.
 */

export default class ActionDispatcher {
  static async dispatch(configuration: ActionConfiguration) {
    const {
      callback,
      errorException,
      loaders,
      successMessageTitle,
      successMessage,
      errorMessageTitle,
      errorMessage,
      successCallback,
      errorCallback,
      showAPIError,
      messageTimeout,
    } = configuration

    this._startLoadersIfExists(loaders)

    try {
      await callback()
      this._showSuccessMessageIfExists(
        successMessageTitle,
        successMessage,
        messageTimeout
      )

      if (successCallback) successCallback()
    } catch (error: unknown) {
      const errorStack = error as ICustomError
      const httpError = new ErrorException(
        errorStack.response?.status,
        errorStack,
        errorException
      )

      console.error(httpError?.cause)

      let errorMessageTitleFeedback = errorMessageTitle || ''
      let errorMessageFeedback = errorMessage || ''

      if (showAPIError) {
        errorMessageTitleFeedback = httpError.error
        errorMessageFeedback = httpError.message

      }

      this._showErrorMessageIfExists(
        errorMessageTitleFeedback,
        errorMessageFeedback,
        messageTimeout
      )

      if (errorCallback) errorCallback()
    }

    this._endLoadersIfExists(loaders)
  }

  private static _startLoadersIfExists(loaders?: string[]) {
    if (!loaders || !loaders.length) return

    const { loaderStatus, toggleLoading } = useLoader()

    for (const loader of loaders) {
      if (!loaderStatus(loader)) toggleLoading(loader)
    }
  }

  private static _endLoadersIfExists(loaders?: string[]) {
    if (!loaders || !loaders.length) return

    const { loaderStatus, toggleLoading } = useLoader()

    for (const loader of loaders) {
      if (loaderStatus(loader)) toggleLoading(loader)
    }
  }

  private static _showErrorMessageIfExists(
    title?: string,
    errorMessage?: string,
    timeout?: number
  ) {
    if (!errorMessage) return

    const { feedback } = useNotify()

    feedback({
      position: 'top-right',
      title: title ?? '',
      description: errorMessage,
      type: 'negative',
      timeout,
    })
  }

  private static _showSuccessMessageIfExists(
    title?: string,
    successMessage?: string,
    timeout?: number
  ) {
    if (!successMessage) return

    const { feedback } = useNotify()

    feedback({
      position: 'top-right',
      title: title ?? '',
      description: successMessage,
      type: 'positive',
      timeout,
    })
  }
}
