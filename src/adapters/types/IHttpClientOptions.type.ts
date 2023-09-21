

export type IHttpClientOptions<T> = {
  authorization?: boolean
  params?: object
  headers?: object
  data?: T
}
