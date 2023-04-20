import { Cookies } from 'quasar'

export function useCookies() {
  function setCookie(key: string, value: string){
    Cookies.set(key, value)
  }

  function getCookie(key: string){
    return Cookies.get(key)
  }

  function removeCookie(key: string){
    Cookies.remove(key)
  }

  return { setCookie, getCookie, removeCookie }
}
