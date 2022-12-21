<template>
  <v-container id="about">
    <NavBar/>
    <v-row class="justify-center mt-16">
      <v-col cols="12" sm="12" md="5" lg="5" xl="5">
        <v-row class="justify-center">
          <v-col cols="8" style="background-color: #9ccbcb">
            <v-card class="rounded-circle" elevation="5">
              <v-img src="omz_pp.jpeg" class="rounded-circle" style="border: 1px solid black"/>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="11" sm="11" md="7" lg="7" xl="7">
        <h1>
          Hello !
        </h1>
        <div class="mt-5" style="font-size: large">
          <div class="mb-4">
            I’m Jules Omar, a web developer/creator on a mission to translate complex projects into beautiful, practical and responsive websites. <br>
          </div>
          <div class="mb-4">
            I’ve been fortunate enough to be exposed to a wide range of projects in the past. From independent websites to apps and more complex features for enterprise software solutions. <br>
          </div>
          <div class="mb-4">
            Though I have worked in-person for most of my projects, I am choosing to work remotely temporarily as I'm currently on a mobility programme in Kuala Lumpur under University of Kuala Lumpur (UniKL) for my postgraduate studies in Software Engineering. <br>
          </div>
          <div class="mb-4">
            I believe that website creation is the perfect intersection of logical analysis and creativity. While through analysis is where there's room for innovating and providing solutions, the creative aspect of website development is where we can work together to accurately execute the vision of the project.<br>
          </div>
          <div class="mb-4">
            I am constantly looking to upskill myself outside of class hours. Hence, I am taking a Coursera course in project management that's certified by Google. This course complements my degree in Software Engineering by equipping me with relevant skills such as team management, communication and planning. <br>
          </div>
          <div>
            Let's get in touch ! <br>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="!$vuetify.breakpoint.smAndDown" class="mt-3 mb-16">
      <v-col cols="5"></v-col>
      <v-col cols="6" sm="4" md="3" lg="2" xl="2">
        <v-btn tile dark large style="font-size: large">
          <a href="cv-marlin-english.pdf" target="_blank" style="font-size: large; text-decoration: none; color: white">My C.V</a>
        </v-btn>
      </v-col>
      <v-col cols="6" sm="4" md="3" lg="2" xl="2">
        <v-btn tile dark large style="font-size: large" @click="goToContact">
          Let's chat
        </v-btn>
      </v-col>
      <v-col cols="1" class="moving-arrow mt-2">
        <v-icon large>mdi-arrow-left</v-icon>
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.smAndDown" class="mb-16 ml-3">
      <v-col cols="7" sm="4" md="7" lg="2" xl="2">
        <v-btn tile dark large style="font-size: large" class="mt-13">
          <a href="cv-marlin-english.pdf" target="_blank" style="font-size: large; text-decoration: none; color: white">My C.V</a>
        </v-btn>
      </v-col>
      <v-col cols="6" sm="4" md="7" lg="2" xl="2">
        <v-btn tile dark large style="font-size: large" class="mt-13" @click="goToContact">
          Let's chat
        </v-btn>
      </v-col>
      <v-col cols="1" class="moving-arrow mt-15">
        <v-icon large>mdi-arrow-left</v-icon>
      </v-col>
    </v-row>
    <Footer/>
  </v-container>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "@/components/Footer";

export default {
  name: "About",
  data() {
    return {
      isUserIn: false,
    }
  },
  components: {
    NavBar,
    Footer,
  },
  methods: {
    goToContact() {
      localStorage.setItem('currentPath', 'contact')
      this.$router.push('contact')
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

html,
body {
  font-family: 'Kanit', sans-serif;
}

#about {
  font-family: 'Kanit', sans-serif;
}

.moving-arrow {
  animation: shake;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
</style>
