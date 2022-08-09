<template>
  <v-app-bar id="nav" app color="#111111" dark class="px-8" style="border-bottom: 1px solid #00c2cb">
    <v-row v-if="!$vuetify.breakpoint.smAndDown">
      <v-img src="logo.png" contain max-width="80" class="clickable-text" @click="goToPage('home')"/>

      <h1 class="ml-3 clickable-text" @click="goToPage('home')">OMZ</h1>

      <v-spacer></v-spacer>

      <v-btn :style="currentPath === 'home' ? 'color: #00c2cb' : 'color: #B5DACC'" text @click="goToPage('home')">Home</v-btn>
      <v-btn :style="currentPath === 'projects' ? 'color: #00c2cb' : 'color: #B5DACC'" text @click="goToPage('projects')">Projects</v-btn>
      <v-btn :style="currentPath === 'about' ? 'color: #00c2cb' : 'color: #B5DACC'" text @click="goToPage('about')">About</v-btn>
      <v-btn :style="currentPath === 'contact' ? 'color: #00c2cb' : 'color: #B5DACC'" text @click="goToPage('contact')">Contact</v-btn>

    </v-row>

<!--    MOBILE VERSION-->
    <v-row v-else>
      <v-col cols="2">
        <v-img src="logo.png" contain class="clickable-text mt-1" @click="goToPage('home')"/>
      </v-col>
      <v-col cols="3" class="mx-1">
        <v-btn :style="currentPath === 'projects' ? 'color: #00c2cb' : 'color: #B5DACC'" text @click="goToPage('projects')">Projects</v-btn>
      </v-col>
      <v-col cols="3" class="mx-1">
        <v-btn :style="currentPath === 'about' ? 'color: #00c2cb' : 'color: #B5DACC'" text @click="goToPage('about')">About</v-btn>
      </v-col>
      <v-col cols="3" class="mx-1">
        <v-btn :style="currentPath === 'contact' ? 'color: #00c2cb' : 'color: #B5DACC'" text @click="goToPage('contact')">Contact</v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return  {
      currentPath: 'home'
    }
  },
  methods: {
    goToPage(page) {
      localStorage.setItem('currentPath', page)
      this.$router.push(page)
    },
  },
  mounted() {
    this.currentPath = localStorage.getItem('currentPath')
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

html,
body {
  font-family: 'Kanit', sans-serif;
}

#nav {
  font-family: 'Kanit', sans-serif;
}
.clickable-text {
  cursor: pointer;
}


</style>