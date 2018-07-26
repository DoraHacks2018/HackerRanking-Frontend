import Vue from 'vue'
import Vuebar from 'vuebar'
import axios from 'axios'
import VueSocketio from 'vue-socket.io'

// import VueAuthenticate from 'vue-authenticate'
import { CookieStorage } from 'cookie-storage'
import App from './App'
import router from './router'
// import './style.styl'
import web3 from './web3'
import './css/init.css'
import './css/public.css'
import './css/style.css'
import './css/theme.css'
import './lib/font-awesome/css/font-awesome.min.css'
import './utils/jquery-1.11.3.min'
import './utils/divscroll'
import './utils/hackers'


// Vue.use(VueSocketio, 'https://ranking.dorahacks.com/talk/websocket/user_refresh')
// Vue.use(VueSocketio, 'http://47.254.41.35:5200/websocket/user_refresh')

window.cookieStorage = new CookieStorage()
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Vuebar)
Vue.use(web3)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

