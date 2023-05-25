<template>
    <v-main class="d-flex align-center justify-center" :id=" MainID ">
        <v-container class="area-calculator bg-surface-variant rounded-lg px-12 " :id=" ContainerID ">
            <v-row >
                <v-col cols="12"><v-alert text danse outlined type="warning" v-if="showAlert" :value="showAlert"
                        @input="showAlert = false">Value that are not number will case the error in calculating
                        !</v-alert></v-col>
                <v-col class="mt-5" cols="5"><v-text-field type="text" color="green" label="1st Value" v-model="Value1"
                        outlined></v-text-field></v-col>
                <v-col class="d-flex align-center justify-center">
                    <p v-html="method"></p>
                </v-col>
                <v-col class="mt-5" cols="5"><v-text-field type="text" color="green" label="2nd Value" v-model="Value2"
                        outlined></v-text-field></v-col>
                <v-col class="d-flex align-center justify-center mb-2" ><CalHistory :history="history"></CalHistory></v-col>        
                <v-col cols="12"><v-text-field label="=" color="green" variant="solo" :value="Ans"
                        readonly></v-text-field></v-col>
            </v-row>
            <v-row class="text-center">
                <v-col cols="2"><v-btn @click="ADD" :disabled="!isBtnValid"> + </v-btn></v-col>
                <v-col cols="2"><v-btn @click="SUB" :disabled="!isBtnValid"> - </v-btn></v-col>
                <v-col cols="2"><v-btn @click="MULTI" :disabled="!isBtnValid"> &times; </v-btn></v-col>
                <v-col cols="2"><v-btn @click="DEV" :disabled="!isBtnValid"> &divide; </v-btn></v-col>
                <v-col cols="4"><v-btn :color="Rcolor" v-on:click="reset" block> C </v-btn></v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import '../assets/styles.css'
import { WatchValue1, WatchValue2, Switch } from './property/Watcher.js'
import { showAlert, isBtnValid } from './property/Computed.js'
import CalHistory from './CalHistory.vue'

export default {
    props: {
        Rcolor: {
            type: String,
            default: 'warning',
        },
        Switch: {
            type: Boolean
        }
    },
    components:{
        CalHistory
    },
    data() {
        return {
            Value1: '',
            Value2: '',
            V1Alert: '',
            V2Alert: '',
            method: '....',
            Ans: '',
            //add: false,
            //sub: false,
            //multi: false,
            //dev: false,
            MainID: '',
            ContainerID: '',
            history: []
        }
    },
    watch: {
        Value1: WatchValue1,
        Value2: WatchValue2,
        Switch: Switch
    },
    computed: {
        //Ans: Ans,
        showAlert: showAlert,
        isBtnValid: isBtnValid,
    },
    methods: {
        reset: function () {
            this.method = '....'
            this.Value1 = '';
            this.Value2 = '';
            this.Ans = ''
            //this.add = this.sub = this.multi = this.dev = false;
        },
        ToHistory(meth){
            this.history.push(`${this.Value1} ${meth} ${this.Value1} = ${this.Ans}`)
        },
        ADD: function(){
            this.method = "+"
            const sum = Number(this.Value1) + Number(this.Value2)
            this.Ans = sum;
            this.ToHistory('+')
        },
        SUB: function(){
            this.method = "-"
            const sum = Number(this.Value1) - Number(this.Value2)
            this.Ans = sum;
            this.ToHistory('-')
        },
        MULTI: function(){
            this.method = "&times;"
            const sum = Number(this.Value1) * Number(this.Value2)
            this.Ans = sum;
            this.ToHistory('&times;')
        },
        DEV: function(){
            this.method = "&divide;"
            const sum = Number(this.Value1) / Number(this.Value2)
            this.Ans = sum;
            this.ToHistory('&divide;')
        },

        //---------------------when use computed--------------------
        // ADD: function () {
        //     this.method = "+"
        //     this.add = true;
        //     this.sub = this.multi = this.dev = false;
        // },
        // SUB: function () {
        //     this.method = "-"
        //     this.sub = true;
        //     this.add = this.multi = this.dev = false;
        // },
        // MULTI: function () {
        //     this.method = "&times;"
        //     this.multi = true;
        //     this.sub = this.add = this.dev = false;
        // },
        // DEV: function () {
        //     this.method = "&divide;"
        //     this.dev = true;
        //     this.sub = this.multi = this.add = false;
        // },
    },
}
</script>