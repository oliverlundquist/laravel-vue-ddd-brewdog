import Vue from 'vue'
import Component from 'vue-class-component'
import * as _ from 'lodash'
import { Getter, Mutation } from 'vuex-class'
import { Types } from '../../../application/providers/InversifyContainer'
import BeersRepository from '../../../domain/repositories/BeersRepository'
import Beer from '../../../domain/models/Beer'
import { Container as InversifyContainer } from 'inversify'
import BeerListView from '../views/BeerListView.vue'
import FetchBeersService from '../../../application/services/FetchBeersService'
import LikeBeerService from '../../../application/services/LikeBeerService'
import LikeBeerRequest from '../../../application/services/LikeBeerRequest'
import { IAddBeersMutation } from '../../../infrastructure/state/BrewdogVuexModule'

@Component({
    inject: {
        container: Types.Container
    },
    components: {
        'beer-list': BeerListView
    }
})
export default class BeersListController extends Vue {
    private container: InversifyContainer;
    private beersRepository: BeersRepository;
    private fetchBeersService: FetchBeersService;
    private likeBeerService: LikeBeerService;
    @Getter beers: Beer[];
    @Mutation addBeers: IAddBeersMutation;

    async getBeers() {
        let beers = await this.fetchBeersService.execute()
        this.addBeers(beers)
    }

    likeBeer(beer: Beer): void {
        let request = new LikeBeerRequest(beer)
        this.likeBeerService.execute(request)
    }

    created() {
        this.fetchBeersService = this.container.resolve<FetchBeersService>(FetchBeersService)
        this.likeBeerService = this.container.resolve<LikeBeerService>(LikeBeerService)
        this.getBeers()
    }
}
