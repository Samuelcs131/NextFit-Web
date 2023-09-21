import { Container } from 'inversify'
import 'reflect-metadata'
import { bindAdapters } from './bindAdapters'
import { bindRepositories } from './bindRepositories'
import { bindUseCases } from './bindUsecases'

const container = new Container()

bindAdapters(container)
bindRepositories(container)
bindUseCases(container)

export default container
