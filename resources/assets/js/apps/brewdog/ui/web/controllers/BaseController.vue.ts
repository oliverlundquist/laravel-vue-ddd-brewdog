import Vue from 'vue'
import Component from 'vue-class-component'
import { Container, Types } from '../../../application/providers/InversifyContainer'

@Component({
    provide: {
        [Types.Container]: Container
    }
})
export default class BaseController extends Vue {
    //
}
