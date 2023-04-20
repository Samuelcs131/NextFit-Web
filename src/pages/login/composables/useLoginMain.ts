import { LocalStorage } from 'quasar'
import {useUserAuth} from 'src/composables/useUserAuth'
import { computed, ref } from 'vue'

interface IState {
  email: string | null
  password: string | null
  visibilityPwd: boolean,
  btnLogInLoading: boolean,
}

const initializeState: IState = {
  email: 'demo@nextfit.com',
  password: '12345678',
  visibilityPwd: true,
  btnLogInLoading: false,
}

export default function useLoginMain () {
  const { login } = useUserAuth()

  const state = ref(initializeState)

  async function onLogin () {
    if (!state.value.email || !state.value.password) return
    state.value.btnLogInLoading = true
    await login(state.value.email, state.value.password)
    state.value.btnLogInLoading = false
  }

  return {
    state,
    onLogin,
  }
}
