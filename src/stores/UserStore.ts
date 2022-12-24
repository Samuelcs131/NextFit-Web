import { defineStore } from 'pinia'
import { IUser } from 'src/models/user/IUser.mode'

export const useUserStore = defineStore('user', {
  state: () => ({
    data: null as IUser | null
  }),
  getters: {
  },
  actions: {
  }
})
