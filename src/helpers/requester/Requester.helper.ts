import { AxiosError } from 'axios'
import { IRequesterConfig } from './types/requesterConfig.type'
import { useNotify } from 'src/composables/useNotify'
import useLoader from 'src/composables/useLoader'
import { QType } from 'src/enums/quasar/type.enum'

export class Requester {
  static async action(config: IRequesterConfig) {
    const {
      successFeedback,
      loaders,
      callback,
      errorCallback,
      successCallback,
    } = config

    this.loaders('start', loaders)

    try {
      const response = await callback()

      if (successCallback) successCallback(response)

      if (successFeedback) {
        const { title, message } = successFeedback
        this.feedback('positive', title, message)
      }
    } catch (error) {
      console.error(`Error request: ${error}`)

      const { message, title } = errorCallback(error as AxiosError)
      this.feedback('negative', title, message)
    }

    this.loaders('end', loaders)
  }

  private static feedback(
    type: `${QType}`,
    title: string,
    description?: string
  ) {
    const { feedback } = useNotify()
    feedback({
      title,
      description,
      type,
      position: 'top-right',
    })
  }

  private static loaders(loaderStart: 'start' | 'end', loaders?: string[]) {
    if (!loaders || loaders.length >= 0) return

    const { loaderStatus, toggleLoading } = useLoader()

    if (loaderStart === 'start') {
      for (const loader of loaders) {
        if (!loaderStatus(loader)) toggleLoading(loader)
      }
    } else {
      for (const loader of loaders) {
        if (loaderStatus(loader)) toggleLoading(loader)
      }
    }
  }
}

Requester.action({
  callback: () => {
    console.log()

    return { opa: '' }
  },
  loaders: [],
  successFeedback: { title: '', message: '' },
  successCallback: (data) => {
    console.log(data)
  },
  errorCallback: (erro) => {
    console.log(erro)

    return { title: '', message: '' }
  },
})
