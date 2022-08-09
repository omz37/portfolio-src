import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from './store'
import vuetify from './plugins/vuetify'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Projects from './views/Projects'
import VAnimateCss from 'v-animate-css';

Vue.use(VAnimateCss)
Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home, name: 'home'},
    {path: '/about', component: About, name: 'about'},
    {path: '/contact', component: Contact, name: 'contact'},
    {path: '/projects', component: Projects, name: 'projects'},
  ],
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
