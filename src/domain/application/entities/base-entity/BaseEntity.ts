import { IBaseEntityProps } from './types/IBaseEntity.type'

export class BaseEntity<T> {
  protected id: string | null = null
  readonly createAt: string | Date | null = null
  readonly updateAt: string | Date | null = null
  private _props: T

  constructor(props: T, propsBaseEntity?: IBaseEntityProps) {
    this._props = props

    this.id = propsBaseEntity?.id ?? null
    this.createAt = propsBaseEntity?.createAt ?? null
    this.updateAt = propsBaseEntity?.updateAt ?? null
  }
}
