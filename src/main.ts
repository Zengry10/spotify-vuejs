import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'



library.add(fas)
createApp(App)
.component('fa', FontAwesomeIcon)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

