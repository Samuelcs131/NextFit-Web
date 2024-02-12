import { ref } from 'vue'
import { Form } from 'src/domain/application/entities/form/Form.entity'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import { fakePromise } from 'src/utils/fakePromise.util'
import { registerLoader } from '../constants/registerLoader.const'
import { IUser } from 'src/types/user/IUser.type'

interface IState {
  user: Form<IUser>
  policyTerms: boolean
  visibilityPassword: boolean
  loadingButton: boolean
}

const state = ref({
  user: new Form<IUser>(),
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
    })
  }

  function resetState() {
    state.value = {
      user: new Form<IUser>(),
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
