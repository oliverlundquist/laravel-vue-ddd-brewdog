import { inject, injectable } from "inversify";
import { Container, Types } from '../providers/InversifyContainer'
import Beer from '../../domain/models/Beer'
import BeersRepository from '../../domain/repositories/BeersRepository'

@injectable()
export default class FetchBeersService {
    
    constructor(
        @inject(Types.BeersRepository) private beersRepository: BeersRepository) {}

    execute(): Promise<Beer[]> {
        return this.beersRepository.all()
    }
}
