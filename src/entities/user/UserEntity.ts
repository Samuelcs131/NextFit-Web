import { IUser } from 'src/entities/user/IUser.model'

export class UserEntity {
  public readonly _id: string
  public _name: string
  public _lastName: string
  private _email: string
  public _height: number
  public _age: number
  public _country: number
  public _sex: number
  public _avatar: number
  private readonly _userType: number
  private _password: string
  private _passwordResetToken: string
  private _passwordResetExpires: Date

  constructor(props: IUser) {
    Object.assign(this, props)
  }

}
