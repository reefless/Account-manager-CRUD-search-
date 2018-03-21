import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
import router from './router'
import Axios from 'axios'
Axios.defaults.headers.common.Accept = 'application/json'
Vue.$http = Axios
Vue.use(Vuetify)
Vue.config.productionTip = false
// Register routes
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')