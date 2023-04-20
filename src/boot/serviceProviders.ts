import { boot } from 'quasar/wrappers'
import { UserAuthController } from 'src/infra/user-auth/UserAuthController'
import { UserController } from 'src/infra/user/UserController'
import { UserAuthRepository } from 'src/repositories/user-auth/UserAuthRepository'
import { UserRepository } from 'src/repositories/user/UserRepository'
import { UserAuthUseCase } from 'src/useCases/user-auth/UserAuthUseCase'
import { UserUseCase } from 'src/useCases/user/UserUseCase'

export default boot(({ app }) => {
  // controllers
  const userAuthController = new UserAuthController()
  const userController = new UserController()

  // repositories
  const userAuthRepository = new UserAuthRepository(userAuthController)
  const userRepository = new UserRepository(userController)

  // services
  app.provide(
    'userAuthUseCase',
    new UserAuthUseCase(userAuthRepository)
  )

  app.provide(
    'userUseCase',
    new UserUseCase(userRepository)
  )
})
