import { ref } from 'vue'
import { Form } from 'src/domain/application/entities/form/Form.entity'
import { User } from 'src/domain/application/entities/user/User.entity'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import { fakePromise } from 'src/utils/fakePromise.util'
import { registerLoader } from '../constants/registerLoader.const'

interface IState {
  user: Form<User>
  policyTerms: boolean
  visibilityPassword: boolean
  loadingButton: boolean
}

const state = ref({
  user: new Form<User>(),
  policyTerms: false,
  visibilityPassword: true,
  loadingButton: true,
} as IState)

export default function useRegisterMain() {
  function handleSubmitForm() {
    ActionDispatcher.dispatch({
      callback: async () => {
        await fakePromise(4000)
      },
      loaders: [registerLoader.submitForm],
      showAPIError: true,
      errorException: [],
    })
  }

  function resetState() {
    state.value = {
      user: new Form<User>(),
      policyTerms: false,
      visibilityPassword: true,
      loadingButton: true,
    }
  }

  return {
    state,
    resetState,
    handleSubmitForm,
  }
}
