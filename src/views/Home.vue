<template>
  <v-app
    id="home"
    style="background-color: #9ccbcb"
  >
      <nav-bar/>
      <div class="mb-10 mx-16">
        <v-row class="mt-16">
          <v-col cols="12" xl="11" lg="10" md="10" sm="12">
            <div style="font-size: 50px">Hello, I'm Omz Marlin - a Web Developer based in France</div>
          </v-col>
          <v-col cols="3" xl="1" lg="2" md="2" sm="3" class="mt-6">
            <v-row class="justify-end mr-1" v-if="!$vuetify.breakpoint.smAndDown">
              <v-btn tile dark large style="font-size: large" @click="goToPage('about')">About me</v-btn>
            </v-row>
            <v-row v-else class="ml-1">
              <v-btn tile dark large style="font-size: large" @click="goToPage('about')">About me</v-btn>
            </v-row>
          </v-col>
        </v-row>

<!--        FEATURED PROJECTS todo PROJECTS-->
        <v-row class="mt-16 mb-16">
          <v-col
              cols="12" sm="12" md="6" lg="6" xl="6"
              class="mb-5 clickable-text"
              v-for="project in projects"
              :key="project.id"
              @mouseover="project.isHovered = true"
              @mouseleave="project.isHovered = false"
          >
            <v-card elevation="8" style="background-color: black" @click="goToProject(project.id)">
              <v-img :src="project.src" :class="{ active: project.isHovered }"></v-img>
            </v-card>
            <h1 v-if="project.isHovered" style="left: 50px; bottom: 150px; position:relative; margin-bottom: -48px" class="white--text">{{project.title}}</h1>
          </v-col>
        </v-row>

        <v-row class="mb-5">
          <v-col cols="12" sm="12" md="7" lg="7" xl="7" class="mt-12">
            <h1>
              Let's work together on your next project
            </h1>
          </v-col>
          <v-col cols="5" sm="5" md="2" lg="1" xl="1" class="mr-16">
            <v-btn tile dark large style="font-size: large" class="mt-13" @click="goToPage('contact')">
              Contact
            </v-btn>
          </v-col>
          <v-col cols="3" sm="3" md="2" lg="1" xl="1" class="moving-arrow mt-15 text-left">
              <v-icon large>mdi-arrow-left</v-icon>
          </v-col>
        </v-row>
      </div>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  data() {
    return {
      projects: [
        {title: 'Area', src: 'project_area.png', isHovered: false, id: 0},
        {title: 'Pyp', src: 'project_pyp.png', isHovered: false, id: 1},
        {title: 'ChambreNoire', src: 'project_cn.png', isHovered: false, id: 2},
        {title: 'Swity', src: 'project_swity.png', isHovered: false, id: 3}
      ],
      projectCardStyle: ''
    }
  },
  components: {
    NavBar,
    Footer,
  },
  methods: {
    goToPage(page) {
      localStorage.setItem('currentPath', page)
      this.$router.push(page)
    },
    goToProject(id) {
      localStorage.setItem('currentPath', 'projects')
      this.$router.push({name: 'projects', params: {id: id}, props: {id: id}})
    }
  },
  created() {
    if (!localStorage.getItem('currentPath')) {
      localStorage.setItem('currentPath', 'home')
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

html,
body {
  font-family: 'Kanit', sans-serif;
}

#home {
  font-family: 'Kanit', sans-serif;
}

.moving-arrow {
  animation: shake;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

.clickable-text {
  cursor: pointer;
}

.active {
  background: black;
  opacity: 30% ;
}

</style>