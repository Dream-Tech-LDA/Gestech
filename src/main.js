import { createApp } from 'vue'
import App from './App.vue'

import {store} from "./store"
import {router} from "./routes"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import "./assets/css/root.css"
library.add(faBars, faTwitter)
const app = createApp(App)
app.use(store)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


