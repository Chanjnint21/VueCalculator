<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
    <h2>VueCalculator</h2>
    </v-app-bar>
    <v-main>
      <VueCalculator :value="Value" @input="Value=$event"></VueCalculator>
      <!-- <btnCalculator></btnCalculator> -->
    </v-main>
  </v-app>
</template>

<script>
import VueCalculator from './components/VueCalculator.vue';
// import btnCalculator from './components/btnCalculator.vue';

export default {
  name: 'App',

  components: {
    VueCalculator,
    //btnCalculator
  },

  data() {
    return{
      Value: 0
    }
  }
};
</script>
