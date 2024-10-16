<template>
	<div>
		<h1 class="text-3xl font-bold underline">{{ testVar }}</h1>
		<p class="font-sans bg-[#50d71e]">The quick brown fox ...</p>
		<p class="font-serif">The quick brown fox ...</p>
		<p class="font-mono bg-[#50d71e]">The quick brown fox ...</p>
		<div v-if="!isLoading">
			<span class="relative inline-flex">
				<button
					type="button"
					class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-not-allowed ring-1 ring-slate-900/10 dark:ring-slate-200/20"
				>
					Transactions
				</button>
				<span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
					<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
				</span>
			</span>
			<br />
			<button class="bg-cyan-500 hover:bg-cyan-600">Subscribe</button>

			<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
				<div class="animate-pulse flex space-x-4">
					<div class="rounded-full bg-slate-700 h-10 w-10"></div>
					<div class="flex-1 space-y-6 py-1">
						<div class="h-2 bg-slate-700 rounded"></div>
						<div class="space-y-3">
							<div class="grid grid-cols-3 gap-4">
								<div class="h-2 bg-slate-700 rounded col-span-2"></div>
								<div class="h-2 bg-slate-700 rounded col-span-1"></div>
							</div>
							<div class="h-2 bg-slate-700 rounded"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const testVar = ref<string>("");
	const isLoading = ref<boolean>(true);

	// Page/component lifecycle hook
	onBeforeMount(() => {
		testVar.value = "loading hello world";
	});

	// Page/component lifecycle hook
	onMounted(() => {
		setTimeout(() => {
			testVar.value = "Hello World!";
			isLoading.value = false;
		}, 3_000);
	});
</script>
