import { ILoader } from 'src/types/ui/Iloader.type'
import { ref } from 'vue'

const loaders = ref({} as ILoader)

export default function useLoader() {
  function toggleLoading(loaderId: string) {
    loaders.value[loaderId] = !loaders.value[loaderId]
  }

  function loaderStatus(loaderId: string) {
    return loaders.value[loaderId]
  }

  return {
    loaderStatus,
    toggleLoading
  }
}
