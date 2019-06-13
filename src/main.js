import './firebase'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueFire from 'vuefire'
import DessertsView from './components/DessertsView.vue'
import Desserts from './components/Desserts.vue'
import SettingsView from './components/settingsView'
import Fastfood from './components/Fastfood.vue'
import Drinks from './components/Drinks.vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.pink.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
});

Vue.use(VueFire);
import 'vuetify/dist/vuetify.min.css'

const routes =[
  {
    path: '/dessertsView', name: 'desserts', component: DessertsView
  },
  {
    path: '/fastfood', name: 'fastfood', component: Fastfood
  },
  {
    path: '/drinks', name: 'drinks', component: Drinks
  },
  {
    path: '/desserts', name: 'dessert', component: Desserts
  },
  {
    path: '/settingsView', name: 'settings', component: SettingsView
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
