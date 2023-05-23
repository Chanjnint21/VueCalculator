<template>
    <v-container class=" area-calculator bg-surface-variant">
        <v-row>
            <v-col cols="12"><v-alert text danse outlined type="warning" v-if="showAlert" :value="showAlert" @input="showAlert = false" >Value that are not number will case the error in calculating !</v-alert></v-col>
            <v-col class="mt-5" cols="5"><v-text-field type="text" label="1st Value" v-model="Value1" outlined></v-text-field></v-col>
            <v-col class="d-flex align-center justify-center"><p v-html="method"></p></v-col>
            <v-col class="mt-5" cols="5"><v-text-field type="text" label="2nd Value" v-model="Value2" outlined></v-text-field></v-col>
            <v-col cols="12"><v-text-field label="=" variant="solo" :value="Ans" model-value="0" readonly ></v-text-field></v-col>
        </v-row>
        <v-row class="text-center">
            <!-- <v-form v-model="isFormValid"></v-form> -->
            <v-col cols="2"><v-btn @click="ADD" :disabled="!isFormValid"> + </v-btn></v-col>
            <v-col cols="2"><v-btn @click="SUB"> - </v-btn></v-col>
            <v-col cols="2"><v-btn @click="MULTI"> &times; </v-btn></v-col>
            <v-col cols="2"><v-btn @click="DEV"> &divide; </v-btn></v-col>
            <v-col cols="4"><v-btn :color="Rcolor" v-on:click="reset" block>C</v-btn></v-col>
        </v-row>
    </v-container>
</template>

<script>
import {Value1, Value2} from './WatchValue.js'

export default{
    props: {
        Rcolor:{
            type: String,
            default: 'warning',
        }, 
        // method:{
        //     type: String,
        //     default: "...."
        // }
    },
    data(){
        return{
            Value1: '',
            Value2: '',
            showAlert: '',
            method: '....',
            add: false,
            sub: false,
            multi: false,
            dev: false,
            isFormValid: ''
        }
    },
    watch:{
        Value1: Value1,
        Value2: Value2,
    },
    computed:{
        Ans(){
            //convert the inp value to number 
            let V1 = Number(this.Value1)
            let V2 = Number(this.Value2)

            //check operation condition
            if(this.add){
                return V1 + V2;
            } else if( this.sub){
                return V1 - V2;
            }else if( this.multi){
                return V1 * V2;
            }else if( this.dev){
                return V1 / V2;
            }
            return "";
        },
    },
    methods:{
        reset: function(){
            this.method = '....'
           this.Value1='';
           this.Value2='';
           this.add = this.sub = this.multi = this.dev = false;
        },
        ADD: function(){
            this.method="+"
            this.add = true;
            this.sub = this.multi = this.dev = false;
        },
        SUB: function(){
            this.method="-"
            this.sub = true;
            this.add = this.multi = this.dev = false;
        },
        MULTI: function(){
            this.method= "&times;"
            this.multi = true;
            this.sub = this.add = this.dev = false;
        },
        DEV: function(){
            this.method= "&divide;"
            this.dev = true;
            this.sub = this.multi = this.add = false;
        },

        // ADD: function(){
        //     const sum = Number(this.Value1) * Number(this.Value2)
        //     this.Ans = sum;
        // },
        // SUB: function(){
        //     const sum = Number(this.Value1) / Number(this.Value2)
        //     this.Ans = sum;
        // },
        // MULTI: function(){
        //     const sum = Number(this.Value1) * Number(this.Value2)
        //     this.Ans = sum;
        // },
        // DEV: function(){
        //     const sum = Number(this.Value1) / Number(this.Value2)
        //     this.Ans = sum;
        // },
    }
}
</script>

<style>
.area-calculator{
    width: 600px;
}
</style>