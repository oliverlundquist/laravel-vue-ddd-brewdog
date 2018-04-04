import 'reflect-metadata'
import { Container as InversifyContainer } from 'inversify'
import BeersRepository from '../../domain/repositories/BeersRepository'
import BeersJsonApiRepository from '../../infrastructure/repositories/BeersJsonApiRepository'
import BrewdogVuexStateProxy from '../../infrastructure/state/BrewdogVuexStateProxy'

const Container = new InversifyContainer();

const Types = {
    Container: Symbol.for('Container'),
    BeersRepository: Symbol.for('Domain/Repositories/BeersRepository')
};

Container.bind<BeersRepository>(Types.BeersRepository).to(BeersJsonApiRepository)
Container.bind(BrewdogVuexStateProxy).toSelf();

export { Container, Types }
