import Vue from 'vue'
import Component from 'vue-class-component'
import Beer from '../../../domain/models/Beer'

@Component({
    props: {
        beer: Object
    }
})
export default class BeerComponent extends Vue {
    public beer: Beer;

    likeBeer() {
        this.$emit('like-beer', this.beer)
    }
}
