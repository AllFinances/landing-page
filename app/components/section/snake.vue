<template>
	<div class="flex justify-center items-center h-screen bg-gray-100">
		<div>
			<div ref="board" class="grid" :style="boardStyle">
				<div
					v-for="(cell, index) in grid"
					:key="index"
					:class="{
						'bg-green-500': cell.isSnake,
						'bg-red-500': cell.isFood,
						'border border-gray-200': true,
					}"
					class="w-6 h-6"
				></div>
			</div>
			<div class="flex justify-center mt-4">
				<button class="px-4 py-2 bg-blue-500 text-white rounded" @click="startGame">Start Game</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted, reactive } from "vue";

	const boardSize = 20;
	const grid = reactive([]); // to hold the game grid
	const snake = reactive([{ x: 10, y: 10 }]); // initial snake position
	const food = ref({ x: 5, y: 5 }); // initial food position
	const direction = ref("RIGHT"); // snake direction
	let interval = null;

	const boardStyle = {
		gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))`,
		gap: "1px",
	};

	const createGrid = () => {
		grid.length = 0;
		for (let y = 0; y < boardSize; y++) {
			for (let x = 0; x < boardSize; x++) {
				grid.push({
					x,
					y,
					isSnake: snake.some((s) => s.x === x && s.y === y),
					isFood: food.value.x === x && food.value.y === y,
				});
			}
		}
	};

	const moveSnake = () => {
		const head = { ...snake[0] };

		if (direction.value === "UP") head.y -= 1;
		if (direction.value === "DOWN") head.y += 1;
		if (direction.value === "LEFT") head.x -= 1;
		if (direction.value === "RIGHT") head.x += 1;

		snake.unshift(head);

		// Check if snake eats the food
		if (head.x === food.value.x && head.y === food.value.y) {
			placeFood();
		} else {
			snake.pop(); // remove tail if no food eaten
		}

		createGrid();
	};

	const placeFood = () => {
		food.value.x = Math.floor(Math.random() * boardSize);
		food.value.y = Math.floor(Math.random() * boardSize);
	};

	const startGame = () => {
		snake.length = 1;
		snake[0] = { x: 10, y: 10 };
		direction.value = "RIGHT";
		placeFood();

		if (interval) clearInterval(interval);
		interval = setInterval(() => {
			moveSnake();
		}, 200);
	};

	const handleKeydown = (e) => {
		if (e.key === "ArrowUp" && direction.value !== "DOWN") direction.value = "UP";
		if (e.key === "ArrowDown" && direction.value !== "UP") direction.value = "DOWN";
		if (e.key === "ArrowLeft" && direction.value !== "RIGHT") direction.value = "LEFT";
		if (e.key === "ArrowRight" && direction.value !== "LEFT") direction.value = "RIGHT";
	};

	onMounted(() => {
		window.addEventListener("keydown", handleKeydown);
		createGrid();
	});
</script>

<style scoped>
	.grid {
		display: grid;
		width: 240px;
		height: 240px;
	}
</style>
