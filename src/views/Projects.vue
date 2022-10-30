<template>
  <v-container id="project">
    <NavBar/>
    <div class="mt-6 mb-16 justify-center text-center" v-for="project in projects" :key="project.id">
      <div v-if="$route.params.id === project.id">
        <v-row class="justify-center text-h1">{{project.title}}</v-row>
        <v-row class="justify-center text-center mt-6">
          <v-col cols="12">
            <v-card style="background-color: black">
              <v-row>
                <v-col cols="12" xl="1" lg="1" md="2" sm="12" align-self="center">
                  <v-btn @click="project.counter > 0 ? project.counter -= 1 : ''" dark>
                    <v-icon>mdi-arrow-left</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" xl="10" lg="10" md="8" sm="12">
                  <v-img :src="project.photos[project.counter]"/>
                </v-col>
                <v-col cols="12" xl="1" lg="1" md="2" sm="12" align-self="center">
                  <v-btn @click="project.counter < project.photos.length - 1 ? project.counter += 1 : ''" dark>
                    <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

        </v-row>

        <v-row class="text-md-h3 justify-center mt-16">What was the project goal ?</v-row>
        <v-row class="justify-center">{{project.goal}}</v-row>
        <v-row class="text-md-h3 justify-center">Technologies used</v-row>
        <v-row class="justify-center">{{project.techno}}</v-row>
      </div>
      <div v-else-if="!$route.params.id && randProject === project.id">
        <v-row class="justify-center text-h1">{{project.title}}</v-row>
        <v-row class="justify-center text-center mt-6">
          <v-col cols="12">
            <v-card style="background-color: black">
              <v-row>
                <v-col cols="12" xl="1" lg="1" md="2" sm="12" align-self="center">
                  <v-btn @click="project.counter > 0 ? project.counter -= 1 : ''" dark>
                    <v-icon>mdi-arrow-left</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" xl="10" lg="10" md="8" sm="12">
                  <v-img :src="project.photos[project.counter]"/>
                </v-col>
                <v-col cols="12" xl="1" lg="1" md="2" sm="12" align-self="center">
                  <v-btn @click="project.counter < project.photos.length - 1 ? project.counter += 1 : ''" dark>
                    <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

        </v-row>

        <v-row class="text-md-h3 justify-center mt-16">What was the project goal ?</v-row>
        <v-row class="justify-center">{{project.goal}}</v-row>
        <v-row class="text-md-h3 justify-center">Technologies used</v-row>
        <v-row class="justify-center">{{project.techno}}</v-row>
      </div>
    </div>
    <Footer/>
  </v-container>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "@/components/Footer";

export default {
  name: "Projects",
  data() {
    return {
      randProject: 0,
      projects: [
        {
          title: 'Area',
          id: 0,
          goal: 'Web app made for a university project, the goal was to create an interface that lets a logged user activate a reaction for a certain action, ' +
              'for example you want to receive a mail when someone message you on Discord or you want to create a Discord channel on a certain date or' +
              'even create a Notion page depending on the weather. I had the task of doing the whole Front-End and the graphical chart of the Web Application.',

          techno: 'VueJs/Vuetify for the Front-End and NestJs for the Back-End. I also had to link multiple APIs to retrieve information and link the actions: ' +
              'Gmail, AccuWeather, Discord, Notion and Google Calendar',
          photos: ['project_area.png', 'project_area2.png'],
          counter: 0
        },
        {
          title: 'Pyp',
          id: 1,
          goal: '(Project containing confidential data, which explains the lack of photos), Pyp is one of the many projects I worked on during my Internship' +
              'and my freelance job  as a Front-End developer for the Biting Bit GMBH company, the projects included a web app for Deutsch Telekom and for multiple' +
              'lawyers' + ', my goal on these projects was mainly translating complex tasks given by my Project Manager and graphical sketches made by the UI/UX designer' +
              ' into functional and user friendly Front-End.',
          techno: 'VueJs, TypeScript and Quasar framework.',
          photos: ['project_pyp.png'],
          counter: 0},
        {
          title: 'Chambre Noire',
          id: 2,
          goal: 'Chambre Noire is a cinema content website, my client wanted an application where he could publish multiple articles and critics about various movies' +
              'while keeping a classic cinema theme and an easy to use interface.',
          techno: 'VueJs and Vuetify',
          photos: ['project_cn.png', 'project_cn2.png', 'project_cn3.png'],
          counter: 0},
        {
          title: 'Swity',
          id: 3, goal: 'Swity is a work-in-progress mobile application I am currently working on with colleagues from University, its a part of the Epitech Innovative Projects' +
              'the goal of this app is to help young people suffering from Diabetes to manage and handle easily their disease and live a normal life. The launch is expected for 2023.',
          techno: 'VueJs and NestJs, Google Api',
          photos: ['project_swity.png'],
          counter: 0
        }
      ]
    }
  },
  components: {
    NavBar,
    Footer,
  },
  created() {
    this.randProject = Math.floor(Math.random() * 3)
  },
  methods: {
    // changePhoto(operator) {
    //   if (operator === '+' && this.projects.counter < this.projects.photos.length) {
    //     this.projects.counter += 1;
    //   }
    // }

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

html,
body {
  font-family: 'Kanit', sans-serif;
}

#project {
  font-family: 'Kanit', sans-serif;
}
</style>