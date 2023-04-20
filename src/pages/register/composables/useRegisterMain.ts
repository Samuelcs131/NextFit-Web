import useSearch from 'src/composables/useSearch'
import { country } from 'src/enums/user/country.enum'
import { sex } from 'src/enums/user/sex.enum'
import { ref } from 'vue'
import { countryOptions } from '../constants/countryOptions.const'

interface IState {
  form: {
    name: string | null
    lastName: string | null
    email: string | null
    sex: number
    age: number | null
    height: number | null
    weight: number | null
    country: number
    password: string | null
    terms: boolean
  }
  options: {
    country: any[]
  }
  visibilityPwd: boolean
  btnLogInLoading: boolean
}

const initializeState: IState = {
  form: {
    name: null,
    lastName: null,
    email: null,
    sex: sex.male,
    age: null,
    height: null,
    weight: null,
    country: country.BR,
    password: null,
    terms: false,
  },
  options: {
    country: countryOptions,
  },
  visibilityPwd: true,
  btnLogInLoading: false,
}

export default function useRegisterMain() {
  const state = ref(initializeState)

  const { searchOn } = useSearch()

  async function onRegister() {
    return ''
  }

  function handleFilterCountry(value: string, update: any) {
    update(() => {
      state.value.options.country = searchOn(countryOptions, value)
    })
  }

  return {
    state,
    onRegister,
    handleFilterCountry,
  }
}
