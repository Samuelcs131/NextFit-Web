import { Container } from 'inversify'
import { IHttpClient } from 'src/adapters/contracts/IHttpClient.contract'
import { AxiosAdapter } from 'src/adapters/Axios.adapter'
import { adapters } from 'src/constants/adapters/adapters.const'

export function bindAdapters(container: Container) {
  container
    .bind<IHttpClient>(adapters.httpClientAxiosAdapter)
    .to(AxiosAdapter)
}
