<template>
	<!-- Hero Section -->
	<section id="hero" class="bg-background">
		<div class="container mx-auto flex flex-col md:flex-row items-center py-8 px-6 mt-6 md:px-12 lg:px-24">
			<!-- Left Content (Text) -->
			<div class="md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
				<h1 class="text-on-background text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
					{{ $t("sections.hero.title") }}
				</h1>
				<p class="text-lg md:text-xl lg:text-2xl text-on-background mb-6">
					{{ $t("sections.hero.subtitle") }}
				</p>
				<a href="#action"
					class="bg-primary text-on-primary py-3 px-6 rounded-lg hover:bg-primary-variant transition duration-300">
					{{ $t("sections.hero.action") }}
				</a>
			</div>

			<!-- Right Content (Image) -->
			<div class="md:w-1/2" style="min-height: 500px">
				<div class="w-full h-auto flex justify-center align-middle">
					<img src="https://placehold.co/600x400.png" alt="Hero Image"
						class="w-full h-auto object-cover rounded-lg" />
				</div>
			</div>
		</div>
	</section>
</template>
