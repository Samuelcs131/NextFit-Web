import { date as QuasarDate } from 'quasar'
import { useLocalStorage } from 'src/composables/useLocalStorage'
import { t } from '../translate/translateUtils'

/**
 * Converte uma data para o formato de data brasileiro com horas, minutos e segundos ("DD/MM/YYYY HH:mm:ss").
 * @param isoDate - A data em formato ISO a ser convertida.
 * @returns A data convertida para o formato brasileiro com horas, minutos e segundos.
 * @example
 * isoDateToBRDate("2022-04-19T10:30:00.000Z"); // '19/04/2022 07:30:00'
 */

export function dateLocaleToString(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions
) {
  const { storage } = useLocalStorage()
  const dateFormet = new Date(date)

  return Intl.DateTimeFormat(storage.value.language, options).format(dateFormet)
}

export function dateToFormatDefault(date: string | number | Date) {
  return QuasarDate.formatDate(date, 'DD/MM/YYYY HH:MM')
}

export function dateDefaultToISODate(date: string) {
  const [dateVal, timeVal] = date.split(' ')

  const [day, month, year] = dateVal.split('/')
  const [hours, minutes] = timeVal.split(':')

  const adjustedDate = new Date(`${year}-${month}-${day} ${hours}:${minutes}`)

  return adjustedDate.toISOString()
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


