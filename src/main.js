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
import VueScrollTo from 'vue-scrollto'
import VueI18n from 'vue-i18n'

Vue.use(VAnimateCss)
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VueI18n)

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home, name: 'home'},
    {path: '/about', component: About, name: 'about'},
    {path: '/contact', component: Contact, name: 'contact'},
    {path: '/projects', component: Projects, name: 'projects', props: true},
  ],
  mode: 'history'
})

const messages = {
  en: {
    message: {
      hello: 'Welcome to SalahSalah.com'
    },
    nav: {

    },
    titleText: {
      rightNavTheme: 'Theme',
      rightNavLanguage: 'Language',
    },
  },
  fr: {
    message: {
      hello: 'Bienvenue sur SalahSalah.com'
    },
    nav: {

    },
    titleText: {
      rightNavTheme: 'Thème',
      rightNavLanguage: 'Langue',
    },
  },
}

const i18n = new VueI18n({
  locale: localStorage.getItem('lang'),
  messages, // set locale messages
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
