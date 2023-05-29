<template>
	<v-main class="d-flex align-center justify-center" :id="MainID">
		<v-container class="area-calculator bg-surface-variant rounded-lg px-12 " :id="ContainerID">
			<v-row>
				<!-- Alert -->
				<!-- <v-col cols="12"><v-alert text danse outlined type="warning" v-if="showAlert" :value="showAlert"
                        @input="showAlert = false">Value that are not number will case the error in calculating
                        !</v-alert></v-col> -->

				<!-- value input 1-->
				<v-col class="mt-5" cols="5"><v-text-field color="green" label="1st Value" v-model="Value1" :rules="[rulesNumber]"
						outlined></v-text-field></v-col>

				<!-- display the method -->
				<v-col class="d-flex align-center justify-center">
					<p v-html="method"></p>
				</v-col>

				<!-- value input 2-->
				<v-col class="mt-5" cols="5"><v-text-field color="green" label="2nd Value" v-model="Value2" :rules="[rulesNumber]"
						outlined></v-text-field></v-col>

				<!-- icon click for histor -->
				<v-col class="d-flex align-center justify-center mb-2">
					<CalHistory :history="history"></CalHistory>
				</v-col>

				<!-- Result (readonly text field) -->
				<v-col cols="12"><v-text-field label="=" color="green" variant="solo" :value="Ans"
						readonly></v-text-field></v-col>
			</v-row>
			<!-- method btns and clear btn -->
			<v-row class="text-center">
				<v-col cols="2"><v-btn @click="ADD" :disabled="!isBtnValid"> + </v-btn></v-col>
				<v-col cols="2"><v-btn @click="SUB" :disabled="!isBtnValid"> - </v-btn></v-col>
				<v-col cols="2"><v-btn @click="MULTI" :disabled="!isBtnValid"> &times; </v-btn></v-col>
				<v-col cols="2"><v-btn @click="DEV" :disabled="!isBtnValid"> &divide; </v-btn></v-col>
				<v-col cols="2"><v-btn :color="Rcolor" v-on:click="reset" block> C </v-btn></v-col>
				<v-col class="mb-5" cols="2"><v-btn v-on:click="FloatParse" color="success">.00</v-btn></v-col>
			</v-row>
		</v-container>
	</v-main>
</template>

<script>
import '../assets/styles.css'

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
	data() {
		return {
			Value1: '',
			Value2: '',
			method: '....',
			Ans: '',
			MainID: '',
			ContainerID: '',
			history: [],
			rulesNumber: v => {
				if (!v.trim()) return true;
				if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
				return 'The Input must be in number !!!';
			},

		}
	},
	watch: {
		//check the switch if it true toggle Id to dark mode
		Switch() {
			if (this.Switch) {
				this.MainID = 'MainID';
				this.ContainerID = 'ContainerID'
			}
			else {
				this.MainID = ''
				this.ContainerID = ''
			}
		},
	},
	computed: {
		// check if the text field of value 1 or 2 is not number show alert
		// showAlert() {
		//     return isNaN(this.Value1) || isNaN(this.Value2)
		// },
		// check if the text field of value 1 or 2 empty disable button
		isBtnValid() {
			return this.Value1 !== '' && this.Value2 !== ''
		},
	},
	methods: {
		reset: function () {
			this.method = '....'
			this.Value1 = '';
			this.Value2 = '';
			this.Ans = ''
		},
		ToHistory(Symbol) {
			this.history.push(`${this.Value1} ${Symbol} ${this.Value2} = ${this.Ans}`)
		},
		FloatParse() {
			if (this.Ans === '') return; //if the Ans is empty dun parse
			this.Ans = Math.round(this.Ans * 100) / 100
			this.ToHistory(this.method); // if the Ans already parse, just return

		},
		ADD: function () {
			this.method = "+"
			this.Ans = Number(this.Value1) + Number(this.Value2);
			this.ToHistory('+')
		},
		SUB: function () {
			this.method = "-"
			this.Ans = Number(this.Value1) - Number(this.Value2);
			this.ToHistory('-')
		},
		MULTI: function () {
			this.method = "&times;"
			this.Ans = Number(this.Value1) * Number(this.Value2);
			this.ToHistory('&times;')
		},
		DEV: function () {
			this.method = "&divide;"
			this.Ans = Number(this.Value1) / Number(this.Value2);
			this.ToHistory('&divide;')
		},

	},
}
</script>