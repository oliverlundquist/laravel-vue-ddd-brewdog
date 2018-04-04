import VuexStore from '../../../../store'
import { injectable } from 'inversify'

@injectable()
export default class BrewdogVuexStateProxy {
    likeBeer(id: number, likes: number) {
        VuexStore.commit('likeBeer', { id: id, likes: likes })
    }
}
