type Nullable<T> = { -readonly [K in keyof T]: T[K] | null }

export class Form<T> {
  public fields: Nullable<T> = {} as Nullable<T>

  constructor(private _entity?: { [K in keyof T]: T[K] }) {
    if (_entity) {
      for (const key in _entity) {
        this.fields[key] = _entity[key]
      }
    }
  }
}
