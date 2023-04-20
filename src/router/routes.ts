import { appRouter } from 'src/constants/routes/appRouter.const'
import { indexRouter } from 'src/constants/routes/indexRouter.const'
import { loginRouter } from 'src/constants/routes/loginRouter.const'
import { notFoundRouter } from 'src/constants/routes/notFoundRouter.const'
import { registerRouter } from 'src/constants/routes/registerRouter.const'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  indexRouter,
  appRouter,
  loginRouter,
  registerRouter,
  notFoundRouter
]

export default routes
