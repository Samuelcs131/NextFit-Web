import { useUserStore } from 'src/stores/UserStore'
import { feedbackErrosApi } from 'src/utils/errors/feedbackErrosApi'
import AuthService from 'src/service/nextfit-modules/auth/auth'
import { useRouter } from 'vue-router'
import { Cookies } from 'quasar'
import userService from 'src/service/nextfit-modules/user/user.service'

export default function useAuthUser () {
  const userStore = useUserStore()
  const { push } = useRouter()

  async function login (email: string, password: string): Promise<boolean> {
    const [error, user] = await AuthService.auth(email, password)

    if (error) {
      feedbackErrosApi(error.response?.status)
      return false
    }

    userStore.data = user

    push({ path: '/app/dashboard' })
    return true
  }

  async function isLoggedIn () {
    const tokenAccess = Cookies.get('tokenAccess')

    if (!tokenAccess) {
      push({ path: '/login' })
    } else {
      const [error, user] = await userService.getUserByToken(tokenAccess)

      if (error) {
        feedbackErrosApi(error.response?.status)
        return false
      }

      userStore.data = user
      return true
    }
  }

  async function logout () {
    Cookies.remove('tokenAccess')
    userStore.data = null

    push({ path: '/login' })
    return true
  }

  return {
    login,
    isLoggedIn,
    logout
  }
}
