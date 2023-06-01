<template>
  <v-btn v-bind="$attrs" v-on="$listeners"  :color="btncolor" v-html="CalMethod"></v-btn>
</template>

<script>
export default{
  props:{
    CalMethod:{ type: String},
    btncolor: {
      type: String,
      default: 'primary'
    }
  },
}
</script>