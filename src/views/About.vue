<template>
  <v-container id="about">
    <NavBar/>
    <v-row class="justify-center mt-16">
      <v-col cols="12" sm="12" md="5" lg="5" xl="5" class="">
        <v-row class="justify-center">
          <v-col cols="8" style="background-color: #9ccbcb">
            <v-img src="omz_pp.jpeg" class="rounded-circle" style="border: 3px solid black"/>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="11" sm="11" md="7" lg="7" xl="7">
        <h1>
          Hello !
        </h1>
        <div class="mt-5" style="font-size: large">
          <div class="mb-4">
            I’m Jules Omar, a web developer/creator on a mission to translate complex projects into beautiful and responsive websites. <br>
          </div>
          <div class="mb-4">
            I’ve been lucky enough to work on a wide range of projects in the past, from independent websites and apps, to more complex features for enterprise software solutions. <br>
          </div>
          <div class="mb-4">
            I have worked in-person for almost all my projects, however having to move a lot during my studies and internships I have decided to work fully remote for now ! <br>
          </div>
          <div class="mb-4">
            I believe that website creation is at the perfect intersection of logical analysis and creativity - while there is so much room for creating and giving solutions, rest assured that I will do everything to match exactly the vision you have of you project.<br>
          </div>
          <div class="mb-4">
            These days, I am currently studying at the University of Kuala Lumpur to improve my skills in UX/UI, project management and business planning. <br>

            Outside of programming, I’m a big fan of history, science and martial arts. If you’d like to work together, I’d love to hear from you ! <br>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-5">
      <v-col cols="3" sm="4" md="7" lg="1" xl="1">
        <v-btn tile dark large style="font-size: large" class="mt-13">
          <a href="cv-marlin-english.pdf" target="_blank" style="font-size: large; text-decoration: none; color: white">My C.V</a>
          <v-icon class="ml-3">
            mdi-download
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="3" sm="4" md="7" lg="1" xl="1" class="mr-16">
        <v-btn tile dark large style="font-size: large" class="mt-13" @click="goToContact">
          Let's chat
        </v-btn>
      </v-col>
      <v-col cols="1" class="moving-arrow mt-15 text-left">
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
