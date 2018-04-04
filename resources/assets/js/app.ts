import Vue from 'vue'
import VueRouter, { RouteConfig, Location } from 'vue-router'
import BeerRoutes from './apps/brewdog/ui/web/Routes'
import BaseController from './apps/brewdog/ui/web/controllers/BaseController.vue'
import VueI18n from 'vue-i18n'
import Locales from './vue-i18n-locales.generated'
import VuexStore from './store'

Vue.use(VueRouter)
Vue.use(VueI18n)

/**************
 * Vue Router *
 **************/
const defaultRoute: Location = { path: '/beers' }
const routeList: RouteConfig[] = []
const routes: RouteConfig[] = routeList.concat(BeerRoutes)
const Router: VueRouter = new VueRouter({ routes, linkActiveClass: "active", mode: "history" })

/***********
 * VueI18n *
 ***********/
const i18n = new VueI18n({
    locale: window.laravel_config.locale,
    fallbackLocale: window.laravel_config.fallbackLocale,
    messages: Locales
})

/*******
 * Vue *
 *******/
switch (window.location.pathname) {
    case '/':
    case '/beers':
        Router.replace(defaultRoute)
        new Vue({
            el: '#app',
            store: VuexStore,
            i18n: i18n,
            router: Router,
            render: h => h(BaseController)
        })
        break;
    // case '/another-app':
    //     new Vue({
    //         el: '#app',
    //         render: h => h(AnotherAppController)
    //     })
    //     break;
}

/*******************************
 * Interfaces and Declarations *
 *******************************/
export interface CustomWindow extends Window {
    laravel_config: {
        APP_ENV: "local" | "development" | "staging" | "production"
        locale: "en"
        fallbackLocale: "en"
    }
}
declare let window: CustomWindow;
