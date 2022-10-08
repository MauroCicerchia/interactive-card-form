<script setup lang="ts">
import _ from "lodash";

const props = defineProps<{ cardInfo: CardInfo }>();

function cardNumber() {
	const paddedNumber = _.padEnd(props.cardInfo.cardNumber, 16, "0");
	return _.chunk(paddedNumber, 4).map(it => it.join("")).join(" ");
}

function name() {
	return props.cardInfo.cardholderName.toUpperCase() || "JANE APPLESEED";
}

function expDate() {
	const paddedMM = _.padEnd(props.cardInfo.expDateMM, 2, "0");
	const paddedYY = _.padEnd(props.cardInfo.expDateYY, 2, "0");
	return `${paddedMM}/${paddedYY}`;
}

function cvc() {
	return _.padEnd(props.cardInfo.cvc, 3, "0");
}
</script>

<template>
	<div id="cards-container">
		<div class="card front">
			<img class="card-image" src="../assets/bg-card-front.png" alt="Card front" />
			<div class="card-info">
				<img class="card-logo" src="../assets/card-logo.svg" alt="Logo" />
				<p class="card-number">{{ cardNumber() }}</p>
				<p class="cardholder-name">{{ name() }}</p>
				<p class="exp-date">{{ expDate() }}</p>
			</div>
		</div>
		<div class="card back">
			<img class="card-image" src="../assets/bg-card-back.png" alt="Card back" />
			<div class="card-info">
				<p class="cvc">{{ cvc() }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
	#cards-container {
		padding: 10%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.card-image {
		width: 400px;
	}
	.front {
		position: relative;
		bottom: 16px;
		right: 32px;
	}
	.back {
		position: relative;
		top: 16px;
		left: 32px;
	}
	.card-info {
		height: 100%;
		width: 400px;
		position: absolute;
		top: 0;
		color: var(--white);
		padding: 24px 32px;
	}
	.card-info > p {
		margin: 0;
	}
	.card-logo {
		width: 70px;
	}
	.card-number {
		font-size: 24px;
		position: absolute;
		bottom: 76px;
	}
	.cardholder-name {
		position: absolute;
		bottom: 32px;
	}
	.exp-date {
		position: absolute;
		right: 32px;
		bottom: 32px;
	}
	.cvc {
		position: absolute;
		right: 58px;
		top: 96px;
	}
</style>
