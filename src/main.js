import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentDots, faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@/assets/style/scss/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


library.add(faCommentDots)
library.add(faFile)

createApp(App)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
    
    
