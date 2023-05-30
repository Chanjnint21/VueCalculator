<template>
	<v-main class="d-flex align-center justify-center" :id="MainID">
		<v-container class="area-calculator bg-surface-variant rounded-lg px-12 " :id="ContainerID">
			<v-row>

				<!-- value input 1-->
				<v-col class="mt-5" cols="5"><text-files v-model="Value1" hinttext="Input must be number" textlabel="1st Value" textcolor="success" outlined/></v-col>

				<!-- display the method -->
				<v-col class="d-flex align-center justify-center">
					<p v-html="method"></p>
				</v-col>

				<!-- value input 2-->
				<v-col class="mt-5" cols="5"><text-files v-model="Value2" hinttext="Input must be number" textlabel="2nd Value" textcolor="success" outlined/></v-col>

				<!-- icon click for histor -->
				<v-col class="d-flex align-center justify-center mb-2">
					<CalHistory :history="history"/>
				</v-col>

				<!-- Result (readonly text field) -->
				<v-col cols="12"><text-files :value="Ans"  textlabel="=" textcolor="success" readonly/>
				</v-col>
			</v-row>
			<!-- method btns and clear btn -->
			<v-row >
				<v-col cols="2"><btn-component @click="ADD" CalMethod="+" outlined/></v-col>
				<v-col cols="2"><btn-component @click="SUB" CalMethod="-" outlined/></v-col>
				<v-col cols="2"><btn-component @click="MULTI" CalMethod="&times;" outlined/></v-col>
				<v-col cols="2"><btn-component @click="DEV" CalMethod="&divide;" outlined/></v-col>
				<v-col cols="2"><btn-component @click="reset" btncolor='error' CalMethod="C"/></v-col>
				<v-col cols="2"><btn-component @click="FloatParse" btncolor="success" CalMethod=".00"/></v-col>
			</v-row>
		</v-container>
	</v-main>
</template>

<script>
import '../assets/styles.css'
import TextFiles from '../components/TextFiles.vue'
import BtnComponent from '../components/BtnComponent.vue';

export default {
	name: 'CalPage',
	components:{
		TextFiles,
		BtnComponent,
	},
	props: {
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
		}
	},
	watch: {
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