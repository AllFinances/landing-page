<template>
	<section id="action" class="bg-background py-16 px-6">
		<div class="container mx-auto text-center">
			<!-- Section Title -->
			<h2 class="text-3xl md:text-4xl font-bold mb-8 text-on-background">Get in Touch</h2>
			<p class="text-lg text-on-background mb-12">
				We'd love to hear from you! Please fill out the form below and we'll get back to you shortly.
			</p>
			<form class="max-w-2xl mx-auto bg-surface shadow-lg rounded-lg p-8">
				<!-- Email -->
				<div class="mb-6">
					<label for="email" class="block text-left text-on-surface font-semibold mb-2">Email</label>
					<input type="email" id="email" v-model="email" placeholder="Enter your email"
						class="w-full border bg-surface text-on-surface rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
				</div>

				<!-- Submit Button -->
				<div>
					<button type="submit" @click.prevent="submitForm"
						class="w-full bg-primary text-on-primary font-bold py-3 rounded-lg hover:bg-primary-variant transition-colors">
						Subscribe
					</button>
				</div>
			</form>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const sessionStore = useSessionStore();

	const email = ref("");

	const submitForm = async () => {
		await sessionStore.subscribeUser(email.value);
	};
</script>
