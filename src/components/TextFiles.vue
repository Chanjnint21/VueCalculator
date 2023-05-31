<template>
  <v-text-field v-bind="$attrs" v-on="$listeners" :hint="hinttext" :color="textcolor" :label="textlabel"></v-text-field>
</template>

<script>
export default {
  name: 'TextFiles',
  props: {
    textcolor: {
      type: String
    },
    textlabel: {
      type: String,
    },
    hinttext: {
      type: String,
      default: ''
    }
  },
}
</script>