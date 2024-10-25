<template>
	<div class="container flex flex-row justify-between w-14">
		<NuxtLink :to="switchLocalePath('lv')">
			<svg-lv-flag />
		</NuxtLink>
		<NuxtLink :to="switchLocalePath('en')">
			<svg-gb-flag />
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
	// const { setLocale } = useI18n();
	const switchLocalePath = useSwitchLocalePath();
</script>
