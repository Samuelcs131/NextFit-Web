import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'


export default function useQuasarLangComponents() {
  const { lang } = useQuasar()
  const { t } = useI18n()

  function setupLangComponents() {
    lang.table.allRows = 'Todos'
    lang.table.noData = t('colors.orange')
    lang.table.noResults =  t('colors.orange')
    lang.table.pagination = pagination
    lang.table.selectedRecords = selectedRecords
    lang.table.recordsPerPage = 'ui.RecordsPerPage'
    lang.table.loading = 'ui.Loading'

    lang.tree.noResults = 'ui.NoResults'
  }

  function pagination(start: number, end: number, total: number) {
    return `${start} - ${end} ${'ui.Of'} ${total}`
  }

  function selectedRecords(rows: number) {
    const plural = rows === 1 ? 'ui.SelectedItem' : 'ui.SelectedItems'
    return `${rows} ${plural}`
  }

  return {
    setupLangComponents,
  }
}
