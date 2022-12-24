export interface IUser {
  id: string
  name: string
  lastName: string
  email: string
  height: number
  weight: number
  sex: number
  userType: number
  password: string
  passwordResetToken: string
  passwordResetExpires: Date
}
