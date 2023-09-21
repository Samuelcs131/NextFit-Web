import { ErrorException } from 'src/domain/application/entities/error/ErrorException.entity'
import { HttpStatus } from 'src/enums/error/HttpStatus.enum'

export class LoginError extends ErrorException {
  constructor() {
    super(HttpStatus.UNAUTHORIZED)
    this.message = 'Email ou senha incorretos'
  }
}

// message: 'Email ou senha incorretos'
