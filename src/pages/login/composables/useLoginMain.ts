import { useUserAuth } from 'src/composables/useUserAuth'
import { ref } from 'vue'
import { loginLoader } from '../constants/loginLoader.const'

interface IState {
  email: string | null
  password: string | null
  visibilityPwd: boolean
  btnLogInLoading: boolean
}

const initializeState: IState = {
  email: 'admin@mail.com',
  password: '!Senhaforte12',
  visibilityPwd: true,
  btnLogInLoading: false,
}

export default function useLoginMain() {
  const { login } = useUserAuth()

  const state = ref(initializeState)

  async function onLogin() {
    if (!state.value.email || !state.value.password) return
    
    state.value.btnLogInLoading = true

    await login(state.value.email, state.value.password, [
      loginLoader.loginUser,
    ])

    state.value.btnLogInLoading = false
  }

  return {
    state,
    onLogin,
  }
}
