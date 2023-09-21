import { repositoriesIdentifier } from 'src/constants/repositories/repositoriesIdentifier.const'
import { UserRepository } from 'src/domain/application/repositories/user/User.repository'

export const repositoriesData = {
  [repositoriesIdentifier.user]: {
    repository: UserRepository,
  },
}
