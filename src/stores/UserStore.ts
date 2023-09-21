import { defineStore } from 'pinia'
import { ref } from 'vue'
import { User } from 'src/domain/application/entities/user/User.entity'


export const useUserStore = defineStore('user', () => {
  const userState = ref(null as User | null)

  function resetUser() {
    userState.value = null
  }

  function setUser(user: User) {
    userState.value = user
  }

  return { userState, resetUser, setUser }
})

