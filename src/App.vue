<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <div class="d-flex align-center">
        <h2>VueCalculator</h2>
      </div>
      <v-spacer></v-spacer>
      <div class="mt-5">
        <v-switch v-model="Switch" inset :label="mode"></v-switch>
      </div>
    </v-app-bar>
    <!-- <VueCalculator Rcolor="error" :Switch="Switch"></VueCalculator> -->
    <cal-page :Switch="Switch"/>
  </v-app>
</template>

<script>
// import VueCalculator from './components/VueCalculator.vue';
import CalPage from './views/CalPage.vue';

export default {
  name: 'App',

  components: {
    // VueCalculator,
    CalPage

  },
  data() {
    return {
      Switch: false,
      mode: 'LIGHT',
    }
  },
  watch: {
    Switch(newVal) {
      if (newVal) {
        return this.mode = 'DARK'
      }
      return this.mode = 'LIGHT'
    }
  }
};
</script>
