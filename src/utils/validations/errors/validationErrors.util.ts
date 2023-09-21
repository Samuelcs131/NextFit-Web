import { ErrorException } from 'src/domain/application/entities/error/ErrorException.entity'
import { NumberForm } from '../form/numberForm.utils'
import { MixedForm } from '../form/mixedForm.utils'
import { StringForm } from '../form/stringForm.utils'
import { DateForm } from '../form/dateForm.utils'
import { EnumForm } from '../form/enumForm.utils'

export class MustBeTypeText extends ErrorException {
  constructor() {
    super()
    this.message = StringForm.text()
  }
}

export class MustBeTypeNumeric extends ErrorException {
  constructor() {
    super()
    this.message = NumberForm.number()
  }
}

export class MustBeTypeInteger extends ErrorException {
  constructor() {
    super()
    this.message = NumberForm.integer()
  }
}

export class InvalidEmailFormat extends ErrorException {
  constructor() {
    super()
    this.message = StringForm.email()
  }
}

export class MustBeMinMaxCharacteres extends ErrorException {
  constructor(min: number, max: number) {
    super()
    this.message = StringForm.range(min, max)
  }
}

export class MustNotBeEmpty extends ErrorException {
  constructor() {
    super()
    this.message = MixedForm.empty()
  }
}

export class MustBeLessThanEqualTo extends ErrorException {
  constructor(num: number) {
    super()
    this.message = NumberForm.max(num)
  }
}

export class MustBeGreaterThanEqualTo extends ErrorException {
  constructor(num: number) {
    super()
    this.message = NumberForm.min(num)
  }
}

export class MustMatchEnumOptions extends ErrorException {
  constructor(entity: string) {
    super()
    this.message = EnumForm.enum(entity)
  }
}

export class MustBeDate extends ErrorException {
  constructor() {
    super()
    this.message = DateForm.date()
  }
}

export class MustBeStrongPassword extends ErrorException {
  constructor() {
    super()
    this.message = MixedForm.strongPassword()
  }
}

export class MustNotContainSpaces extends ErrorException {
  constructor() {
    super()
    this.message = MixedForm.hasSpaces()
  }
}

export class Required extends ErrorException {
  constructor() {
    super()
    this.message = MixedForm.required()
  }
}

export class Positive extends ErrorException {
  constructor() {
    super()
    this.message = NumberForm.positive()
  }
}

export class LessThan extends ErrorException {
  constructor(value: number) {
    super()
    this.message = NumberForm.lessThan(value)
  }
}
