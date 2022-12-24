import auth from './authEndpoints.const'
import user from './userEndpoints.const'

export const endpoint = {
  auth: { ...auth },
  user: { ...user }
}
