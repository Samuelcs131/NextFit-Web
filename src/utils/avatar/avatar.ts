import { avatars} from './avatars.const'

export function getAvatar(avatar: number) {
  const filter = avatars.find( avt => avt.id === avatar) || avatars[0]
  return filter
}

getAvatar(0)

export function getAllAvatar() {
  return ''
}
