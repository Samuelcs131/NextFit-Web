import { HttpStatus } from 'src/enums/error/HttpStatus.enum'

export type IErroProps = {
  message?: string
  error?: string
  statusCode?: HttpStatus
  cause?: Error
}
