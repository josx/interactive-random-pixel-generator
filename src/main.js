import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import materialDesignIconsIconfont from 'material-design-icons-iconfont'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(materialDesignIconsIconfont)

new Vue({
  render: h => h(App)
}).$mount('#app')
