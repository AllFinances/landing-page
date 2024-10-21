<template>
	<div class="flex flex-row items-center justify-center">
		<div
			v-show="colorMode.preference === 'light'"
			class="theme-icon text-typography_primary_light dark:text-typography_primary_dark"
			@click="toggleTheme"
		>
			<Icon name="mdi:theme-light-dark" />
		</div>
		<div
			v-show="colorMode.preference === 'dark'"
			class="theme-icon text-typography_primary_light dark:text-typography_primary_dark"
			@click="toggleTheme"
		>
			<Icon name="mdi:theme-light-dark" />
		</div>
	</div>
</template>

<script setup>
	const colorMode = useColorMode();
	const toggleTheme = () => {
		colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
	};
</script>
