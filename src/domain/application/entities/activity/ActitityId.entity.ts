import { checkIdentifier } from 'src/utils/id/checkIdentifier.util'

export type ValueObject<T> = Readonly<{
  type: string
  value: T
}>

export class ActivityId implements ValueObject<string> {
  readonly type = 'ACTIVITY_ID'

  private constructor(readonly value: string) {}

  static create(value?: string) {
    return new ActivityId(value || self.crypto.randomUUID())
  }

  createServerEntity() {
    return checkIdentifier(this.value, this.type) ? null : this.value
  }
}
