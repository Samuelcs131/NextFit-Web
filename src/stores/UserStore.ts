import { defineStore } from 'pinia'
import { IUser } from 'src/entities/user/IUser.model'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const state = ref(null as IUser | null)

  const user = computed(()=> state.value)

  function resetUser(){
    state.value = null
  }

  return { state, resetUser, user }
})
