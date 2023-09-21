/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IDefaultFormField {
  fieldName: string
  columnSize: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  label: string
  type: 'string' | 'boolean' | 'date' | 'number' | 'options'
  options?: { label: string; value: unknown }[]
  selectOptions?: {
    emitValue?: boolean
    multiple?: boolean
    useInput?: boolean
  }
  rules?: ((value: any) => any | boolean)[]
  step?: number
  suffix?: string
  show?: boolean
}
