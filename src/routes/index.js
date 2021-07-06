import  {createRouter, createWebHistory} from "vue-router"

import Home from "../views/Home"
import NotFound from "../components/NotFound"

const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    {
        path: "/",
        name: "home",
        component: Home
    },

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
 