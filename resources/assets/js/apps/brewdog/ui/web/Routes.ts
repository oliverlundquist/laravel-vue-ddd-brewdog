import { RouteConfig } from 'vue-router'
import BeersListController from './controllers/BeersListController.vue'

const routes: RouteConfig[] = [
    { path: '/beers', component: BeersListController }
]

export default routes;
