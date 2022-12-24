import useAuthUser from 'src/composables/useAuthUser'
import { ref } from 'vue'

interface IState {
  email: string | null
  password: string | null
  visibilityPwd: boolean,
  btnLogInLoading: boolean
}

export default function useLoginMain () {
  const { login } = useAuthUser()

  const state = ref<IState>({
    email: 'demo@demo.com',
    password: '12345678',
    visibilityPwd: true,
    btnLogInLoading: false
  })

  async function onLogin () {
    if (!state.value.email || !state.value.password) return
    state.value.btnLogInLoading = true
    await login(state.value.email, state.value.password)
    state.value.btnLogInLoading = false
  }

  return {
    state,
    onLogin
  }
}
