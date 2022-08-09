<template>
  <v-container id="project">
    <NavBar/>
    <Footer/>
  </v-container>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "@/components/Footer";

export default {
  name: "Projects",
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

html,
body {
  font-family: 'Kanit', sans-serif;
}

#project {
  font-family: 'Kanit', sans-serif;
}
</style>