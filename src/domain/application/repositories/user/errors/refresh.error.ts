import { ErrorException } from 'src/domain/application/entities/error/ErrorException.entity'
import { HttpStatus } from 'src/enums/error/HttpStatus.enum'

export class refreshError extends ErrorException {
  constructor() {
    super(HttpStatus.UNAUTHORIZED)
    this.message = 'Dados de autenticação invalidos'
  }
}
