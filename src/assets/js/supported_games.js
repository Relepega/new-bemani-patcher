import beatmania from './SupportedGames/beatmania'
import beatstream from './SupportedGames/beatstream'
import bombergirl from './SupportedGames/bombergirl'
import chunithm from './SupportedGames/chunithm'
import ddr from './SupportedGames/ddr'
import gitadora from './SupportedGames/gitadora'
import groove_coaster from './SupportedGames/groove_coaster'
import guitarfreaks_drummania from './SupportedGames/guitarfreaks_drummania'
import jubeat from './SupportedGames/jubeat'
import museca from './SupportedGames/museca'
import nostalgia from './SupportedGames/nostalgia'
import popnmusic from './SupportedGames/popnmusic'
import reflecbeat from './SupportedGames/reflecbeat'
import soundvoltex from './SupportedGames/soundvoltex'

// API:
//{
// id: String, 						// game id
// name: String, 					// game name
// image: String, 					// game icon
// patchers: [						// array of PatchContainers
// 	[ 								// array for PatchContainer
// 		{							// object containing Patcher data
// 			appname: String,		// app entryfile
// 			version: String,		// app version
// 			patches: Array, 		// patches available in the Patcher
// 		},
// 	],
// 	[],								// array for PatchContainer
// 	...								// and so on...
// ],
//},
// {
// 	id: '',
// 	name: '',
// 	image: '',
// 	patchers: [
// 		[
// 			{
// 				appname: '',
// 				version: '',
// 				patches: [],
// 			},
// 		],
// 	],
// },

const supportedGames = []
	.concat(beatmania)
	.concat(beatstream)
	.concat(bombergirl)
	.concat(chunithm)
	.concat(ddr)
	.concat(gitadora)
	.concat(groove_coaster)
	.concat(guitarfreaks_drummania)
	.concat(jubeat)
	.concat(museca)
	.concat(nostalgia)
	.concat(popnmusic)
	.concat(reflecbeat)
	.concat(soundvoltex)

export default supportedGames
