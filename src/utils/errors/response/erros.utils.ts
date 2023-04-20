import { ErrorException } from 'src/domain/application/entities/error-exception/ErrorException.entity'
import { ERRORS } from './constants/errors.const'

export class Unauthorizedd extends ErrorException {
  constructor(public props = ERRORS.unauthorized) {
    super(props)
  }
}
export class Unauthorized extends ErrorException {
  constructor(public props = ERRORS.unauthorized) {
    super(props)
  }
}

export class Unauthenticated extends ErrorException {
  constructor(public props = ERRORS.unauthorized) {
    super(props)
  }
}

export class BadRequest extends ErrorException {
  constructor(public props = ERRORS.unauthorized) {
    super(props)
  }
}

export class NotFound extends ErrorException {
  constructor(public props = ERRORS.unauthorized) {
    super(props)
  }
}

export class NotAcceptable extends ErrorException {
  constructor(public props = ERRORS.unauthorized) {
    super(props)
  }
}

export class TooManyRequests extends ErrorException {
  constructor(public props = ERRORS.unauthorized) {
    super(props)
  }
}

export class UnprocessableEntity extends ErrorException {
  constructor(public props = ERRORS.unauthorized) {
    super(props)
  }
}

export class InternalServerError extends ErrorException {
  constructor(public props = ERRORS.unauthorized) {
    super(props)
  }
}

export class ServiceUnavailable extends ErrorException {
  constructor(public props = ERRORS.unauthorized) {
    super(props)
  }
}
