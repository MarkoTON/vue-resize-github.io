import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResize from 'vue-resize'
import 'vue-resize/dist/vue-resize.css'

Vue.use(VueResize)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
