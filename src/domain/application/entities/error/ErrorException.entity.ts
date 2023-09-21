import { HttpStatus } from 'src/enums/error/HttpStatus.enum'
import { ERRORS } from 'src/utils/errors/response/constants/errors.const'

export class ErrorException extends Error {
  public error: string
  public status: HttpStatus

  constructor(
    status = HttpStatus.GENERIC,
    cause?: Error,
    custom?: ErrorException[]
  ) {
    const customError = custom?.find((exception) => exception.status === status)
    const httpStatus = customError || ERRORS[status]
    const { error, message } = httpStatus

    super(message ? message : cause?.message, { cause })

    this.error = error
    this.status = status
    this.cause = cause
  }
}
