import { Payload } from 'vuex'
import Beer from '../../domain/models/Beer'
import * as _ from 'lodash'

export interface BrewdogState { beers: Beer[] }
export interface IAddBeersMutation { (beers: IAddBeersMutationPayload): void }
interface IAddBeersMutationPayload extends Array<Beer> { [index: number]: Beer }
interface ILikeBeerMutationPayload extends Payload { id: number, likes: number; }

// initial state
const state: BrewdogState = {
    beers: []
}

// getters
const getters = {
    beers(): Beer[] { return state.beers }
}

// actions
const actions = {}

// mutations
const mutations = {
    addBeers(state: BrewdogState, beers: IAddBeersMutationPayload): void {
        beers.forEach(beer => {
            getters.beers().push(beer)
        })
    },
    likeBeer(state: BrewdogState, payload: ILikeBeerMutationPayload): void {
        const index = _.findIndex(getters.beers(), ['id', payload.id])
        state.beers[index].likes = payload.likes
    }
}

const module = {
    state,
    mutations,
    actions,
    getters,
}

export default module
