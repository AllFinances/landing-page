<template>
	<div class="bg-background">
		<!-- Hero Section -->
		<section class="bg-primary text-white py-16">
			<div class="container mx-auto px-6 text-center">
				<h1 class="text-5xl font-heading font-bold mb-6">Welcome to Our Service</h1>
				<p class="mb-8 text-lg">We provide the best solutions to help you grow your business.</p>
				<button class="bg-white text-primary font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200">Get Started</button>
			</div>
		</section>

		<!-- USP Section  -->
		<section class="py-16">
			<div class="container mx-auto px-6">
				<div class="grid md:grid-cols-3 gap-8 text-center">
					<div class="bg-white p-8 shadow-xl rounded-2xl">
						<h3 class="text-3xl font-heading font-bold mb-4">Fast Delivery</h3>
						<p>Quick turnaround times to meet your business needs efficiently.</p>
					</div>
					<div class="bg-white p-8 shadow-xl rounded-2xl">
						<h3 class="text-3xl font-heading font-bold mb-4">High Quality</h3>
						<p>We ensure top-notch quality in all of our services.</p>
					</div>
					<div class="bg-white p-8 shadow-xl rounded-2xl">
						<h3 class="text-3xl font-heading font-bold mb-4">Affordable Pricing</h3>
						<p>Best value for money with our competitive pricing packages.</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Pricing Section -->
		<section class="bg-gray-100 py-16">
			<div class="container mx-auto px-6 text-center">
				<h2 class="text-4xl font-heading font-bold mb-12">Choose Your Plan</h2>
				<div class="grid md:grid-cols-3 gap-8">
					<!-- Basic Plan -->
					<div class="bg-white p-10 shadow-xl rounded-xl">
						<h3 class="text-3xl font-heading font-bold mb-4">Basic</h3>
						<p class="mb-8 text-lg">$9/month</p>
						<ul class="mb-8">
							<li class="mb-2">Access to basic features</li>
							<li class="mb-2">Email support</li>
							<li class="mb-2">Single user license</li>
						</ul>
						<button class="bg-primary text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-secondary">Choose Basic</button>
					</div>

					<!-- Pro Plan -->
					<div class="bg-white p-10 shadow-xl rounded-xl">
						<h3 class="text-3xl font-heading font-bold mb-4">Pro</h3>
						<p class="mb-8 text-lg">$29/month</p>
						<ul class="mb-8">
							<li class="mb-2">Access to all features</li>
							<li class="mb-2">Priority email support</li>
							<li class="mb-2">Multiple users license</li>
						</ul>
						<button class="bg-primary text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-secondary">Choose Pro</button>
					</div>

					<!-- Enterprise Plan -->
					<div class="bg-white p-10 shadow-xl rounded-xl">
						<h3 class="text-3xl font-heading font-bold mb-4">Enterprise</h3>
						<p class="mb-8 text-lg">$99/month</p>
						<ul class="mb-8">
							<li class="mb-2">Custom features</li>
							<li class="mb-2">24/7 phone support</li>
							<li class="mb-2">Enterprise license</li>
						</ul>
						<button class="bg-primary text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-secondary">
							Choose Enterprise
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- About Section -->
		<section class="py-16">
			<div class="container mx-auto px-6 text-center">
				<h2 class="text-4xl font-heading font-bold mb-4">About Us</h2>
				<p class="mb-8 text-lg">
					We are a team of professionals committed to delivering high-quality solutions to our clients. Our mission is to empower businesses
					with efficient and affordable services.
				</p>
			</div>
		</section>

		<!-- Contact Section -->
		<section class="bg-primary text-white py-16">
			<div class="container mx-auto px-6 text-center">
				<h2 class="text-4xl font-heading font-bold mb-4">Contact Us</h2>
				<p class="mb-8">Have any questions? Reach out to us via email or phone.</p>
				<a href="mailto:info@example.com" class="block text-lg font-semibold mb-2">info@example.com</a>
				<a href="tel:+1234567890" class="block text-lg font-semibold">+1 (234) 567-890</a>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
	// No specific script logic needed for this basic layout.
</script>

<style scoped>
	/* Add any scoped custom styles if needed */
</style>
