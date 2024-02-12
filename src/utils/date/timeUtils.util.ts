export function formatSeconds(segundos: number) {
  const minutos = Math.floor(segundos / 60)
    .toString()
    .padStart(2, '0')
  const segundosRestantes = (segundos % 60).toString().padStart(2, '0')

  return `${minutos}:${segundosRestantes}`
}

export function abbreviatedTime(seconds: number, option: 'minutes' | 'hours') {
  if (option === 'minutes') {
    const minutes = Math.floor(seconds / 60)
    return `${minutes}m`
  } else if (option === 'hours') {
    const hours = Math.floor(seconds / 3600)
    return `${hours}h`
  }
}
