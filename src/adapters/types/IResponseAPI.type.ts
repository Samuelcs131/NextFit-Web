export interface IReponseAPI<R> {
  data: R
  APIResponse: {
    status: number
  }
}
