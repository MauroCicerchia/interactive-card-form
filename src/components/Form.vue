<script setup lang="ts">
import Input from "./Input.vue";
import Button from "./Button.vue";
import { formatCardNumber, parseCardNumber } from "../utils";

const props = defineProps<{ cardInfo: CardInfo, update: (field: string) => (newValue: string) => void, submit: (e: Event) => void }>();
</script>

<template>
	<div id="card-form-container">
		<form id="card-form">
			<Input id="cardholder-name" placeholder="e.g. Jane Appleseed" :value="cardInfo.cardholderName" :update="update('cardholderName')" :maxLength="30">CARDHOLDER NAME</Input>
			<Input id="card-number" placeholder="e.g. 1234 5678 9123 0000" :value="formatCardNumber(cardInfo.cardNumber)" :update="(value) => update('cardNumber')(parseCardNumber(value))" :maxLength="19" number>CARD NUMBER</Input>
			<Input id="exp-date-mm" placeholder="MM" :value="cardInfo.expDateMM" :update="update('expDateMM')" :maxLength="2" size="sm">EXP. DATE</Input>
			<Input id="exp-date-yy" placeholder="YY" :value="cardInfo.expDateYY" :update="update('expDateYY')" :maxLength="2" size="sm" />
			<Input id="cvc" placeholder="e.g. 123" :value="cardInfo.cvc" :update="update('cvc')" :maxLength="3" size="md">CVC</Input>
		</form>
		<Button id="submit-button" :onClick="submit">Confirm</Button>
	</div>
</template>

<style scoped>
#card-form-container {
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	justify-content: center;
}

#card-form {
	width: 400px;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
	justify-content: space-between;
}
</style>
