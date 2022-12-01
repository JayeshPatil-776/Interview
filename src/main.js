import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import vuetify from './plugins/vuetify'
import vuetifyToast from 'vuetify-toast'
import Toasted from 'vue-toasted'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(Toasted, {
  duration: 5000,
  position: 'top-center'
})

new Vue({
  router,
  store,
  vuetify,
  vuetifyToast,
  render: h => h(App)
}).$mount('#app')
