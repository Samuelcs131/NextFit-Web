import { User } from 'src/domain/application/entities/user/User.entity'
import { IUserDto } from '../dto/IUser.dto'
import { UserId } from 'src/domain/application/entities/user/UserId.entity'
import { IAuthUserDto } from '../dto/IAuthUser.dto'

export class UserMappper {
  static toEntityWithToken({ user, token }: IAuthUserDto) {
    const id = user.id ? UserId.create(user.id) : UserId.create()
    const userEntity = new User(
      id,
      user.name,
      user.lastName,
      user.email,
      user.height,
      user.age,
      user.country,
      user.sex,
      user.userType,
      user.avatar,
      user.password
    )
    return { user: userEntity, token }
  }

  static toEntity(dto: IUserDto) {
    const id = dto.id ? UserId.create(dto.id) : UserId.create()
    return new User(
      id,
      dto.name,
      dto.lastName,
      dto.email,
      dto.height,
      dto.age,
      dto.country,
      dto.sex,
      dto.userType,
      dto.avatar,
      dto.password
    )
  }

  static toDto(entity: User): IUserDto {
    const id = entity.id.createServerEntity()

    return {
      id,
      name: entity.name,
      lastName: entity.lastName,
      email: entity.email,
      age: entity.age,
      height: entity.height,
      avatar: entity.avatar,
      sex: entity.sex,
      country: entity.country,
      userType: entity.userType,
      password: entity.password,
    }
  }
}
