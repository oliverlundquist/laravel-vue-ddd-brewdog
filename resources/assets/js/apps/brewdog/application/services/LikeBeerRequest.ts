import Beer from '../../domain/models/Beer'

export default class LikeBeerRequest {
    constructor(public beer: Beer) {}
}
