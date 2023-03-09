<template>
  <v-container id="project">
    <NavBar/>
    <div class="mt-6 mb-12 justify-center" v-for="project in projects" :key="project.id">
      <div :id="project.id">
        <v-row class="ml-1" style="font-size: xxx-large">
          {{project.title}}
        </v-row>
        <v-row class=" mt-6">
          <v-col cols="12">
            <v-card style="background-color: black">
              <v-row>
                <v-col cols="12" xl="1" lg="1" md="2" sm="12" align-self="center">
                  <v-btn @click="project.counter > 0 ? project.counter -= 1 : project.counter = project.photos.length - 1" dark>
                    <v-icon>mdi-arrow-left</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" xl="10" lg="10" md="8" sm="12">
                  <v-img :src="project.photos[project.counter]"/>
                </v-col>
                <v-col cols="12" xl="1" lg="1" md="2" sm="12" align-self="center">
                  <v-btn @click="project.counter < project.photos.length - 1 ? project.counter += 1 : project.counter = 0" dark>
                    <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

        </v-row>

        <v-row class="mt-16">
          <v-col>
            <h2>{{$t('project.goal')}}</h2>
          </v-col>
        </v-row>
        <v-row class="mt-6 text-justify" style="font-size: large">
          <v-col v-if="project.title === 'Area'">
            {{$t('project.area.goals')}}
          </v-col>
          <v-col v-if="project.title === 'Pyp'">
            {{$t('project.pyp.goals')}}
          </v-col>
          <v-col v-if="project.title === 'Chambre Noire'">
            {{$t('project.cn.goals')}}
          </v-col>
          <v-col v-if="project.title === 'Swity'">
            {{$t('project.swity.goals')}}
          </v-col>
        </v-row>
        <v-row class="mt-11">
          <v-col>
            <h2>{{$t('project.techno')}}</h2>
          </v-col>
        </v-row>
        <v-row class="mt-6 text-justify" style="font-size: large">
          <v-col v-if="project.title === 'Area'">
            {{$t('project.area.technos')}}
          </v-col>
          <v-col v-if="project.title === 'Pyp'">
            {{$t('project.pyp.technos')}}
          </v-col>
          <v-col v-if="project.title === 'Chambre Noire'">
            {{$t('project.cn.technos')}}
          </v-col>
          <v-col v-if="project.title === 'Swity'">
            {{$t('project.swity.technos')}}
          </v-col>
        </v-row>
        <v-row> <v-divider class="mt-9"></v-divider> </v-row>
      </div>
    </div>
    <Footer/>
  </v-container>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "@/components/Footer";

export default {
  name: "Projects",
  props: ['number'],
  data() {
    return {
      randProject: 0,
      projects: [
        {
          title: 'Area',
          id: 0,
          photos: ['project_area.png', 'project_area2.png'],
          counter: 0
        },
        {
          title: 'Pyp',
          id: 1,
          photos: ['project_pyp.png'],
          counter: 0},
        {
          title: 'Chambre Noire',
          id: 2,
          photos: ['project_cn.png', 'project_cn2.png', 'project_cn3.png'],
          counter: 0},
        {
          title: 'Swity',
          id: 3,
          photos: ['project_swity.png'],
          counter: 0
        }
      ]
    }
  },
  components: {
    NavBar,
    Footer,
  },
  created() {

  },
  mounted() {
    if (this.$props.number) {
      let element = document.getElementById(this.$props.number)
      if (element)
        element.scrollIntoView({behavior: "auto", block: "center"});
    }
  },
  methods: {
  }
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