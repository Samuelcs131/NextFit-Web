import { RouteRecordRaw } from 'vue-router'
import { routers } from './routers.const'

const routes: RouteRecordRaw[] = [
  routers.app,
  routers.index,
  routers.login,
  routers.register,
  routers.notFound,
  routers.forgotPassword,
]

export default routes
