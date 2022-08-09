<template>
  <div id="app" style="background-color: #9ccbcb; width: 100%; height: 100%">
    <v-app>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300&display=swap');

html, body {
  font-family: 'Readex Pro', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  justify-items: center;
  font-family: 'Readex Pro', sans-serif;
  background-color: #9ccbcb;

}
</style>
