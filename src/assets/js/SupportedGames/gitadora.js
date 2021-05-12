const gitadora = [
	{
		id: 'gitadoraod',
		name: 'GITADORA OverDrive',
		image: 'od.png',
		patchers: [
			[
				{
					appname: 'game.dll',
					version: '',
					patches: [
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0xbce7, off: [0x0f, 0x85, 0xaa, 0x01, 0x00, 0x00], on: [0xe9, 0xab, 0x01, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'Stage Freeze',
							patches: [{ offset: 0x146fc1, off: [0x0f, 0x85, 0xfb, 0x01, 0x00, 0x00], on: [0xe9, 0xfc, 0x01, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'Unlock all songs',
							patches: [
								{ offset: 0x1d1aca, off: [0x5b, 0x00], on: [0x4d, 0x01] },
								{ offset: 0x1d1ae2, off: [0x5d, 0x00], on: [0x4d, 0x01] },
								{ offset: 0x14ef54, off: [0x75, 0x16], on: [0xeb, 0x23] },
							],
						},
						{
							name: 'Enable Long Music',
							patches: [{ offset: 0x14f094, off: [0x75, 0x03], on: [0x90, 0x90] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'gitadoratb',
		name: 'GITADORA Tri-Boost',
		image: 'tb.png',
		patchers: [
			[
				{
					appname: 'game.dll',
					version: '',
					patches: [
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0xbc17, off: [0x0f, 0x85, 0xaa, 0x01, 0x00, 0x00], on: [0xe9, 0xab, 0x01, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'Stage Freeze',
							patches: [{ offset: 0x14b551, off: [0x0f, 0x85, 0xfb, 0x01, 0x00, 0x00], on: [0xe9, 0xfc, 0x01, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'Unlock all songs',
							patches: [
								{ offset: 0x1d6c4a, off: [0x5b, 0x00], on: [0x4d, 0x01] },
								{ offset: 0x1d6c62, off: [0x5d, 0x00], on: [0x4d, 0x01] },
								{ offset: 0x153904, off: [0x75, 0x16], on: [0xeb, 0x23] },
							],
						},
						{
							name: 'Enable Long Music',
							patches: [{ offset: 0x153a44, off: [0x75, 0x03], on: [0x90, 0x90] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'gitadoratbre',
		name: 'GITADORA Tri-Boost Re:EVOLVE',
		image: 'tbre.png',
		patchers: [
			[
				{
					appname: 'game.dll',
					version: '',
					patches: [
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0xbc37, off: [0x0f, 0x85, 0xaa, 0x01, 0x00, 0x00], on: [0xe9, 0xab, 0x01, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'Stage Freeze',
							tooltip: 'NOT COMPATIBLE FOR USE ON NETWORKS',
							patches: [{ offset: 0x14c991, off: [0x0f, 0x85, 0xfb, 0x01, 0x00, 0x00], on: [0xe9, 0xfc, 0x01, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'Unlock all songs',
							patches: [
								{ offset: 0x1da0ea, off: [0x5b, 0x00], on: [0x4d, 0x01] },
								{ offset: 0x1da102, off: [0x5d, 0x00], on: [0x4d, 0x01] },
								{ offset: 0x154934, off: [0x75, 0x16], on: [0xeb, 0x23] },
							],
						},
						{
							name: 'Enable Long Music',
							patches: [{ offset: 0x154a74, off: [0x75, 0x03], on: [0x90, 0x90] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'gitadoramatixx',
		name: 'GITADORA Matixx',
		image: 'matixx.png',
		patchers: [
			[
				{
					appname: 'game.dll',
					version: '',
					patches: [
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0xbc37, off: [0x0f, 0x85, 0xaa, 0x01, 0x00, 0x00], on: [0xe9, 0xab, 0x01, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'Stage Freeze',
							patches: [{ offset: 0x1595e1, off: [0x0f, 0x85, 0xfb, 0x01, 0x00, 0x00], on: [0xe9, 0xfc, 0x01, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'Unlock all songs',
							tooltip: 'Unlocks all e-amusement songs',
							patches: [
								{ offset: 0x1eaefa, off: [0x71, 0x00], on: [0x4d, 0x01] },
								{ offset: 0x1eaf12, off: [0x73, 0x00], on: [0x4d, 0x01] },
								{ offset: 0x162ff4, off: [0x75, 0x16], on: [0xeb, 0x23] },
							],
						},
						{
							name: 'Enable Long Music',
							patches: [{ offset: 0x163134, off: [0x75, 0x03], on: [0x90, 0x90] }],
						},
					],
				},
				{
					appname: 'libshare-pj.dll',
					version: '',
					patches: [
						{
							name: 'Fix IP change error',
							patches: [{ offset: 0x23375, off: [0x74], on: [0xeb] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'gitadoraexchain',
		name: 'GITADORA EXCHAIN',
		image: 'exchain.png',
		patchers: [
			[
				{
					appname: 'game.dll',
					version: '',
					patches: [
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0xbc27, off: [0x0f, 0x85, 0xaa, 0x01, 0x00, 0x00], on: [0xe9, 0xab, 0x01, 0x00, 0x00, 0x90] }],
						},
					],
				},
				{
					appname: 'libshare-pj.dll',
					version: '',
					patches: [
						{
							name: 'Fix "IP CHANGE ERROR"',
							patches: [{ offset: 0x23305, off: [0x74], on: [0xeb] }],
						},
					],
				},
			],
		],
	},
]

export default gitadora
