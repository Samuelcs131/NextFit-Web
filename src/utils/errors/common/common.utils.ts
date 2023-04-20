import { ErrorException } from 'src/domain/application/entities/error-exception/ErrorException.entity'

export class MustBeTypeText extends ErrorException {
  constructor() {
    super({ message: 'Deve ser do tipo texto' })
  }
}

export class MustBeTypeNumeric extends ErrorException {
  constructor() {
    super({ message: 'Deve ser do tipo numérico' })
  }
}

export class MustBeTypeInteger extends ErrorException {
  constructor() {
    super({ message: 'Deve ser um inteiro' })
  }
}

export class InvalidEmailFormat extends ErrorException {
  constructor() {
    super({ message: 'Formato de email inválido' })
  }
}

export class MustBeMinMaxCharacteres extends ErrorException {
  constructor(min: number, max: number) {
    super({
      message: `Deve ter no mínimo ${min} e no máximo ${max} caracteres`,
    })
  }
}

export class MustNotBeEmpty extends ErrorException {
  constructor() {
    super({
      message: 'Não deve ser vazio.',
    })
  }
}

export class MustBeLessThanEqualTo extends ErrorException {
  constructor(num: number) {
    super({
      message: `Deve ser menor ou igual a ${num}.`,
    })
  }
}

export class MustBeGreaterThanEqualTo extends ErrorException {
  constructor(num: number) {
    super({
      message: `Deve ser maior ou igual a ${num}.`,
    })
  }
}

export class MustMatchEnumOptions extends ErrorException {
  constructor(entity: string) {
    super({
      message: `Deve corresponder as opções do enum ${entity}.`,
    })
  }
}

export class MustBeDate extends ErrorException {
  constructor() {
    super({
      message: 'Deve ser uma data',
    })
  }
}

export class MustBeStrongPassword extends ErrorException {
  constructor() {
    super({
      message: 'Deve ser uma senha forte, utilize caracteres especiais',
    })
  }
}

export class MustNotContainSpaces extends ErrorException {
  constructor() {
    super({
      message: 'Não deve conter espaços',
    })
  }
}

export class Required extends ErrorException {
  constructor() {
    super({
      message: 'Campo obrigatório',
    })
  }
}
