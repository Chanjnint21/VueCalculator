import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import CalHistory from './components/CalHistory.vue'

Vue.config.productionTip = false

//Global Registration
Vue.component('CalHistory', CalHistory)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
