import { useRouter } from 'vue-router'
import { useUserStore } from 'src/stores/UserStore'
import { useCookies } from './useCookies'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import { tokenAccessKey } from 'src/constants/auth-user/tokenAccessKey.const'
import { fakePromise } from 'src/utils/fakePromise.util'
import { UserService } from 'src/service/nextfit/user/user.service'

export function useUserAuth() {
  const { setCookie, getCookie, removeCookie } = useCookies()
  const userStore = useUserStore()
  const { push } = useRouter()

  async function login(email: string, password: string, loaders?: string[]) {
    ActionDispatcher.dispatch({
      callback: async () => {
        const {
          data: { user, token },
        } = await UserService.login(email, password)
        userStore.setUser(user)
        setCookie(tokenAccessKey, token, {
          secure: true,
          expires: process.env.ACCESS_TOKEN_DURATION,
        })
      },
      successCallback() {
        push({ path: '/app/dashboard' })
      },
      errorMessageTitle: 'Erro ao realizar',
      errorMessage: 'Erro ao fazer alguma coisa',
      showAPIError: true,
      loaders,
    })
  }

  async function isLoggedIn(loaders?: string[]) {
    const tokenAccess = getCookie(tokenAccessKey)

    if (!tokenAccess) return logout()

    ActionDispatcher.dispatch({
      callback: async () => {
        await fakePromise(1000)
        const { data: user } = await UserService.refresh()
        userStore.setUser(user)
        if (!user) logout()
      },
      errorCallback() {
        logout()
      },
      errorMessageTitle: 'Erro ao realizar',
      errorMessage: 'Erro ao fazer alguma coisa',
      showAPIError: true,
      loaders,
    })
  }

  async function logout() {
    removeCookie(tokenAccessKey)
    userStore.resetUser()
    push({ path: '/login' })
  }

  return {
    login,
    isLoggedIn,
    logout,
  }
}
