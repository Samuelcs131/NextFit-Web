import { ErrorException } from 'src/domain/application/entities/error-exception/ErrorException.entity'
import { ERRORS } from './constants/errors.const'
import { IErroProps } from './types/erros.type'

export class Unauthorized extends ErrorException {
  constructor(public props: IErroProps) {
    super({
      ...ERRORS.unauthorized,
      ...props,
    })
  }
}

export class Unauthenticated extends ErrorException {
  constructor(public props: IErroProps) {
    super({
      ...ERRORS.unauthenticated,
      ...props,
    })
  }
}

export class BadRequest extends ErrorException {
  constructor(public props: IErroProps) {
    super({
      ...ERRORS.badRequest,
      ...props,
    })
  }
}

export class NotFound extends ErrorException {
  constructor(public props: IErroProps) {
    super({
      ...ERRORS.notFound,
      ...props,
    })
  }
}

export class NotAcceptable extends ErrorException {
  constructor(public props: IErroProps) {
    super({
      ...ERRORS.notAcceptable,
      ...props,
    })
  }
}

export class TooManyRequests extends ErrorException {
  constructor(public props: IErroProps) {
    super({
      ...ERRORS.tooManyRequests,
      ...props,
    })
  }
}

export class UnprocessableEntity extends ErrorException {
  constructor(public props: IErroProps) {
    super({
      ...ERRORS.unprocessableEntity,
      ...props,
    })
  }
}

export class InternalServerError extends ErrorException {
  constructor(public props: IErroProps) {
    super({
      ...ERRORS.internalServerError,
      ...props,
    })
  }
}

export class ServiceUnavailable extends ErrorException {
  constructor(public props: IErroProps) {
    super({
      ...ERRORS.serviceUnavailable,
      ...props,
    })
  }
}
