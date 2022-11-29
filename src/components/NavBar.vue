<template>
  <v-app-bar id="nav" app color="#111111" dark style="border-bottom: 1px solid #00c2cb">
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
      <div>
        <v-row class="">
          <v-col cols="1"></v-col>
          <v-col cols="4">
            <v-img src="logo.png" contain class="clickable-text" max-height="35" @click="goToPage('home')"/>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="2">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-navigation-drawer v-model="drawer" app absolute right height="180" width="200"  style="background-color: black; border: 1px solid #9ccbcb">
              <v-list flat dense nav class="py-1">
                <v-list-item-group class="justify-center text-center">
                  <v-row class="justify-center text-center">
                    <v-col cols="5">
                      <v-list-item @click="goToPage('home'); drawer = false" class="text-center" :style="currentPath === 'home' ? 'color: #00c2cb' : 'color: #B5DACC'"> Home </v-list-item>
                    </v-col>
                  </v-row>
                  <v-divider class="justify-center mr-1" style="background-color: #9ccbcb"></v-divider>
                  <v-row class="justify-center text-center">
                    <v-col cols="5">
                      <v-list-item @click="goToPage('projects'); drawer = false" class="text-center" :style="currentPath === 'projects' ? 'color: #00c2cb' : 'color: #B5DACC'"> Projects </v-list-item>
                    </v-col>
                  </v-row>
                  <v-divider class="justify-center mr-1" style="background-color: #9ccbcb"></v-divider>
                  <v-row class="justify-center text-center">
                    <v-col cols="5">
                      <v-list-item @click="goToPage('about'); drawer = false" class="text-center" :style="currentPath === 'about' ? 'color: #00c2cb' : 'color: #B5DACC'"> About </v-list-item>
                    </v-col>
                  </v-row>
                  <v-divider class="justify-center mr-1" style="background-color: #9ccbcb"></v-divider>
                  <v-row class="justify-center text-center">
                    <v-col cols="5">
                      <v-list-item @click="goToPage('contact'); drawer = false" class="text-center" :style="currentPath === 'contact' ? 'color: #00c2cb' : 'color: #B5DACC'"> Contact </v-list-item>
                    </v-col>
                  </v-row>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return  {
      currentPath: 'home',
      drawer: false
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