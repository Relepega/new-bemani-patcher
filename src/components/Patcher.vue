<template>
	<h1>{{ gamename }} Modder</h1>
</template>

<script>
	/*eslint-disable-next-line*/
	import { StandardPatch, UnionPatch, PatchContainer, Patcher } from '@/assets/js/dllpatcher.js'

	export default {
		name: 'Patcher',
		props: {
			patchContainers: Array,
			gamename: String,
		},
		mounted() {
			let patchContainers = this.patchContainers

			for (let i = 0; i < patchContainers.length; i++) {
				let patchContainer = patchContainers[i]
				let patcherInstances = []

				for (let j = 0; j < patchContainer.length; j++) {
					let app = patchContainer[j]
					const { appname, version, patches } = app
					patcherInstances.push(new Patcher(appname, version, patches))
				}

				new PatchContainer(patcherInstances)
			}
		},
	}
</script>

<style></style>
