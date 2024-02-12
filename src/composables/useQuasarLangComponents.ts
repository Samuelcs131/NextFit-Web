import { useQuasar } from 'quasar'
import { t } from 'src/utils/translate/translateUtils'

export default function useQuasarLangComponents() {
  const { lang } = useQuasar()

  function setupLangComponents() {
    lang.table.allRows = t('all')
    lang.table.pagination = pagination
    lang.table.selectedRecords = selectedRecords
  }

  function pagination(start: number, end: number, total: number) {
    return `${start} - ${end} ${t('of').toLocaleLowerCase()} ${total}`
  }

  function selectedRecords(rows: number) {
    const plural = rows === 1 ? t('selectedItem') : t('selectedItems')
    return `${rows} ${plural}`
  }

  return {
    setupLangComponents,
  }
}
