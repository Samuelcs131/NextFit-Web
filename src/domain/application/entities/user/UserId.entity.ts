/* eslint-disable no-unused-vars */
import { checkIdentifier } from 'src/utils/id/checkIdentifier.util'

export type ValueObject<T> = Readonly<{
  type: string
  value: T
}>

export class UserId implements ValueObject<string> {
  readonly type = 'USER_ID'

  private constructor(readonly value: string) {}

  static create(value?: string) {
    return new UserId(value || self.crypto.randomUUID())
  }

  createServerEntity() {
    return checkIdentifier(this.value, this.type) ? null : this.value
  }
}
