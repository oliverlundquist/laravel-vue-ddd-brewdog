import { inject, injectable } from "inversify";
import { Container, Types } from '../providers/InversifyContainer'
import LikeBeerRequest from './LikeBeerRequest'
import BeersRepository from '../../domain/repositories/BeersRepository'

@injectable()
export default class LikeBeerService {

    constructor(
        @inject(Types.BeersRepository) private beersRepository: BeersRepository) { }

    execute(request: LikeBeerRequest) {
        let likes = request.beer.likes + 1
        this.beersRepository.update(request.beer.id, { likes: likes })
    }
}
