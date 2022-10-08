<script setup lang="ts">
import Input from "./Input.vue";

const props = defineProps<{ cardInfo: CardInfo, update: (field: string) => (newValue: string) => void }>();
</script>

<template>
	<div id="card-form-container">
		<form id="card-form">
			<Input id="cardholder-name" placeholder="e.g. Jane Appleseed" :value="cardInfo.cardholderName" :update="update('cardholderName')" :maxLength="30">CARDHOLDER NAME</Input>
			<Input id="card-number" placeholder="e.g. 1234 5678 9123 0000" :value="cardInfo.cardNumber" :update="update('cardNumber')" :maxLength="16">CARD NUMBER</Input>
			<Input id="exp-date-mm" placeholder="MM" :value="cardInfo.expDateMM" :update="update('expDateMM')" :maxLength="2">EXP. DATE (MM/YY)</Input>
			<Input id="exp-date-yy" placeholder="YY" :value="cardInfo.expDateYY" :update="update('expDateYY')" :maxLength="2"/>
			<Input id="cvc" placeholder="e.g. 123" :value="cardInfo.cvc" :update="update('cvc')" :maxLength="3">CVC</Input>
		</form>
	</div>
</template>

<style scoped>
#card-form-container {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

#card-form {
	width: 400px;
}
</style>
