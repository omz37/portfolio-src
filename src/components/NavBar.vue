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
      <v-col>
      <div>
        <v-row>
          <v-col cols="3" class="mt-2">
            <v-img src="logo.png" contain class="clickable-text" max-height="35" @click="goToPage('home')"/>
          </v-col>
          <v-col cols="4">
            <h1 class="clickable-text" @click="goToPage('home')">OMZ</h1>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="2">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </v-col>
        </v-row>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            app
            right
            style="background-color: black"
        >
          <v-list
              nav
              dense
          >
            <v-list-item-group
                v-model="group"
            >
              <v-list-item @click="goToPage('home'); drawer = false" class="text-center" :style="currentPath === 'home' ? 'color: black; background-color: #9ccbcb' : 'color: white'">
                <v-list-item-title style="font-size: large"> Home </v-list-item-title>
              </v-list-item>

              <v-divider></v-divider>
              <v-list-item @click="goToPage('projects'); drawer = false" class="text-center" :style="currentPath === 'projects' ? 'color: black; background-color: #9ccbcb' : 'color:  white'">
                <v-list-item-title style="font-size: large"> Projects </v-list-item-title>
              </v-list-item>

              <v-divider></v-divider>
              <v-list-item @click="goToPage('about'); drawer = false" class="text-center" :style="currentPath === 'about' ? 'color: black; background-color: #9ccbcb' : 'color:  white'">
                <v-list-item-title style="font-size: large"> About </v-list-item-title>
              </v-list-item>

              <v-divider></v-divider>
              <v-list-item @click="goToPage('contact'); drawer = false" class="text-center" :style="currentPath === 'contact' ? 'color: black; background-color: #9ccbcb' : 'color: white'">
                <v-list-item-title style="font-size: large"> Contact </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </div>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return  {
      currentPath: 'home',
      drawer: false,
      group: null,
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
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