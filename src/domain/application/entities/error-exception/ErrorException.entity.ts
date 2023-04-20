import { HttpStatus } from 'src/enums/error/HttpStatus.enum'
import { ERRORS } from 'src/utils/errors/response/constants/errors.const'

export class ErrorException extends Error {
  public error?: string
  public statusCode?: HttpStatus
  public cause?: Error

  constructor(readonly props = ERRORS.unauthorized) {
    const { error, message, cause } = props

    super(`${error && 'Erro'}: ${message}`, { cause })
    Object.assign(this, props)
  }
}
