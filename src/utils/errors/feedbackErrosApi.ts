import { useI18n } from 'src/boot/i18n'
import { useNotify } from 'src/composables/useNotify'
const { feedback } = useNotify()
const { t } = useI18n()

export function feedbackErrosApi(statusCode?: number) {
  const type = !statusCode || statusCode > 400 ? 'negative' : 'warning'

  const filterErrors = errors.find((err) => err.status === statusCode)?.error

  if (!filterErrors) {
    feedback({
      type: 'negative',
      position: 'top-right',
      title: t('apiErrors.unexpectedError.title'),
      description: t('apiErrors.unexpectedError.description'),
    })
  } else {
    feedback({
      type,
      position: 'top-right',
      title: filterErrors.message,
      description: filterErrors.caption,
    })
  }
}

const errors = [
  {
    status: 400,
    error: {
      message: t('apiErrors.badRequest.title'),
      caption: t('apiErrors.badRequest.description'),
    },
  },
  {
    status: 401,
    error: {
      message: t('apiErrors.unauthorized.title'),
      caption: t('apiErrors.unauthorized.description'),
    },
  },
  {
    status: 500,
    error: {
      message: t('apiErrors.internalServerError.title'),
      caption: t('apiErrors.internalServerError.description'),
    },
  },
]
