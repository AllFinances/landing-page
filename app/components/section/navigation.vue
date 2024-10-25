<template>
	<nav class="fixed top-0 left-0 w-full bg-surface/40 backdrop-blur-md shadow-lg z-50">
		<div class="container mx-auto flex justify-between items-center py-2 px-3">
			<!-- Centered Navigation Links -->
			<div class="flex justify-center space-x-8 md:ml-16">
				<a href="#process" class="text-on-surface font-bold hover:text-secondary">How</a>
				<a href="#details" class="text-on-surface font-bold hover:text-secondary">About</a>
				<a href="#faq" class="text-on-surface font-bold hover:text-secondary">FAQ</a>
			</div>

			<!-- Language and Theme Switch (Aligned Right) -->
			<div class="ml-auto flex space-x-4 md:mr-16">
				<btn-language></btn-language>
				<btn-theme-switch></btn-theme-switch>
			</div>
		</div>
	</nav>
</template>
