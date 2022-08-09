<template>
  <v-app
    id="home"
    style="background-color: #9ccbcb"
  >
      <nav-bar/>
      <v-container class="mb-10">
        <v-row class=" mt-16">
          <v-col cols="10">
            <div style="font-size: 50px">Hello, I'm Jules Omar - a Web Developer based in France</div>
          </v-col>
          <v-col cols="1" class="ml-7 mt-6">
            <v-btn tile dark large style="font-size: large" @click="goToPage('about')">About me</v-btn>
          </v-col>
        </v-row>

<!--        FEATURED PROJECTS todo PROJECTS-->
        <v-row class="mt-16 mb-16">
          <v-col
              cols="10" sm="10" md="5" lg="6" xl="6"
              class="mb-5 clickable-text"
              v-for="project in projects"
              :key="project"
              @mouseover="project.isHovered = true"
              @mouseleave="project.isHovered = false"
          >
<!--            <h1 v-if="project.isHovered">{{project.title}}</h1>-->
            <v-card elevation="8" style="background-color: black">
              <v-img :src="project.src" :class="{ active: project.isHovered }"></v-img>
            </v-card>
            <h1 v-if="project.isHovered" style="left: 250px; bottom: 150px; position:relative; margin-bottom: -48px" class="white--text">{{project.title}}</h1>
          </v-col>
        </v-row>

        <v-row class="mb-5">
          <v-col cols="7" class="mt-12">
            <h1>
              Let's work together on your next project
            </h1>
          </v-col>
          <v-col cols="1" class="mr-16">
            <v-btn tile dark large style="font-size: large" class="mt-13" @click="goToPage('contact')">
              Contact
            </v-btn>
          </v-col>
          <v-col cols="1" class="moving-arrow mt-15 text-left">
              <v-icon large>mdi-arrow-left</v-icon>
          </v-col>
        </v-row>
      </v-container>
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
        {title: 'Area', src: '2.png', isHovered: false},
        {title: 'Swity', src: '3.png', isHovered: false},
        {title: 'SalahSalah', src: '4.png', isHovered: false},
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