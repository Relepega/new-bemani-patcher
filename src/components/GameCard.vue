<template>
	<a :href="gameurl" class="gameicon">
		<div>
			<img :src="gameimage" />
			<div>{{ name }}</div>
		</div>
	</a>
</template>

<script>
	export default {
		name: 'GameCard',
		props: {
			name: String,
			image: String,
			url: String,
		},
		setup(props) {
			return {
				gameimage: require('/src/assets/game_icons/' + props.image),
				gameurl: '/game/?name=' + props.url,
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.gameicon,
	.patchContainer {
		border-radius: 2px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		color: inherit;
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
		background: rgb(63, 63, 63) !important;
	}

	.gameicon {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		margin: 15px;
		width: 144px;
		padding: 10px;
		justify-content: center;
		color: rgb(219, 219, 219);

		img {
			margin-bottom: 10px;
			border-radius: 2px;
			width: 128px;
			height: 128px;
			box-shadow: 0 2px 1px rgba(0, 0, 0, 0.24), 0 0px 1px rgba(0, 0, 0, 0.48);
			align-self: center;
			margin-top: 5px;
		}

		div {
			height: 100%;
			display: flex;
			flex-direction: column;

			div {
				margin-top: auto;
				margin-bottom: auto;
			}
		}
	}

	.gameicon:hover,
	.dragover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
</style>
