import { checkIdentifier } from 'src/utils/id/checkIdentifier.util'
import { randomUUID } from 'src/utils/uuid/randomUUID.util'

export class GeneratorId {
  readonly type = 'generator'

  private constructor(readonly value: string) {}

  static create(value?: string | null) {
    return new GeneratorId(value || `${randomUUID()}-generator`)
  }

  createServerEntity() {
    return checkIdentifier(this.value, this.type) ? null : this.value
  }
}

/* export type ValueObject<T> = Readonly<{
  type: string
  value: T
}>

export class TrainingId implements ValueObject<string> {
  readonly type = 'ACTIVITY_ID'


  private constructor(readonly value: string) {}

  static create(value?: string) {
    return new TrainingId(value || self.crypto.randomUUID())
  }

  createServerEntity() {
    return checkIdentifier(this.value, this.type) ? null : this.value
  }
} */
