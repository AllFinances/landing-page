<template>
	<section id="action" class="bg-gray-100 py-16 px-6">
		<div class="container mx-auto text-center">
			<!-- Section Title -->
			<h2 class="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Get in Touch</h2>
			<p class="text-lg text-gray-600 mb-12">We'd love to hear from you! Please fill out the form below and we'll get back to you shortly.</p>
			<!-- Contact Form -->
			<form class="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
				<!-- Email -->
				<div class="mb-6">
					<label for="email" class="block text-left text-gray-700 font-semibold mb-2">Email</label>
					<input
						type="email"
						id="email"
						v-model="form.email"
						placeholder="Enter your email"
						class="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
					/>
				</div>

				<!-- Subject -->
				<div class="mb-6">
					<label for="subject" class="block text-left text-gray-700 font-semibold mb-2">Subject</label>
					<input
						type="text"
						id="subject"
						v-model="form.subject"
						placeholder="Enter your subject"
						class="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
					/>
				</div>

				<!-- Message -->
				<div class="mb-6">
					<label for="message" class="block text-left text-gray-700 font-semibold mb-2">Message</label>
					<textarea
						id="message"
						v-model="form.message"
						rows="6"
						placeholder="Enter your message"
						class="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
					></textarea>
				</div>

				<!-- Submit Button -->
				<div>
					<button
						type="submit"
						@click.prevent="submitForm"
						class="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors"
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
	</section>
</template>

<script lang="ts" setup>
	// Reactive form data
	const form = ref({
		email: "",
		subject: "",
		message: "",
	});

	const submitForm = async () => {
		if (form.value.email && form.value.subject && form.value.message) {
			try {
				// Send form data to the server via /api/email
				const { data, error } = await useFetch("/api/email", {
					method: "POST",
					body: {
						email: form.value.email,
						subject: form.value.subject,
						message: form.value.message,
					},
				});

				if (error.value) {
					console.error("Error sending email:", error.value);
					alert("Failed to send email.");
				} else {
					alert("Email sent successfully!");
					// Reset the form fields
					form.value.email = "";
					form.value.subject = "";
					form.value.message = "";
				}
			} catch (err) {
				console.error("Unexpected error:", err);
				alert("An unexpected error occurred.");
			}
		} else {
			alert("Please fill in all fields.");
		}
	};
</script>
