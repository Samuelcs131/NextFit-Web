import { QTableColumn } from 'quasar'
import {
  dateLocaleToString,
  timeHumanized,
} from 'src/utils/date/dateUtils.util'
import { t } from 'src/utils/translate/translateUtils'

export const activityColumns: QTableColumn[] = [
  {
    field: 'exercise',
    label: t('exercise'),
    name: 'exercise',
    sortable: true,
    align: 'left',
    format: (exercise) => t(exercise.name),
  },
  {
    field: 'date',
    label: t('date'),
    name: 'date',
    sortable: true,
    align: 'left',
    format: (date) =>
      dateLocaleToString(date, { dateStyle: 'full', timeStyle: 'medium' }),
  },
  {
    field: 'series',
    label: t('series'),
    name: 'series',
    sortable: true,
    align: 'left',
  },
  {
    field: 'repetitions',
    label: t('repetitions'),
    name: 'repetitions',
    sortable: true,
    align: 'left',
  },
  {
    field: 'weight',
    label:  t('weight'),
    name: 'weight',
    sortable: true,
    align: 'left',
    format: (weight) => `${weight} kg`,
  },
  {
    field: 'interval',
    label: t('interval'),
    name: 'interval',
    sortable: true,
    align: 'left',
    format: (interval) => timeHumanized(interval),
  },
]
