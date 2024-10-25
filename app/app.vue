<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script lang="ts" setup>
	const { locale } = useI18n();

	useHead({
		bodyAttrs: {
			id: "app",
		},
		title: `Flowture | ${locale.value.toUpperCase()}`,
	});

	watch(
		() => locale.value,
		(newValue) => {
			if (newValue) {
				useHead({
					title: `Flowture | ${locale.value.toUpperCase()}`,
				});
			}
		}
	);

	const sessionStore = useSessionStore();

	onMounted(async () => {
		sessionStore.loadSessionPlatform();
		await sessionStore.loadSessionLocation();
	});
</script>
