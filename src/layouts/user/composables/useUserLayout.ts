import { Screen } from 'quasar'
import useLoader from 'src/composables/useLoader'
import { useUserAuth } from 'src/composables/useUserAuth'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

interface IState {
  menu: {
    drawer: boolean
    mini: boolean
  }
}

const state = ref<IState>({
  menu: {
    drawer: true,
    mini: true,
  },
})

export function useUserLayout() {
  const { isLoggedIn, logout } = useUserAuth()
  const route = useRoute()
  const { toggleLoading } = useLoader()

  function toggleLeftDrawer() {
    state.value.menu.drawer = !state.value.menu.drawer
  }

  function defineTypeMenu() {
    state.value.menu.drawer = Screen.width > 768
    state.value.menu.mini = Screen.width < 1200
  }

  async function checkILoggedIn(loader: string) {
    toggleLoading(loader)
    await new Promise((resolve) => {
      const wait = setTimeout(() => {
        clearTimeout(wait)
        resolve(isLoggedIn())
      }, 400)
    })
    toggleLoading(loader)
  }

  function formattedBreadcrumbs() {
    const paths = route.path
      .split('/')
      .slice(2)
      .map((path) => {
        const indexOf = route.path.indexOf(path)
        return {
          name: path,
          to: route.path.substring(0, indexOf) + path,
        }
      })

    return paths
  }

  const namePage = computed(() => route.name?.toString())

  const breadcrumbs = computed(() => formattedBreadcrumbs())

  const typeScreen = computed(() =>
    Screen.width <= 768 ? 'mobile' : 'desktop'
  )

  return {
    state,
    namePage,
    typeScreen,
    route,
    breadcrumbs,
    toggleLeftDrawer,
    defineTypeMenu,
    checkILoggedIn,
    logout,
    isLoggedIn,
  }
}
