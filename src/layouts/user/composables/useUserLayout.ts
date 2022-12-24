import { useI18n } from 'src/boot/i18n'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

interface IState {
  toolbarTitle: string | null
}

const userLayoutState = ref<IState>({
  toolbarTitle: null
})

export default function useUserLayout () {
  const router = useRoute()
  const currentPath = router.path.split('/')[2]
  const { t } = useI18n()

  function handleToolbarTitle (page: string) {
    switch (page) {
      case 'settings':
        userLayoutState.value.toolbarTitle = t('ui.settings')
        break
      case 'profile':
        userLayoutState.value.toolbarTitle = t('ui.profile')
        break
      case 'dashboard':
        userLayoutState.value.toolbarTitle = t('ui.dashboard')
        break
      case 'activities':
        userLayoutState.value.toolbarTitle = t('ui.activities')
        break
      default:
        break
    }
  }

  handleToolbarTitle(currentPath)

  return {
    userLayoutState,
    currentPath
  }
}
