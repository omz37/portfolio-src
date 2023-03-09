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
  EN: {
    message: {
      hello: 'Hello, I\'m Omz Marlin - a Freelance Web Developer based in France',
      work: 'Let\'s work together on your next project',
      bio1: 'I’m Jules Omar, a web developer/creator on a mission to translate complex projects into beautiful, practical and responsive websites.',
      bio2:'I’ve been fortunate enough to be exposed to a wide range of projects in the past. From independent websites to apps and more complex features for enterprise software solutions.',
      bio3:'Though I have worked in-person for most of my projects, I am choosing to work remotely temporarily as I\'m currently on a mobility programme in Kuala Lumpur under University of Kuala Lumpur (UniKL) for my postgraduate studies in Software Engineering.',
      bio4:'I believe that website creation is the perfect intersection of logical analysis and creativity. While through analysis is where there\'s room for innovating and providing solutions, the creative aspect of website development is where we can work together to accurately execute your vision of the project.',
      bio5:'I am constantly looking to upskill myself outside of class hours. Hence, I am taking a Coursera course in project management that\'s certified by Google. This course complements my degree in Software Engineering by equipping me with relevant skills such as team management, communication and planning.',
      bio6:'Let\'s get in touch !',
      contact1: 'I am open to discussing any projects you have in mind. Feel free to reach out to me either via email at',
      contact2: 'or connect with me on LinkedIn! ',
      contact3: 'Alternatively, if you have a project in mind, you may propose it on my Malt account.'
    },
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    titleText: {
      rightNavTheme: 'Theme',
      rightNavLanguage: 'Language',
    },
    button: {
      about: 'About me',
      cv: 'My C.V',
      chat: 'Let\'s chat !',
    },
    project: {
      goal: 'What was the project goal ?',
      techno: 'Technologies used',
      area: {
        goals: 'Area is a web app made for a university project. The objective of the project was to create an interface that allows a logged user to activate a reaction for a certain action. These examples can include being notified by email when you receive a message on Discord or creating a Discord channel on a certain date or even create a Notion page depending on the weather. I was responsible for the whole Front-End and the graphical chart of the Web Application.',
        technos: 'VueJs/Vuetify for the Front-End and NestJs for the Back-End. I also had to link multiple APIs to retrieve information and link the actions: Gmail, AccuWeather, Discord, Notion and Google Calendar'
      },
      pyp: {
        goals: '(Project containing confidential data, which explains the lack of photos), Pyp is one of the many projects I worked on during my Internship and my freelance job as a Front-End developer for the Biting Bit GMBH company, the projects included a web app for Deutsch Telekom and for multiplelawyers, my goal on these projects was mainly translating complex tasks given by my Project Manager and graphical sketches made by the UI/UX designer into functional and user friendly Front-End.',
        technos: 'VueJs, TypeScript and Quasar framework.',
      },
      cn: {
        goals: 'Chambre Noire is a cinema content website, my client wanted an application where he could publish multiple articles and critics about various movies while keeping a classic cinema theme and an easy to use interface.',
        technos: 'VueJs and Vuetify'
      },
      swity: {
        goals: 'Swity is a work-in-progress mobile application I am currently working on with colleagues from University, its part of the Epitech Innovative Projects. The goal of this app is to help young people suffering from Diabetes to manage and handle easily their disease and live a normal life. The launch is expected for 2024.',
        technos: 'Android Studio with Java Kotlin'
      },
    }
  },
  FR: {
    message: {
      hello: 'Bonjour, je suis Omz Marlin - un développeur Web Freelance basé en France',
      work: 'Travaillons ensemble sur votre prochain projet !',
      bio1 : 'Je suis Jules Omar, un développeur/créateur web dont la mission est de traduire des projets complexes en sites web plaisant à regarder, pratiques et réactifs',
      bio2 : 'J\'ai eu la chance d\'être exposé à un large éventail de projets dans le passé, allant de sites web indépendants à des applications et des fonctionnalités plus complexes pour des solutions logicielles d\'entreprise. Des sites web indépendants aux applications et fonctionnalités plus complexes pour des solutions logicielles d\'entreprise.',
      bio3 : 'Bien que j\'aie travaillé en présentiel pendant la plupart de mes projets, j\'ai choisi de travailler temporairement à distance car je participe actuellement à un programme de mobilité à Kuala Lumpur dans le cadre de l\'Université de Kuala Lumpur (UniKL) pour mes études de 4ème année en ingénierie logicielle',
      bio4 : 'Je pense que la création de sites web est l\'intersection parfaite entre l\'analyse logique et la créativité. Alors que l\'analyse logique permet d\'innover et d\'apporter des solutions, l\'aspect créatif du développement d\'un site web nous permet de travailler ensemble pour exécuter avec précision la vision que vous avez du projet',
      bio5 : 'Je cherche constamment à me perfectionner en dehors des heures de cours. C\'est pourquoi je suis un cours Coursera sur la gestion de projet qui est certifié par Google. Ce cours complète mon diplôme en ingénierie logiciel en m\'apportant des compétences pertinentes telles que la gestion d\'équipe, la communication et la planification',
      bio6 : 'N\'hésitez pas à me contacter !',
      contact1: 'Je suis ouvert pour discuter de tout projet que vous avez en tête. N\'hésitez pas à me contacter par e-mail à l\'adresse suivante :',
      contact2: 'ou à me contacter sur LinkedIn !',
      contact3: 'Sinon, si vous avez un projet déjà construit, vous pouvez le proposer directement sur mon compte Malt.'
    },
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      about: 'A propos',
      contact: 'Contact',
    },
    titleText: {
      rightNavTheme: 'Thème',
      rightNavLanguage: 'Langue',
    },
    button: {
      about: 'En savoir plus',
      cv: 'Mon C.V',
      chat: 'Me contacter',
    },
    project : {
      goal : 'Quel était l\'objectif du projet ?',
      techno : 'Technologies utilisées',
      area : {
        goals : 'Area est une application Web créée pour un projet universitaire. L\'objectif du projet était de créer une interface permettant à un utilisateur connecté d\'activer une réaction pour une certaine action. Ces exemples peuvent inclure être notifié par email lorsque vous recevez un message sur Discord ou créer un canal Discord à une certaine date ou même créer une page Notion en fonction de la météo. J\'étais responsable de l\'ensemble du Front-End et de la charte graphique de l\'application Web.',
        technos : 'VueJs/Vuetify pour le Front-End et NestJs pour le Back-End. J\'ai également dû lier plusieurs API pour récupérer des informations et lier les actions : Gmail, AccuWeather, Discord, Notion et Google Calendar.'
      },
      pyp : {
        goals : "(Projet contenant des données confidentielles, ce qui explique le manque de photos), Pyp est l'un des nombreux projets sur lesquels j'ai travaillé lors de mon stage et de mon travail en freelance en tant que développeur Front-End pour l'entreprise Biting Bit GMBH. Les projets comprenaient une application Web pour Deutsch Telekom et pour plusieurs avocats. Mon objectif sur ces projets était principalement de traduire des tâches complexes données par mon chef de projet et des esquisses graphiques faites par le designer UI/UX en Front-End fonctionnel et convivial pour l'utilisateur.",
        technos : 'VueJs, TypeScript et Quasar framework.'
      },
      cn : {
        goals : 'Chambre Noire est un site Web de contenu cinématographique, mon client voulait une application où il pourrait publier plusieurs articles et critiques sur divers films tout en conservant un thème cinéma classique et une interface facile à utiliser.',
        technos : 'VueJs et Vuetify'
      },
      swity : {
        goals : 'Swity est une application mobile en cours de développement sur laquelle je travaille actuellement avec des collègues de l\'université, elle fait partie des projets innovants d\'Epitech. Le but de cette application est d\'aider les jeunes atteints de diabète à gérer facilement leur maladie et à vivre une vie normale. Le lancement est prévu pour 2024.',
        technos : 'Android Studio avec Java Kotlin.'
      },
}
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
