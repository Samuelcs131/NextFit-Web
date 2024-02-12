import { Screen } from 'quasar'
import { useUserAuth } from 'src/composables/useUserAuth'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import { ref, computed } from 'vue'
import { userLayoutLoader } from '../enums/userLayoutLoaders.enum'
import { fakePromise } from 'src/utils/fakePromise.util'

interface IState {
  menu: {
    drawer: boolean
    mini: boolean
  }
}

const state = ref<IState>({
  menu: {
    drawer: false,
    mini: false,
  },
})

export function useUserLayout() {
  function toggleLeftDrawer() {
    if (Screen.width < 768) {
      state.value.menu.drawer = !state.value.menu.drawer
    } else {
      state.value.menu.mini = !state.value.menu.mini
    }
  }

  function defineTypeMenu() {
    state.value.menu.drawer = Screen.width > 768
    state.value.menu.mini = Screen.width < 1200
  }

  async function checkILoggedIn() {
    const { isLoggedIn } = useUserAuth()

    ActionDispatcher.dispatch({
      callback: async () => {
        await fakePromise(1500)

        isLoggedIn()
      },
      loaders: [userLayoutLoader.isLoggedIn],
    })
  }

  const typeScreen = computed(() => {
    if (Screen.width < 768) state.value.menu.mini = false
    return Screen.width <= 768 ? 'mobile' : 'desktop'
  })

  return {
    state,
    typeScreen,
    toggleLeftDrawer,
    defineTypeMenu,
    checkILoggedIn,
  }
}
