<script setup lang="ts">
const props = defineProps<{ id: string, placeholder?: string, maxLength?: number, value: string, update: (newValue: string) => void }>();

function onChange(event: Event) {
	const target = event.target as HTMLInputElement;
	props.update(target.value);
}
</script>

<template>
	<div class="input-container">
		<label :for="id">
			<slot />
		</label>
		<input type="text" :id="id" :name="id" :placeholder="placeholder" :value="value" @input="event => onChange(event)" :maxlength="maxLength" />
	</div>
</template>

<style scoped>
.input-container {
	margin: 4px 0;
}

label {
	display: block;
	font-size: 0.8em;
	font-weight: 600;
	letter-spacing: 0.1em;
	text-transform: uppercase;
}

input {
	color: var(--dark-violet);
	padding: 0.7rem;
	width: 400px;
	outline: none;
	border: 2px solid var(--light-gray-violet);
	border-radius: 7px;
	font-size: 1em;
	font-weight: 500;
}

input:focus {
	border: 2px solid transparent;
	border-radius: 7px;
	background-image: linear-gradient(white, white), var(--color-primary-gradient);
	background-origin: border-box;
	background-clip: padding-box, border-box;
}

input::placeholder {
	color: var(--light-gray-violet);
}
</style>
