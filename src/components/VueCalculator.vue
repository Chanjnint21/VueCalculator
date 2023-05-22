<template>
    <v-container class=" area-calculator bg-surface-variant">
        <v-row>
            <v-col><v-alert text danse outlined type="warning" v-if="showAlert" :value="showAlert" @input="showAlert = false" >Value that are not number will case the error in calculating !</v-alert></v-col>
            <v-col cols="12"><v-text-field type="text" label="1st Value" variant="solo" v-model="Value1"></v-text-field></v-col>
            <v-col cols="12"><v-text-field type="text" label="2nd Value" variant="solo" v-model="Value2"></v-text-field></v-col>
            <!-- <input type="text" :value="value" @input="$emit('input', $event.target.value)" /> -->
            <v-col><v-text-field label="=" variant="solo" v-model="Ans" model-value="0" readonly ></v-text-field></v-col>
        </v-row>
        <v-row class="text-center">
            <v-col cols="2"><v-btn   @click="ADD"> + </v-btn></v-col>
            <v-col cols="2"><v-btn  @click="SUB"> - </v-btn></v-col>
            <v-col cols="2"><v-btn @click="MULTI"> &times; </v-btn></v-col>
            <v-col cols="2"><v-btn @click="DEV"> &divide; </v-btn></v-col>
            <v-col cols="4"><v-btn :style="{ backgroundColor: Rcolor }" v-on:click="reset" block>C</v-btn></v-col>
        </v-row>
    </v-container>
</template>

<script>
import {Value1, Value2} from './WatchValue.js'

export default{
    props: {
        Rcolor:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            Value1: '',
            Value2: '',
            showAlert: '',
            add: false,
            sub: false,
            multi: false,
            dev: false
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
            return 0;
        }
    },
    methods:{
        reset: function(){
           this.Value1='';
           this.Value2='';
           this.add = this.sub = this.multi = this.dev = false;
           this.Ans= ''
        },
        ADD: function(){
            this.add = true;
            this.sub = this.multi = this.dev = false;
        },
        SUB: function(){
            this.sub = true;
            this.add = this.multi = this.dev = false;
        },
        MULTI: function(){
            this.multi = true;
            this.sub = this.add = this.dev = false;
        },
        DEV: function(){
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