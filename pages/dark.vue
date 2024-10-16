<template>
	<div class="bg-dark text-white">
		<!-- Hero Section -->
		<section class="bg-darker py-16 text-center">
			<div class="container mx-auto px-6">
				<h1 class="text-5xl font-bold mb-6 text-accent2">Unlock Your Business Potential, Hi edgars</h1>
				<p class="text-lg mb-10 text-gray-300">Discover the solutions that elevate your business to new heights.</p>
				<button class="bg-accent2 text-black font-bold px-8 py-4 rounded-lg hover:bg-lightaccent2 transition duration-300">
					Get Started
				</button>
			</div>
		</section>

		<!-- USP Section -->
		<section class="py-16">
			<div class="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
				<div class="bg-darker p-8 rounded-lg shadow-lg hover:bg-dark transition duration-300">
					<h3 class="text-2xl font-bold mb-4 text-accent2">Fast Delivery</h3>
					<p class="text-gray-400">Quick turnaround to meet your needs.</p>
				</div>
				<div class="bg-darker p-8 rounded-lg shadow-lg hover:bg-dark transition duration-300">
					<h3 class="text-2xl font-bold mb-4 text-accent2">High Quality</h3>
					<p class="text-gray-400">Premium service guaranteed.</p>
				</div>
				<div class="bg-darker p-8 rounded-lg shadow-lg hover:bg-dark transition duration-300">
					<h3 class="text-2xl font-bold mb-4 text-accent2">Affordable Pricing</h3>
					<p class="text-gray-400">Solutions that fit your budget.</p>
				</div>
			</div>
		</section>

		<!-- Pricing Section -->
		<section class="bg-dark py-16 text-center">
			<div class="container mx-auto px-6">
				<h2 class="text-3xl font-bold mb-12 text-accent2">Choose Your Plan</h2>
				<div class="grid md:grid-cols-3 gap-8">
					<!-- Basic Plan -->
					<div class="bg-darker p-8 rounded-lg shadow-lg hover:bg-dark transition duration-300">
						<h3 class="text-2xl font-bold mb-4 text-accent2">Basic</h3>
						<p class="mb-8 text-lightaccent2">$9/month</p>
						<ul class="mb-8 text-gray-400">
							<li class="mb-2">Basic features</li>
							<li class="mb-2">Email support</li>
							<li class="mb-2">Single user</li>
						</ul>
						<button class="bg-accent2 text-black font-bold px-6 py-3 rounded-lg hover:bg-lightaccent2 transition duration-300">
							Choose Basic
						</button>
					</div>

					<!-- Pro Plan -->
					<div class="bg-darker p-8 rounded-lg shadow-lg hover:bg-dark transition duration-300">
						<h3 class="text-2xl font-bold mb-4 text-accent2">Pro</h3>
						<p class="mb-8 text-lightaccent2">$29/month</p>
						<ul class="mb-8 text-gray-400">
							<li class="mb-2">All features</li>
							<li class="mb-2">Priority support</li>
							<li class="mb-2">Multiple users</li>
						</ul>
						<button class="bg-accent2 text-black font-bold px-6 py-3 rounded-lg hover:bg-lightaccent2 transition duration-300">
							Choose Pro
						</button>
					</div>

					<!-- Enterprise Plan -->
					<div class="bg-darker p-8 rounded-lg shadow-lg hover:bg-dark transition duration-300">
						<h3 class="text-2xl font-bold mb-4 text-accent2">Enterprise</h3>
						<p class="mb-8 text-lightaccent2">$99/month</p>
						<ul class="mb-8 text-gray-400">
							<li class="mb-2">Custom features</li>
							<li class="mb-2">24/7 support</li>
							<li class="mb-2">Enterprise license</li>
						</ul>
						<button class="bg-accent2 text-black font-bold px-6 py-3 rounded-lg hover:bg-lightaccent2 transition duration-300">
							Choose Enterprise
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- About Section -->
		<section class="py-16">
			<div class="container mx-auto px-6 text-center">
				<h2 class="text-3xl font-bold mb-4 text-accent2">About Us</h2>
				<p class="text-lg text-gray-400 mb-8">We are a dedicated team offering tailored solutions to help businesses grow efficiently.</p>
			</div>
		</section>

		<!-- Contact Section -->
		<section class="bg-darker py-16 text-center">
			<div class="container mx-auto px-6">
				<h2 class="text-3xl font-bold mb-4 text-accent2">Contact Us</h2>
				<p class="text-gray-400 mb-8">Feel free to reach out for any inquiries.</p>
				<a href="mailto:info@example.com" class="block text-lg text-lightaccent2 mb-2">info@example.com</a>
				<a href="tel:+1234567890" class="block text-lg text-lightaccent2">+1 (234) 567-890</a>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
	// No specific script logic is needed
</script>

<style scoped>
	/* Add any additional custom styles if necessary */
</style>
