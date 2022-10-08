<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";
import Cards from "./components/Cards.vue";
import Form from "./components/Form.vue";

const cardInfo = ref<CardInfo>({
	cardholderName: "",
	cardNumber: "",
	expDateMM: "",
	expDateYY: "",
	cvc: "",
})

function update(field: string) {
	return (newValue: string) => {
		_.set(cardInfo.value, field, newValue);
	}
}
</script>

<template>
	<div id="main">
		<div id="container">
			<Cards :cardInfo="cardInfo" />
			<Form :cardInfo="cardInfo" :update="update" />
		</div>
	</div>
</template>

<style scoped>
#main {
	height: 100vh;
	background: url("./assets/bg-main-desktop.png");
	background-size: contain;
	background-position: left;
	background-repeat: no-repeat;
}

#container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-content: center;
	margin: 0 5%;
}
</style>
