<template>
	<div class="home">
		<h1>Pick a game!</h1>
		<div id="input-container">
			<!-- <img src="./../assets/search.svg" alt="" srcset="" /> -->
			<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 373.12 373.12" style="enable-background:new 0 0 373.12 373.12;" xml:space="preserve">
				<g>
					<path
						d="M266.667,234.667h-16.96l-5.867-5.867c20.907-24.213,33.493-55.68,33.493-90.133C277.333,62.08,215.253,0,138.667,0
			S0,62.08,0,138.667s62.08,138.667,138.667,138.667c34.453,0,65.92-12.587,90.133-33.387l5.867,5.867v16.853L341.333,373.12
			l31.787-31.787L266.667,234.667z M138.667,234.667c-53.013,0-96-42.987-96-96c0-53.013,42.987-96,96-96c53.013,0,96,42.987,96,96
			C234.667,191.68,191.68,234.667,138.667,234.667z"
					/>
				</g>
			</svg>
			<input type="text" placeholder="or search a game here" v-model="searchQuery" @input="toggleSearchForm" />
		</div>
		<!-- <p>you searched for: {{ searchQuery }}</p> -->
		<div class="icons">
			<GameCard v-for="game in games" :key="game.name" :name="game.name" :image="game.image" :url="game.id" />
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import GameCard from '@/components/GameCard.vue'
	import supportedGames from '@/assets/js/supported_games.js'

	import { ref } from 'vue'

	export default {
		name: 'Home',
		components: {
			GameCard,
		},
		setup() {
			const searchQuery = ref('')
			const games = ref(supportedGames)

			function toggleSearchForm() {
				let searchQueryValue = searchQuery.value
				console.log(searchQueryValue)

				let filtered_games = supportedGames.filter((game) => game.name.toLowerCase()./*startsWith*/ includes(searchQueryValue))

				games.value = filtered_games
			}

			// console.log(games.value)

			return {
				supportedGames,
				searchQuery,
				toggleSearchForm,
				games,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.icons {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		margin: 0 auto;
		text-align: center;
		justify-content: center;
	}

	#input-container {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-content: space-between;

		background: rgb(63, 63, 63);
		padding: 20px;
		width: 240px;
		margin: 0 auto;
		margin-bottom: 20px;

		border-radius: 2px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

		input {
			background: transparent;
			border: none;
			height: 25px;
			color: rgb(219, 219, 219);
			outline: none;
			padding-bottom: 3px;
			font-size: 1.1rem;
			border-bottom: 2px solid rgb(124, 124, 124);

			&:focus {
				border-bottom-color: rgb(192, 192, 192);
			}
		}

		svg {
			g path {
				stroke: rgb(219, 219, 219);
				fill: rgb(219, 219, 219);
			}
			height: 25px;
		}
	}
</style>
