import { BaseEntity } from '../base-entity/BaseEntity'
import { IBaseEntityProps } from '../base-entity/types/IBaseEntity.type'
import { IUserProps } from './types/IUserProps.type'

export class User extends BaseEntity<IUserProps> {
  private props: IUserProps

  constructor(userProps: IUserProps, propsEntity?: IBaseEntityProps) {
    super(userProps, propsEntity)

    this.props = userProps
  }

  get name() {
    return this.props.name
  }

  set name(value: string) {
    const { max, min } = name

    validIsNotEmpty(value, true)
    validIsString(value, true)
    validLength(value, min, max, { max, min })

    this.props.name = capitalizeFirstLetter(value.trim())
  }

  get lastName() {
    return this.props.lastName
  }
  set lastName(value: string) {
    const { max, min } = lastName

    validIsNotEmpty(value, true)
    validIsString(value, true)
    validLength(value, min, max, { max, min })

    this.props.lastName = capitalizeFirstLetter(value.trim())
  }

  get email() {
    return this.props.email
  }
  set email(value: string) {
    const { max, min } = email

    validIsNotEmpty(value, true)
    validIsEmail(value, true)
    validLength(value, min, max, { min, max })

    this.props.email = value
  }

  get height() {
    return this.props.height
  }
  set height(value: number) {
    const { max, min } = height

    validIsNotEmpty(value, true)
    validIsInt(value, true)
    validMin(value, min, { min })
    validMax(value, max, { max })

    this.props.height = value
  }

  get age() {
    return this.props.age
  }
  set age(value: number) {
    const { max, min } = age

    validIsNotEmpty(value, true)
    validIsInt(value, true)
    validMin(value, min, { min })
    validMax(value, max, { max })

    this.props.age = value
  }

  get country() {
    return this.props.country
  }
  set country(value: country) {
    validIsNotEmpty(value, true)
    validIsInt(value, true)
    validIsEnum(value, country, { nameEnum: 'country' })

    this.props.country = value
  }

  get sex() {
    return this.props.sex
  }
  set sex(value: sex) {
    validIsNotEmpty(value, true)
    validIsInt(value, true)
    validIsEnum(value, sex, { nameEnum: 'sex' })

    this.props.sex = value
  }

  get userType() {
    return this.props.userType
  }
  set userType(value: userType) {
    validIsNotEmpty(value, true)
    validIsInt(value, true)
    validIsEnum(value, userType, { nameEnum: 'userType' })

    this.props.userType = value
  }

  get avatar() {
    return this.props.avatar
  }
  set avatar(value: avatar) {
    validIsNotEmpty(value, true)
    validIsInt(value, true)
    validIsEnum(value, avatar, { nameEnum: 'avatar' })

    this.props.avatar = value
  }

  get disabled() {
    return this.props.disabled
  }
  set disabled(value: string | Date) {
    validIsNotEmpty(value, true)
    validIsDateString(value, { strict: false, strictSeparator: false }, true)

    this.props.disabled = value
  }

  get password() {
    return this.props.password
  }
  get passwordResetToken() {
    return this.props.passwordResetToken
  }
  get passwordResetExpires() {
    return this.props.passwordResetExpires
  }
  set passwordResetExpires(value: string | Date) {
    validIsNotEmpty(value, true)
    validIsDateString(value, { strict: false, strictSeparator: false }, true)

    this.props.passwordResetExpires = value
  }
}
