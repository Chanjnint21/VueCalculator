<template>
    <v-container class=" area-calculator bg-surface-variant">
        <v-row>
            <v-col><v-alert v-if="showAlert" :value="showAlert" type="error" dismissible @input="showAlert = false" > The following output is invalid !</v-alert></v-col>
            <v-col cols="12"><v-text-field type="text" label="1st Value" variant="solo" v-model="Value1"></v-text-field></v-col>
            <v-col cols="12"><v-text-field type="text" label="2nd Value" variant="solo" v-model="Value2"></v-text-field></v-col>
            <!-- <input type="text" :value="value" @input="$emit('input', $event.target.value)" /> -->
            <v-col><v-text-field label="=" variant="solo" v-model="Ans" model-value="0" readonly ></v-text-field></v-col>
        </v-row>
        <v-row class="text-center">
            <v-col cols="2"><v-btn v-on:click="add">+</v-btn></v-col>
            <v-col cols="2"><v-btn v-on:click="sub">-</v-btn></v-col>
            <v-col cols="2"><v-btn v-on:click="multi">x</v-btn></v-col>
            <v-col cols="2"><v-btn v-on:click="dev">/</v-btn></v-col>
            <v-col cols="4"><v-btn :style="{ backgroundColor: Rcolor }" v-on:click="reset" block>C</v-btn></v-col>
        </v-row>
    </v-container>
</template>

<script>
import Ans from './WatchValue.js'

export default{
    props: {
        Rcolor:{
            type: String,
            required: true
        },
        Ecolor:{
            type: String,
            required: true
        },
    },
    data(){
        return{
            Value1: '',
            Value2: '',
            Ans: '',
            showAlert: ''

        }
    },
    watch:{
        Ans: Ans
    },
    methods:{
        reset: function(){
           this.Value1=''
           this.Value2=''
           this.Ans=''
        },
        add: function(){
            const sum = parseFloat(this.Value1) + parseFloat(this.Value2)
            this.Ans = sum;
        },
        sub: function(){
            const sum = parseFloat(this.Value1) - parseFloat(this.Value2)
            this.Ans = sum;
        },
        multi: function(){
            const sum = parseFloat(this.Value1) * parseFloat(this.Value2)
            this.Ans = sum;
        },
        dev: function(){
            const sum = parseFloat(this.Value1) / parseFloat(this.Value2)
            this.Ans = sum;
        },
        // Equals: function(){
        //     this.Ans = eval(this.Value)
        //     console.log(this.Ans);
        // }
    }
}
</script>

<style>
.area-calculator{
    width: 600px;
}
</style>