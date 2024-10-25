<template>
	<!-- <span> [{{ props.session.ip }}] {{ location }} </span> -->
	<span>
		<p v-if="sessionUA.os">
			{{ sessionUA.os }}
			{{ sessionUA.name }}
			{{ sessionUA.version }}
		</p>
		<p v-if="sessionLocation">
			{{ sessionLocation.geoplugin_countryName }}
			{{ sessionLocation.geoplugin_city }}
		</p>
	</span>
</template>

<script lang="ts" setup>
	const sessionStore = useSessionStore();

	onMounted(async () => {
		sessionStore.loadSessionPlatform();
		await sessionStore.loadSessionLocation();
	});

	const sessionLocation = computed(() => sessionStore.getSessionLocation);
	const sessionUA = computed(() => sessionStore.getSessionUA);
</script>
