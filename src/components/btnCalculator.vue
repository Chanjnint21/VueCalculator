<template>
    <v-container class=" area-calculator bg-surface-variant">
        <v-row>
            <v-col><v-alert v-if="showAlert" :value="showAlert" type="error" dismissible @input="showAlert = false"> The
                    following output is invalid !</v-alert></v-col>
            <v-col cols="12"><v-text-field type="text" label="Value" variant="solo" v-model="Value"></v-text-field></v-col>
            <!-- <input type="text" :value="value" @input="$emit('input', $event.target.value)" /> -->
            <v-col><v-text-field label="=" variant="solo" v-model="Ans" model-value="0" readonly></v-text-field></v-col>
        </v-row>
        <v-row>
            <v-col cols="3"><v-btn>9</v-btn></v-col>
            <v-col cols="3"><v-btn>8</v-btn></v-col>
            <v-col cols="3"><v-btn>7</v-btn></v-col>
            <v-col cols="3"><v-btn>+</v-btn></v-col>
        </v-row>
        <v-row>
            <v-col cols="3"><v-btn>6</v-btn></v-col>
            <v-col cols="3"><v-btn>5</v-btn></v-col>
            <v-col cols="3"><v-btn>4</v-btn></v-col>
            <v-col cols="3"><v-btn>-</v-btn></v-col>
        </v-row>
        <v-row>
            <v-col cols="3"><v-btn>3</v-btn></v-col>
            <v-col cols="3"><v-btn>2</v-btn></v-col>
            <v-col cols="3"><v-btn>1</v-btn></v-col>
            <v-col cols="3"><v-btn>x</v-btn></v-col>
        </v-row>
        <v-row>
            <v-col cols="3"><v-btn :color="Rcolor" v-on:click="reset">C</v-btn></v-col>
            <v-col cols="3"><v-btn>0</v-btn></v-col>
            <v-col cols="3"><v-btn :color="Ecolor" v-on:click="Equals">=</v-btn></v-col>
            <v-col cols="3"><v-btn>/</v-btn></v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'BtnCalculator',
    props: {
        Rcolor: {
            type: String,
            default: 'warning'
        },
        Ecolor: {
            type: String,
            default: 'warning'
        },
    },
    data() {
        return {
            Value: '',
            Ans: '',
            showAlert: ''
        }
    },
    watch: {
        Value(newVal) {
            if (newVal !== "+") {
                return this.showAlert = true
            }
            return this.showAlert = false;
        }
    },
    methods: {
        reset: function () {
            this.Value = ''
            this.Ans = ''
        },
        Equals: function () {
            this.Ans = eval(this.Value)
        }
    }
}
</script>

<style>
.area-calculator {
    width: 600px;
}
</style>