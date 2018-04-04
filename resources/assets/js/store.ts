import Vue from 'vue'
import Vuex, { Module, Store } from 'vuex'
import BrewdogVuexModule, { BrewdogState } from './apps/brewdog/infrastructure/state/BrewdogVuexModule'
import { CustomWindow } from './app'

Vue.use(Vuex)

interface RootState {
    modules: { brewdog: BrewdogState }
}
declare let window: CustomWindow;

/********
 * Vuex *
 ********/
const debug = window.laravel_config.APP_ENV !== 'production'
const BrewdogModule: Module<BrewdogState, RootState> = BrewdogVuexModule
const VuexStore: Store<RootState> = new Vuex.Store({ modules: { brewdog: BrewdogModule }, strict: debug })

export default VuexStore
