import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IUser } from 'src/types/user/IUser.type'


export const useUserStore = defineStore('user', () => {
  const userState = ref(null as IUser | null)

  function resetUser() {
    userState.value = null
  }

  function setUser(user: IUser) {
    userState.value = user
  }

  return { userState, resetUser, setUser }
})

