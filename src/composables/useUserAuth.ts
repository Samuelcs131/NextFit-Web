import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { IUserAuthUseCases } from 'src/useCases/user-auth/IUserAuthUseCases.contract'
import { useUserStore } from 'src/stores/UserStore'
import { useCookies } from './useCookies'
import { IUserUseCases } from 'src/useCases/user/IUserUseCases.contract'
import { storeToRefs } from 'pinia'

export function useUserAuth() {
  const { getCookie, removeCookie } = useCookies()
  const { push } = useRouter()
  const { resetUser } = useUserStore()
  const { user, state } = storeToRefs(useUserStore())

  const userAuthService = inject('userAuthUseCase') as IUserAuthUseCases
  const userService = inject('userUseCase') as IUserUseCases

  async function login(email: string, password: string) {
    const user = await userAuthService.userAuth(email, password)

    if (!user) return false

    push({ path: '/app/dashboard' })
    return true
  }

  async function isLoggedIn() {
    const tokenAccess = getCookie('tokenAccess')

    if (!tokenAccess) {
      push({ path: '/login' })
      resetUser()
      return false
    }

    state.value = await userService.getUserByToken(tokenAccess)

    if (!user.value) {
      push({ path: '/login' })
      return false
    }

    return true
  }

  async function logout() {
    removeCookie('tokenAccess')
    resetUser()

    push({ path: '/login' })
    return true
  }

  return {
    login,
    isLoggedIn,
    logout,
  }
}
