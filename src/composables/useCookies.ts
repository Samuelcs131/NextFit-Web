import { Cookies } from 'quasar'

interface ICookieOptions {
  expires?: string | number | Date | undefined
  path?: string | undefined
  domain?: string | undefined
  sameSite?: 'Lax' | 'Strict' | 'None' | undefined
  httpOnly?: boolean | undefined
  secure?: boolean | undefined
  other?: string | undefined
}

export function useCookies() {
  function setCookie(key: string, value: string, options?: ICookieOptions) {
    Cookies.set(key, value, options)
  }

  function getCookie(key: string) {
    return Cookies.get(key)
  }

  function removeCookie(key: string) {
    Cookies.remove(key)
  }

  return { setCookie, getCookie, removeCookie }
}
