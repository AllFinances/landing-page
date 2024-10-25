<template>
	<section id="faq" class="bg-background py-16 px-6">
		<div class="container mx-auto">
			<!-- Section Title -->
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl text-on-background font-bold mb-4">Frequently Asked Questions</h2>
				<p class="text-lg text-on-background">
					Here are some of the most common questions we get asked. If you have more, feel free to reach out.
				</p>
			</div>

			<!-- FAQ Items -->
			<div class="space-y-4">
				<!-- FAQ Item 1 -->
				<div class="bg-surface rounded-lg shadow-lg p-4">
					<button class="w-full text-left text-xl font-semibold text-on-surface focus:outline-none" @click="toggleFaq(1)">
						What is your return policy?
						<span class="float-right transform transition-transform" :class="{ 'rotate-45': activeFaq === 1 }">
							<Icon name="mdi:plus" />
						</span>
					</button>
					<div class="mt-2 text-on-surface" v-show="activeFaq === 1">
						We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it for a full refund within 30
						days of receipt.
					</div>
				</div>

				<!-- FAQ Item 2 -->
				<div class="bg-surface rounded-lg shadow-lg p-4">
					<button class="w-full text-left text-xl font-semibold text-on-surface focus:outline-none" @click="toggleFaq(2)">
						How long does shipping take?
						<span class="float-right transform transition-transform" :class="{ 'rotate-45': activeFaq === 2 }">
							<Icon name="mdi:plus" />
						</span>
					</button>
					<div class="mt-2 text-on-surface" v-show="activeFaq === 2">
						Shipping usually takes between 5-7 business days depending on your location. International orders may take longer.
					</div>
				</div>

				<!-- FAQ Item 3 -->
				<div class="bg-surface rounded-lg shadow-lg p-4">
					<button class="w-full text-left text-xl font-semibold text-on-surface focus:outline-none" @click="toggleFaq(3)">
						Do you offer customer support?
						<span class="float-right transform transition-transform" :class="{ 'rotate-45': activeFaq === 3 }">
							<Icon name="mdi:plus" />
						</span>
					</button>
					<div class="mt-2 text-on-surface" v-show="activeFaq === 3">
						Yes! Our customer support team is available 24/7 to assist you with any questions or issues you may have.
					</div>
				</div>

				<!-- FAQ Item 4 -->
				<div class="bg-surface rounded-lg shadow-lg p-4">
					<button class="w-full text-left text-xl font-semibold text-on-surface focus:outline-none" @click="toggleFaq(4)">
						Can I change my order after placing it?
						<span class="float-right transform transition-transform" :class="{ 'rotate-45': activeFaq === 4 }">
							<Icon name="mdi:plus" />
						</span>
					</button>
					<div class="mt-2 text-on-surface" v-show="activeFaq === 4">
						We can modify your order as long as it hasn’t been shipped yet. Please contact us as soon as possible if you need to make
						changes.
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	// State to track the active FAQ
	const activeFaq = ref<number | null>(null);

	const toggleFaq = (faq: number) => {
		activeFaq.value = activeFaq.value === faq ? null : faq;
	};
</script>
