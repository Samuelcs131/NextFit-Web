import { useCookies } from 'src/composables/useCookies'
import { tokenAccessKey } from 'src/constants/auth-user/tokenAccessKey.const'
// import { useUserStore } from 'src/stores/UserStore'
// import { useRouter } from 'vue-router'

export function redirectToApp() {
  // const userStore = useUserStore()

  const { getCookie } = useCookies()
  const tokenAccess = getCookie(tokenAccessKey)

  if (tokenAccess) {
    // const { push } = useRouter()
    // push({ name: 'dashboard' })
  }
}
