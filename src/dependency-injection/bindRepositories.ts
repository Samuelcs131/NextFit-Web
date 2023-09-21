import { Container } from 'inversify'
import { repositoriesData } from './constants/repositoriesData.const'

export function bindRepositories(container: Container) {
    for(const serviceIdentifier in repositoriesData){

      const { repository } = repositoriesData[serviceIdentifier]

      container
        .bind(serviceIdentifier)
        .to(repository)
        .inSingletonScope()
      }
}
