import { Form } from 'src/domain/application/entities/form/Form.entity'
// import { UserId } from 'src/domain/application/entities/user/UserId.entity'
import { Avatar } from 'src/enums/user/Avatar.enum'
// import { Country } from 'src/enums/user/Country.enum'
// import { Sex } from 'src/enums/user/Sex.enum'
// import { UserType } from 'src/enums/user/UserType.enum'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import { useUserStore } from 'src/stores/UserStore'
import { IUser } from 'src/types/user/IUser.type'
import { IsValid } from 'src/utils/validations/validator/IsValid.utils'
import { ref, watch } from 'vue'

interface IState {
  userMock: Form<IUser>
  user: Form<IUser>
  disableSubmitBtn: boolean
}

const state = ref({
  userMock: new Form<IUser>(),
  user: new Form<IUser>(),
  disableSubmitBtn: true,
} as IState)

export function useProfileMain() {
  function setAvatar(id: Avatar) {
    state.value.user.fields.avatar = id
  }

  async function fetchUser() {
    const userStore = useUserStore()

    if (!userStore.userState) return

    state.value.userMock = new Form<IUser>(userStore.userState)
    state.value.user = new Form<IUser>(userStore.userState)
  }

  async function saveUser() {
    ActionDispatcher.dispatch({
      callback: async () => {
        /*  const UserRepository = container.get<IUserRepository>(
          repositoriesIdentifier.user
        ) */

        // const { user } = state.value

        // const id = user.fields.id as UserId

        /* const userUpdate = new User(
          id,
          user.fields.name as string,
          user.fields.lastName as string,
          user.fields.email as string,
          user.fields.height as number,
          user.fields.age as number,
          user.fields.country as Country,
          user.fields.sex as Sex,
          user.fields.userType as UserType,
          user.fields.avatar as Avatar,
          user.fields.password as string
        ) */
      },
    })
  }

  function checkChangeUserData() {
    const { user, userMock } = state.value

    return IsValid.areObjectsEqual(user.fields, userMock.fields)
  }

  watch(state.value.user.fields, () => {
    state.value.disableSubmitBtn = checkChangeUserData()
  })

  return {
    state,
    setAvatar,
    fetchUser,
    saveUser,
  }
}
