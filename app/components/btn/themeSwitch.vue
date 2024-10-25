<template>
	<span>
		<div
			v-show="colorMode.preference === 'light'"
			class="theme-icon text-secondary-variant hover:text-secondary hover:cursor-pointer font-bold"
			@click="toggleTheme"
		>
			<Icon name="mdi:theme-light-dark" class="text-2xl" />
		</div>
		<div
			v-show="colorMode.preference === 'dark'"
			class="theme-icon text-secondary-variant hover:text-secondary hover:cursor-pointer font-bold"
			@click="toggleTheme"
		>
			<Icon name="mdi:theme-light-dark" class="text-2xl" />
		</div>
	</span>
</template>

<script setup>
	const colorMode = useColorMode();
	const toggleTheme = () => {
		colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
	};
</script>
