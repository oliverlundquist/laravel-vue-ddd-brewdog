import axios from 'axios'
import { injectable, inject } from 'inversify'
import BeersRepository from '../../domain/repositories/BeersRepository'
import Beer from '../../domain/models/Beer'
import BrewdogVuexStateProxy from '../state/BrewdogVuexStateProxy'

interface IBeerJsonApiData {
    id: number,
    name: string,
    image_url: string,
    ebc: number
}

@injectable()
export default class BeersJsonApiRepository implements BeersRepository {
    
    constructor(
        @inject(BrewdogVuexStateProxy) private vuexStateProxy: BrewdogVuexStateProxy) {}

    all(): Promise<Beer[]> {
        return axios.get('https://api.punkapi.com/v2/beers')
            .then(response => this.formatJsonApiData(response.data))
            .catch(error => { console.log(error); return []; })
    }

    update(id: number, data: Partial<Beer>): void {
        let likes = typeof data.likes === 'undefined' ? 0 : data.likes
        this.vuexStateProxy.likeBeer(id, likes)
    }

    private formatJsonApiData(beers: IBeerJsonApiData[]) {
        return beers.map(beerJsonData => {
            return new Beer(
                beerJsonData.id,
                beerJsonData.name,
                beerJsonData.image_url,
                beerJsonData.ebc
            )
        })
    } 
}
