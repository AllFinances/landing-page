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
		htmlAttrs: {
			lang: locale.value,
		},
		title: `Flowture | ${locale.value.toUpperCase()}`,
		meta: [{ property: "og:title", content: `Flowture | ${locale.value.toUpperCase()}` }],
	});

	watch(
		() => locale.value,
		(newValue) => {
			if (newValue) {
				useHead({
					htmlAttrs: {
						lang: locale.value,
					},
					title: `Flowture | ${locale.value.toUpperCase()}`,
					meta: [{ property: "og:title", content: `Flowture | ${locale.value.toUpperCase()}` }],
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
