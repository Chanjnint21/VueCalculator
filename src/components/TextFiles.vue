<template>
  <v-text-field v-bind="$attrs" v-on="$listeners" :hint="hinttext" :color="textcolor" :label="textlabel"
    :rules="[rulesNumber]"></v-text-field>
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
  data() {
    return {
      rulesNumber: v => {
        if (!v.trim()) return true;
        if (!isNaN(v)) return true;
        return 'The Input must be in number !!!';
      },

    }
  },
  watch:{
    ParentValue(newVal){
      console.log(newVal)
    }
  }
}
</script>