import { computed } from 'vue'
import { useMeta } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { routerTitle } from 'src/constants/routes/router.const'

export function useSettingMeta() {
  const { t } = useI18n()
  const route = useRoute()

  function titlePage(title: string) {
    useMeta(() => {
      return {
        title: computed(() => title).value,
      }
    })
  }

  useMeta(() => {
    const name = route.name?.toString()
    return {
      title: computed(() => name && routerTitle[name] ? t(routerTitle[name]) : '').value ,
    }
  })

  return {
    titlePage,
  }
}
