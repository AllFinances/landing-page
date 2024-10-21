<template>
	<div class="relative inline-block text-left">
		<div>
			<button
				@click="toggleDropdown"
				class="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
				id="menu-button"
				aria-expanded="true"
				aria-haspopup="true"
			>
				{{ locale }}
				<svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>

		<div
			v-if="isOpen"
			class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
		>
			<div class="py-1" role="none">
				<template v-for="localeNew in locales.filter((v) => v.code !== locale)" :key="localeNew.code">
					<button
						@click="updateLocale(localeNew.code)"
						class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
						role="menuitem"
					>
						{{ localeNew.name }}
					</button>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from "vue";

	const { locale, locales, setLocale } = useI18n();

	const isOpen = ref(false);

	// Toggle dropdown visibility
	const toggleDropdown = () => {
		isOpen.value = !isOpen.value;
	};

	// Set the selected locale
	const updateLocale = (localeCode) => {
		setLocale(localeCode);
		isOpen.value = false;
	};
</script>

<style scoped>
	/* Add additional styles here if necessary */
</style>
