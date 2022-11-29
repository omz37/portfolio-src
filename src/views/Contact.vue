<template>
  <v-container id="contact" style="background-color: black; width: 100%; height: 100%">
    <NavBar/>
    <v-row class="justify-center mt-10 mb-16">
      <v-col cols="8">
        <v-card style="background-color: black">
          <v-row class="justify-start">
            <h1 style="color: #00c2cb" class="mt-7"> Contact </h1>
          </v-row>
          <v-row class="mt-16 justify-start">
            <div class="white--text" style="font-size: 20px">I am open to discussing any projects you have in mind. Feel free to reach out to me either via email at <a href="mailto:omarmarlin@gmail.com" class="white--text">omarmarlin@gmail.com
            </a>or connect with me on LinkedIn! <br>
            </div>
            <div  class="white--text mt-3" style="font-size: 20px">
              Alternatively, if you have a project in mind, you may propose it on my Malt account.
            </div>
          </v-row>
          <v-row class="mt-16 mb-4" v-if="!$vuetify.breakpoint.smAndDown">
            <v-col cols="1" class="mr-2">
              <v-btn href="https://www.linkedin.com/in/jules-omar-marlin/" target="_blank" style="background-color: #00c2cb">
                <v-icon>
                  mdi-linkedin
                </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1" class="mx-2">
              <v-btn href="mailto:omarmarlin@gmail.com" style="background-color: #00c2cb">
                <v-icon>
                  mdi-gmail
                </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1" class="mx-2">
              <v-btn href="https://www.malt.fr/profile/julesomarmarlin1" target="_blank" style="background-color: #00c2cb">
                <v-icon>
                  mdi-alpha-m-box
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="mt-16 mb-4" v-if="$vuetify.breakpoint.smAndDown">
            <v-col cols="4">
              <v-btn href="https://www.linkedin.com/in/jules-omar-marlin/" target="_blank" style="background-color: #00c2cb">
                <v-icon>
                  mdi-linkedin
                </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn href="mailto:omarmarlin@gmail.com" style="background-color: #00c2cb">
                <v-icon>
                  mdi-gmail
                </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn href="https://www.malt.fr/profile/julesomarmarlin1" target="_blank" style="background-color: #00c2cb">
                <v-icon>
                  mdi-alpha-m-box
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="mt-13">
            <v-img src="contact.jpg"/>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <Footer/>
  </v-container>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "@/components/Footer";

export default {
  name: "Contact",
  data() {
    return {
      isUserIn: false,
    }
  },
  components: {
    NavBar,
    Footer,
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

html, pre,
body {
  font-family: 'Kanit', sans-serif;
}

#contact {
  font-family: 'Kanit', sans-serif;
}
</style>