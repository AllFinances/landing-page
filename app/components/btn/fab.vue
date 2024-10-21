<template>
	<button
		v-if="isVisible"
		@click="scrollToTop"
		class="fixed bottom-3 right-3 bg-blue-500 text-white rounded-full shadow-lg p-2 transition-transform hover:scale-105"
	>
		<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 4.586L13.293 7.879 12.879 8.293 10 5.414 7.121 8.293 6.707 7.879 10 4.586z" />
			<path d="M10 12.586L13.293 15.879 12.879 16.293 10 13.414 7.121 16.293 6.707 15.879 10 12.586z" />
		</svg>
	</button>
</template>

<script setup lang="ts">
	// Visibility state of the button
	const isVisible = ref(false);

	// Check scroll position and update button visibility
	const checkScroll = () => {
		isVisible.value = window.scrollY > 300; // Show button after scrolling down 300px
	};

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	// Attach scroll event listener
	onMounted(() => {
		window.addEventListener("scroll", checkScroll);

		// Clean up the event listener on component unmount
		return () => window.removeEventListener("scroll", checkScroll);
	});
</script>
