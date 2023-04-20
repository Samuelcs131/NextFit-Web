import { useCookies } from 'src/composables/useCookies'
import { useNotify } from 'src/composables/useNotify'
import { IUserUseCases } from 'src/useCases/user/IUserUseCases.contract'
import { getAvatar } from 'src/utils/avatar/avatar'
import { inject, ref } from 'vue'

enum sex {
  male = 0,
  man = 1,
}

interface ISexOptions {
  label: string
  value: sex
}

interface IState {
  form: {
    name: string | null
    lastName: string | null
    sex: number | null
    avatar: number
    height: number | null
    age: number | null
    country: number | null
  }
  options: {
    sex: Array<ISexOptions>
  }
}

const initializeState: IState = {
  form: {
    name: null,
    lastName: null,
    sex: null,
    avatar: 0,
    height: null,
    age: null,
    country: null,
  },
  options: {
    sex: [
      { label: 'woman', value: sex.male },
      { label: 'man', value: sex.man },
    ],
  },
}

const state = ref(initializeState)

export function useProfileMain() {
  const userService = inject('userUseCase') as IUserUseCases
  const { getCookie } = useCookies()

  function setAvatar(id: number) {
    state.value.form.avatar = getAvatar(id).id
  }

  async function fetchUser() {
    const tokenAccess = getCookie('tokenAccess')
    if (!tokenAccess) return

    const user = await userService.getUserByToken(tokenAccess)

    if (!user) return

    state.value.form = user
  }

  async function saveUser() {
    const { feedback } = useNotify()
   /*  feedback({
      type: 'positive',
      message: 'Foi porra',
      position: 'top-right',
      timeout: 100,
    }) */
  }

  return {
    state,
    setAvatar,
    fetchUser,
    saveUser,
  }
}
