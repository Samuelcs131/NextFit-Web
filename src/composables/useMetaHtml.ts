import { computed } from 'vue'
import { useMeta } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

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
      title: computed(() => name && t(`common.${name}`)).value,
    }
  })

  return {
    titlePage,/*  */
  }
}
