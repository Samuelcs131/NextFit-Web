import { useMeta } from 'quasar'

export default function useMetaHtml () {
  function titlePage (value: string) {
    useMeta({
      title: value
    })
  }
  return {
    titlePage
  }
}
