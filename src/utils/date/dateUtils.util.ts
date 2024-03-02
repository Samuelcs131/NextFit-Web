import { date as QuasarDate } from 'quasar'
import { useLocalStorage } from 'src/composables/useLocalStorage'
import { t } from '../translate/translateUtils'

interface IDateToFormatDefaultOptions {
  notHour: boolean
}

export function dateLocaleToString(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions
) {
  const { storage } = useLocalStorage()
  const dateFormet = new Date(date)

  return Intl.DateTimeFormat(storage.value.language, options).format(dateFormet)
}

export function dateToFormatDefault(date: string | number | Date, options?: IDateToFormatDefaultOptions) {
  return QuasarDate.formatDate(date, `DD/MM/YYYY ${options?.notHour ? '' : 'HH:MM' }`)
}

export function dateDefaultToISODate(
  date: string,
  options?: { resetHour: boolean }
) {
  const [dateVal, timeVal] = date.split(' ')

  const [day, month, year] = dateVal.split('/')

  if (options?.resetHour)
    return new Date(`${year}-${month}-${day} ${0}:${0}`).toISOString()

  const [hours, minutes] = timeVal.split(':')

  return new Date(`${year}-${month}-${day} ${hours}:${minutes}`).toISOString()
}

export function timeHumanized(seconds: number): string {
  const tLowerCase = (key: string) => t(key).toLowerCase()

  if (seconds < 0) return '-'

  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  const timeParts: string[] = []

  if (hours > 0)
    timeParts.push(
      `${hours} ${hours === 1 ? tLowerCase('hour') : tLowerCase('hours')}`
    )

  if (minutes > 0)
    timeParts.push(
      `${minutes} ${
        minutes === 1 ? tLowerCase('minute') : tLowerCase('minutes')
      }`
    )

  if (remainingSeconds > 0)
    timeParts.push(
      `${remainingSeconds} ${
        remainingSeconds === 1 ? tLowerCase('second') : tLowerCase('seconds')
      }`
    )

  if (timeParts.length === 0) return `0 ${tLowerCase('seconds')}`

  return timeParts.join(` ${tLowerCase('and')} `)
}

export function getFirstAndLastDayOfMonth() {
  const today = new Date()
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)

  return { firstDay, lastDay }
}
