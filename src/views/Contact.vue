<template>
  <v-container id="contact" style="background-color: black; width: 100%; height: 100%">
    <NavBar/>
    <v-row class="justify-center mt-10">
      <v-col cols="8">
        <v-card style="background-color: black">
          <v-row class="justify-start">
            <h1 style="color: #00c2cb" class="mt-7"> Contact </h1>
          </v-row>
          <v-row class="mt-16 justify-start">
            <pre class="white--text" style="font-size: 20px">If you have a problem to solve or a project you need help building, please contact me either <br>on my email: <a href="mailto:omarmarlin@gmail.com" class="white--text">omarmarlin@gmail.com </a>or on my LinkedIn and Malt accounts !</pre>
          </v-row>
          <v-row class="justify-center mt-16">
            <v-col cols="1" class="mr-3">
              <v-btn href="https://www.linkedin.com/in/jules-omar-marlin/" style="background-color: #00c2cb">
                <v-icon>
                  mdi-linkedin
                </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1" class="mr-3">
              <v-btn href="mailto:omarmarlin@gmail.com" style="background-color: #00c2cb">
                <v-icon>
                  mdi-gmail
                </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1" class="mb-5">
              <v-btn href="https://www.malt.fr/profile/julesomarmarlin1" style="background-color: #00c2cb">
                <v-icon>
                  mdi-alpha-m-box
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="mt-10">
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