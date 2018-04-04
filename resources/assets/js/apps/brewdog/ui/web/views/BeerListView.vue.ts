import Vue from 'vue'
import Component from 'vue-class-component'
import Beer from '../../../domain/models/Beer'
import BeerComponent from '../components/BeerComponent.vue'

@Component({
    props: {
        beers: Array
    },
    components: {
        'beer-component': BeerComponent
    }
})
export default class BeerListView extends Vue {
    public beers: Beer[];

    likeBeer(beer: Beer) {
        this.$emit('like-beer', beer)
    }
}
