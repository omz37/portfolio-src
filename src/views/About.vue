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
            {{$t('message.bio1')}} <br>
          </div>
          <div class="mb-4">
            {{$t('message.bio2')}} <br>
          </div>
          <div class="mb-4">
            {{$t('message.bio3')}} <br>
          </div>
          <div class="mb-4">
            {{$t('message.bio4')}} <br>
          </div>
          <div class="mb-4">
            {{$t('message.bio5')}} <br>
          </div>
          <div>
            {{$t('message.bio6')}} <br>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="!$vuetify.breakpoint.smAndDown" class="mt-3 mb-16">
      <v-col cols="5"></v-col>
      <v-col cols="6" sm="4" md="3" lg="2" xl="2">
        <v-btn tile dark large style="font-size: large">
          <a href="cv-marlin-english.pdf" target="_blank" style="font-size: large; text-decoration: none; color: white">{{ $t('button.cv') }}</a>
        </v-btn>
      </v-col>
      <v-col cols="6" sm="4" md="3" lg="2" xl="2">
        <v-btn tile dark large style="font-size: large" @click="goToContact">
          {{ $t('button.chat') }}
        </v-btn>
      </v-col>
      <v-col cols="1" class="moving-arrow mt-2">
        <v-icon large>mdi-arrow-left</v-icon>
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.smAndDown" class="mb-16 ml-3">
      <v-col cols="7" sm="4" md="7" lg="2" xl="2">
        <v-btn tile dark large style="font-size: large" class="mt-13">
          <a href="cv-marlin-english.pdf" target="_blank" style="font-size: large; text-decoration: none; color: white">{{ $t('button.cv') }}</a>
        </v-btn>
      </v-col>
      <v-col cols="6" sm="4" md="7" lg="2" xl="2">
        <v-btn tile dark large style="font-size: large" class="mt-13" @click="goToContact">
          {{ $t('button.chat') }}
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
