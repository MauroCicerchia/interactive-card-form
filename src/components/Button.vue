<script setup lang="ts">
const props = defineProps<{ id: string, onClick: (e: Event) => void }>();
</script>

<template>
	<button :id="id" @click="onClick">
		<slot />
	</button>
</template>

<style scoped>
button {
	background-color: var(--dark-violet);
	color: white;
	width: 400px;
	height: 50px;
	border: none;
	border-radius: 7px;
	font-size: 1em;
	font-weight: bold;
	letter-spacing: 0.05em;
	cursor: pointer;
}

button:hover {
	background-color: var(--color-primary);
}
</style>
