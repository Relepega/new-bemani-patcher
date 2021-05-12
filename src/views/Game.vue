<template>
	<!-- <p>{{ pagename }}</p> -->
	<!-- <p>{{ selected_game }}</p> -->
	<Patcher :patchContainers="getPatches()" :gamename="gamename" />
</template>

<script>
	import supportedGames from '@/supported_games.js'
	import Patcher from '@/components/Patcher.vue'

	export default {
		name: 'Game',
		components: {
			Patcher,
		},
		props: {
			pagename: String,
		},
		methods: {
			loadPlugin(path) {
				const plugin = document.createElement('script')
				plugin.setAttribute('src', path)
				plugin.async = true
				document.head.appendChild(plugin)
			},
			getPatches() {
				return this.selected_game[0].patchers
			},
		},
		mounted() {
			// this.loadPlugin('@/assets/js/jquery-3.6.0.slim.min.js')
			// this.loadPlugin('@/assets/js/FileSaver.js')
			// this.loadPlugin('@/assets/js/dllpatcher.js')
		},
		setup(props) {
			let selected_game = supportedGames.filter((game) => game.id == props.pagename)

			return {
				selected_game,
				gamename: selected_game[0].name,
			}
		},
	}
</script>

<style></style>
