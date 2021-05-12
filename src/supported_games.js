const supportedGames = [
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
	{
		id: 'beatstream1',
		name: 'BeatStream',
		image: 'beatstream.png',
		patchers: [
			[
				{
					appname: 'beatstream.dll',
					version: '2015-12-01',
					patches: [
						{
							name: 'E: drive fix',
							tooltip: 'Fix crash caused by no E: drive',
							patches: [
								{
									offset: 0xb6a994,
									off: [0x65, 0x3a, 0x2f],
									on: [0x64, 0x65, 0x76],
								},
							],
						},
						{
							name: 'Unlock all songs',
							patches: [
								{
									offset: 0x1740b6,
									off: [0x48, 0x83, 0xfd, 0x10, 0x72, 0x09, 0x48, 0x8d, 0x79, 0x08],
									on: [0xbb, 0x00, 0x00, 0x00, 0x00, 0xe9, 0xae, 0x01, 0x00, 0x00],
								},
							],
						},
					],
				},
			],
		],
	},
	{
		id: 'beatstream2',
		name: 'BeatStream アニムトライヴ',
		image: 'beatstream2.png',
		patchers: [
			[
				{
					appname: 'beatstream.dll',
					version: '2016-11-14',
					patches: [
						{
							name: 'E: drive fix',
							tooltip: 'Fix crash caused by no E: drive',
							patches: [{ offset: 0x8645fc, off: [0x65, 0x3a, 0x2f], on: [0x64, 0x65, 0x76] }],
						},
						{
							name: 'Unlock all songs',
							patches: [
								{
									offset: 0x16ccb1,
									off: [0x48, 0x83, 0xfd, 0x10, 0x72, 0x03, 0x48, 0x8b, 0x09, 0x41],
									on: [0xbe, 0x00, 0x00, 0x00, 0x00, 0xe9, 0x3a, 0x01, 0x00, 0x00],
								},
							],
						},
						{
							name: 'NIGHTMARE difficulty unlock',
							patches: [
								{
									offset: 0x16eade,
									off: [0x8b, 0xcb, 0xe8, 0xdb, 0xb4, 0x0e],
									on: [0xb0, 0x01, 0xe9, 0xad, 0x00, 0x00],
								},
							],
						},
					],
				},
			],
		],
	},
	{
		id: 'bombergirl',
		name: 'BomberGirl PC (eacloud)',
		image: 'bombergirl.png',
		patchers: [
			[
				{
					appname: 'GameAssembly.dll',
					version: '2021-01-05',
					patches: [
						{
							// By HenTaku
							name: 'Fix Stuck When Saving',
							patches: [
								{ offset: 0xeb60e8, off: [0x0f, 0x84, 0x20, 0x03, 0x00, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] },
								{ offset: 0xeb60fc, off: [0x0f, 0x84, 0x06, 0x03, 0x00, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] },
								{ offset: 0xeb6105, off: [0x0f, 0x84, 0xf7, 0x02, 0x00, 0x00, 0x8b, 0x49, 0x10, 0x89, 0x48, 0x1c, 0x49, 0x8b, 0x5d, 0x28, 0x48, 0x89, 0x5c, 0x24, 0x38, 0x48, 0x85, 0xdb, 0x0f, 0x84, 0x1c, 0x02, 0x00, 0x00], on: [0xe9, 0x1d, 0x02, 0x00, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] },
							],
						},
						{
							// By HenTaku
							name: 'Freeze Timer',
							patches: [{ offset: 0x11ce07c, off: [0xf3, 0x0f, 0x11, 0x73, 0x2c], on: [0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// By HenTaku
							name: 'Disable Tutorial Dialog Popup',
							patches: [{ offset: 0x1960118, off: [0x70, 0x62], on: [0x60, 0x61] }],
						},
						{
							name: 'Unlock Accessories',
							tooltip: 'First pages of head accessories are empty somehow.',
							patches: [{ offset: 0xc7d100, off: [0x40, 0x57, 0x48, 0x83, 0xec, 0x40], on: [0xb8, 0x01, 0x00, 0x00, 0x00, 0xc3] }],
						},
						{
							name: 'Unlock Chat Voices',
							patches: [{ offset: 0xea0b60, off: [0x48, 0x89, 0x5c, 0x24, 0x08, 0x48], on: [0xb8, 0x01, 0x00, 0x00, 0x00, 0xc3] }],
						},
						{
							name: 'Unlock Characters',
							tooltip: 'You still need patched resources.assets to unlock the last 5 characters',
							patches: [
								{ offset: 0x4abfa0, off: [0x0f, 0xb6, 0x41, 0x15, 0xc3, 0xcc], on: [0xb8, 0x01, 0x00, 0x00, 0x00, 0xc3] },
								{ offset: 0xfb6e2e, off: [0x74, 0x04, 0x0f, 0xb6, 0x41, 0x14], on: [0xb8, 0x01, 0x00, 0x00, 0x00, 0x90] },
								{ offset: 0xfb6efb, off: [0x80, 0x78, 0x14, 0x00, 0x74, 0x0b], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] },
							],
						},
						{
							name: 'Unlock Skills',
							patches: [
								{ offset: 0x5b1ae0, off: [0x0f, 0xb6, 0x41, 0x14, 0xc3, 0xcc], on: [0xb8, 0x01, 0x00, 0x00, 0x00, 0xc3] },
								{ offset: 0xfbc360, off: [0x40, 0x57, 0x48, 0x83, 0xec, 0x40], on: [0xb8, 0x01, 0x00, 0x00, 0x00, 0xc3] },
							],
						},
						{
							// By HenTaku
							name: 'Skip Gacha',
							tooltip: 'Only work when the unlock patches above are applied',
							patches: [
								{ offset: 0x124b026, off: [0x0f, 0x85, 0x89, 0x00, 0x00, 0x00], on: [0xe9, 0x8a, 0x00, 0x00, 0x00, 0x90] },
								{ offset: 0x124b0c4, off: [0x75], on: [0xeb] },
							],
						},
						{
							// By HenTaku
							name: 'Unlock Missions',
							patches: [
								{ offset: 0xfb6f70, off: [0x48, 0x83, 0xec, 0x28], on: [0xb0, 0x01, 0xc3, 0x90] },
								{ offset: 0xfbbd00, off: [0x40, 0x53, 0x48, 0x83, 0xec, 0x40], on: [0xb8, 0x02, 0x00, 0x00, 0x00, 0x90] },
							],
						},
					],
				},
			],
		],
	},
	{
		id: 'chuni',
		name: 'CHUNITHM',
		image: 'chuni.png',
		patchers: [
			[
				{
					appname: 'chuniApp.exe',
					version: '(1.00.00)',
					patches: [
						{
							// mon
							name: 'Allow 127.0.0.1 as the network server',
							patches: [
								{ offset: 0x766e80, off: [0x55, 0x8b, 0xec], on: [0x31, 0xc0, 0xc3] },
								{ offset: 0x13b63e8, off: [0x31, 0x32, 0x37, 0x2f], on: [0x30, 0x2f, 0x38, 0x00] },
							],
						},
						{
							// mon
							name: 'Disable shop close lockout',
							tooltip: 'Disables ~12-8am lockout. Does not disable maint lockout from 6:30-7am JST',
							patches: [{ offset: 0x78ea23, off: [0x74], on: [0xeb] }],
						},
						{
							// somewhatlurker
							name: 'Force shared audio mode, system audio samplerate must be 48000',
							tooltip: 'Improves compatibility but may increase latency',
							patches: [{ offset: 0xb512ca, off: [0x01], on: [0x00] }],
						},
						{
							// somewhatlurker
							name: 'Force 2 channel audio output',
							patches: [{ offset: 0xb513a1, off: [0x75, 0x3f], on: [0x90, 0x90] }],
						},
						{
							name: 'Patch for Windows 7',
							tooltip: 'May not be able to connect to the server',
							patches: [
								{ offset: 0x16d484e, off: [0x45, 0x78], on: [0x5f, 0x41] },
								{ offset: 0x16d4857, off: [0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x51, 0x75, 0x65, 0x72, 0x79], on: [0x51, 0x75, 0x65, 0x72, 0x79, 0x5f, 0x41, 0x00, 0x00, 0x00, 0x00] },
							],
						},
						{
							// lybxlpsv
							name: 'Disable Song Select Timer',
							tooltip: 'May only work when playing with card.',
							patches: [{ offset: 0x5aea62, off: [0x74], on: [0xeb] }],
						},
						{
							// esterTion
							name: 'Set All Timers to 999',
							patches: [{ offset: 0x4d5280, off: [0x8b, 0x44, 0x24, 0x04, 0x69, 0xc0, 0xe8, 0x03, 0x00, 0x00], on: [0xb8, 0x58, 0x3e, 0x0f, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// lin714093880 & esterTion
							name: 'Better patch for head-to-head play',
							tooltip: 'Fix infinite sync while trying to connect to head to head play.',
							patches: [{ offset: 0x3e5e13, off: [0x01], on: [0x00] }],
						},
					],
				},
				{
					appname: 'chuniApp.exe',
					version: '(1.01.00)',
					patches: [
						{
							// mon
							name: 'Allow 127.0.0.1 as the network server',
							patches: [
								{ offset: 0x766ed0, off: [0x55, 0x8b, 0xec], on: [0x31, 0xc0, 0xc3] },
								{ offset: 0x13b6288, off: [0x31, 0x32, 0x37, 0x2f], on: [0x30, 0x2f, 0x38, 0x00] },
							],
						},
						{
							// mon
							name: 'Disable shop close lockout',
							tooltip: 'Disables ~12-8am lockout. Does not disable maint lockout from 6:30-7am JST',
							patches: [{ offset: 0x78ea73, off: [0x74], on: [0xeb] }],
						},
						{
							// somewhatlurker
							name: 'Force shared audio mode, system audio samplerate must be 48000',
							tooltip: 'Improves compatibility but may increase latency',
							patches: [{ offset: 0xb512aa, off: [0x01], on: [0x00] }],
						},
						{
							// somewhatlurker
							name: 'Force 2 channel audio output',
							patches: [{ offset: 0xb51381, off: [0x75, 0x3f], on: [0x90, 0x90] }],
						},
						{
							name: 'Patch for Windows 7',
							tooltip: 'May not be able to connect to the server',
							patches: [
								{ offset: 0x16d470c, off: [0x45, 0x78], on: [0x5f, 0x41] },
								{ offset: 0x16d4715, off: [0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x51, 0x75, 0x65, 0x72, 0x79], on: [0x51, 0x75, 0x65, 0x72, 0x79, 0x5f, 0x41, 0x00, 0x00, 0x00, 0x00] },
							],
						},
						{
							// lybxlpsv
							name: 'Disable Song Select Timer',
							tooltip: 'May only work when playing with card.',
							patches: [{ offset: 0x5aeaa2, off: [0x74], on: [0xeb] }],
						},
						{
							// esterTion
							name: 'Set All Timers to 999',
							patches: [{ offset: 0x4d5550, off: [0x8b, 0x44, 0x24, 0x04, 0x69, 0xc0, 0xe8, 0x03, 0x00, 0x00], on: [0xb8, 0x58, 0x3e, 0x0f, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// lin714093880 & esterTion
							name: 'Better patch for head-to-head play',
							tooltip: 'Fix infinite sync while trying to connect to head to head play.',
							patches: [{ offset: 0x3e61b3, off: [0x01], on: [0x00] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'chuniplus',
		name: 'CHUNITHM PLUS',
		image: 'chuniplus.jpg',
		patchers: [
			[
				{
					appname: 'chuniApp.exe',
					version: '(1.06.00) PLUS',
					patches: [
						{
							// mon PLUS
							name: 'Allow 127.0.0.1 as the network server',
							patches: [
								{ offset: 0x798720, off: [0x55, 0x8b, 0xec], on: [0x31, 0xc0, 0xc3] },
								{ offset: 0x141ef58, off: [0x31, 0x32, 0x37, 0x2f], on: [0x30, 0x2f, 0x38, 0x00] },
							],
						},
						{
							// mon PLUS
							name: 'Disable shop close lockout',
							tooltip: 'Disables ~12-8am lockout. Does not disable maint lockout from 6:30-7am JST',
							patches: [{ offset: 0x7c02c3, off: [0x74], on: [0xeb] }],
						},
						{
							// somewhatlurker PLUS
							name: 'Force shared audio mode, system audio samplerate must be 48000',
							tooltip: 'Improves compatibility but may increase latency',
							patches: [{ offset: 0xb928fa, off: [0x01], on: [0x00] }],
						},
						{
							// somewhatlurker PLUS
							name: 'Force 2 channel audio output',
							patches: [{ offset: 0xb929d1, off: [0x75, 0x3f], on: [0x90, 0x90] }],
						},
						{
							name: 'Patch for Windows 7',
							tooltip: 'May not be able to connect to the server',
							patches: [
								{ offset: 0x1746104, off: [0x45, 0x78], on: [0x5f, 0x41] },
								{ offset: 0x174610d, off: [0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x51, 0x75, 0x65, 0x72, 0x79], on: [0x51, 0x75, 0x65, 0x72, 0x79, 0x5f, 0x41, 0x00, 0x00, 0x00, 0x00] },
							],
						},
						{
							// lybxlpsv PLUS
							name: 'Disable Song Select Timer',
							tooltip: 'May only work when playing with card.',
							patches: [{ offset: 0x5e1172, off: [0x74], on: [0xeb] }],
						},
						{
							// esterTion PLUS
							name: 'Set All Timers to 999',
							patches: [{ offset: 0x505510, off: [0x8b, 0x44, 0x24, 0x04, 0x69, 0xc0, 0xe8, 0x03, 0x00, 0x00], on: [0xb8, 0x58, 0x3e, 0x0f, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// lin714093880 & esterTion PLUS
							name: 'Better patch for head-to-head play',
							tooltip: 'Fix infinite sync while trying to connect to head to head play.',
							patches: [{ offset: 0x3f9a83, off: [0x01], on: [0x00] }],
						},
					],
				},
			],
			[
				{
					appname: 'aimeReaderHost.exe',
					version: '(1.05.00) PLUS',
					patches: [
						{
							name: 'Change obfuscation to be compatible with segatools',
							tooltip: "Patches 'aime.anbzvarg.wc' to 'nvzr.anbzvarg.wc' for Aime server check to work correctly.",
							patches: [{ offset: 0xa36a8, off: [0x61, 0x69, 0x6d, 0x65, 0x2e, 0x61, 0x6e, 0x62, 0x7a, 0x76, 0x61, 0x72, 0x67, 0x2e, 0x77, 0x63], on: [0x6e, 0x76, 0x7a, 0x72, 0x2e, 0x61, 0x6e, 0x62, 0x7a, 0x76, 0x61, 0x72, 0x67, 0x2e, 0x77, 0x63] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'chuniair',
		name: 'CHUNITHM AIR',
		image: 'chuniair.png',
		patchers: [
			[
				{
					appname: 'chuniApp.exe',
					version: '(1.10.00) AIR',
					patches: [
						{
							// mon AIR
							name: 'Allow 127.0.0.1 as the network server',
							patches: [
								{ offset: 0x7ebfa0, off: [0x55, 0x8b, 0xec], on: [0x31, 0xc0, 0xc3] },
								{ offset: 0x14c1c5c, off: [0x31, 0x32, 0x37, 0x2f], on: [0x30, 0x2f, 0x38, 0x00] },
							],
						},
						{
							// mon AIR
							name: 'Disable shop close lockout',
							tooltip: 'Disables ~12-8am lockout. Does not disable maint lockout from 6:30-7am JST',
							patches: [{ offset: 0x813bb3, off: [0x74], on: [0xeb] }],
						},
						{
							// somewhatlurker AIR
							name: 'Force shared audio mode, system audio samplerate must be 48000',
							tooltip: 'Improves compatibility but may increase latency',
							patches: [{ offset: 0xc02ffa, off: [0x01], on: [0x00] }],
						},
						{
							// somewhatlurker AIR
							name: 'Force 2 channel audio output',
							patches: [{ offset: 0xc030d1, off: [0x75, 0x3f], on: [0x90, 0x90] }],
						},
						{
							name: 'Patch for Windows 7',
							tooltip: 'May not be able to connect to the server',
							patches: [
								{ offset: 0x17fd7c4, off: [0x45, 0x78], on: [0x5f, 0x41] },
								{ offset: 0x17fd7cd, off: [0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x51, 0x75, 0x65, 0x72, 0x79], on: [0x51, 0x75, 0x65, 0x72, 0x79, 0x5f, 0x41, 0x00, 0x00, 0x00, 0x00] },
							],
						},
						{
							// lybxlpsv AIR
							name: 'Disable Song Select Timer',
							tooltip: 'May only work when playing with card.',
							patches: [{ offset: 0x639af2, off: [0x74], on: [0xeb] }],
						},
						{
							// esterTion AIR
							name: 'Set All Timers to 999',
							patches: [{ offset: 0x531130, off: [0x8b, 0x44, 0x24, 0x04, 0x69, 0xc0, 0xe8, 0x03, 0x00, 0x00], on: [0xb8, 0x58, 0x3e, 0x0f, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// lin714093880 & esterTion AIR
							name: 'Better patch for head-to-head play',
							tooltip: 'Fix infinite sync while trying to connect to head to head play.',
							patches: [{ offset: 0x410293, off: [0x01], on: [0x00] }],
						},
					],
				},
				{
					appname: 'chuniApp.exe',
					version: '(1.15.00) AIR PLUS',
					patches: [
						{
							// mon AIRPLUS
							name: 'Allow 127.0.0.1 as the network server',
							patches: [
								{ offset: 0x81bfd0, off: [0x55, 0x8b, 0xec], on: [0x31, 0xc0, 0xc3] },
								{ offset: 0x1546034, off: [0x31, 0x32, 0x37, 0x2f], on: [0x30, 0x2f, 0x38, 0x00] },
							],
						},
						{
							// mon AIRPLUS
							name: 'Disable shop close lockout',
							tooltip: 'Disables ~12-8am lockout. Does not disable maint lockout from 6:30-7am JST',
							patches: [{ offset: 0x843c03, off: [0x74], on: [0xeb] }],
						},
						{
							// somewhatlurker AIRPLUS
							name: 'Force shared audio mode, system audio samplerate must be 48000',
							tooltip: 'Improves compatibility but may increase latency',
							patches: [{ offset: 0xc5fc7a, off: [0x01], on: [0x00] }],
						},
						{
							// somewhatlurker AIRPLUS
							name: 'Force 2 channel audio output',
							patches: [{ offset: 0xc5fd51, off: [0x75, 0x3f], on: [0x90, 0x90] }],
						},
						{
							name: 'Patch for Windows 7',
							tooltip: 'May not be able to connect to the server',
							patches: [
								{ offset: 0x1892050, off: [0x45, 0x78], on: [0x5f, 0x41] },
								{ offset: 0x1892059, off: [0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x51, 0x75, 0x65, 0x72, 0x79], on: [0x51, 0x75, 0x65, 0x72, 0x79, 0x5f, 0x41, 0x00, 0x00, 0x00, 0x00] },
							],
						},
						{
							// lybxlpsv AIRPLUS
							name: 'Disable Song Select Timer',
							tooltip: 'May only work when playing with card.',
							patches: [{ offset: 0x664602, off: [0x74], on: [0xeb] }],
						},
						{
							// esterTion AIRPLUS
							name: 'Set All Timers to 999',
							patches: [{ offset: 0x548960, off: [0x8b, 0x44, 0x24, 0x04, 0x69, 0xc0, 0xe8, 0x03, 0x00, 0x00], on: [0xb8, 0x58, 0x3e, 0x0f, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// lin714093880 & esterTion AIRPLUS
							name: 'Better patch for head-to-head play',
							tooltip: 'Fix infinite sync while trying to connect to head to head play.',
							patches: [{ offset: 0x41f843, off: [0x01], on: [0x00] }],
						},
					],
				},
			],
			[
				{
					appname: 'aimeReaderHost.exe',
					version: '(1.10.00) AIR & (1.15.00) AIR PLUS',
					patches: [
						{
							name: 'Change domain obfuscation to be compatible with segatools',
							tooltip: "(Scene Release Only) Patches 'aime.anbzvarg.wc' to 'nvzr.anbzvarg.wc' for Aime server check to work correctly.",
							patches: [{ offset: 0xa83c4, off: [0x61, 0x69, 0x6d, 0x65, 0x2e, 0x61, 0x6e, 0x62, 0x7a, 0x76, 0x61, 0x72, 0x67, 0x2e, 0x77, 0x63], on: [0x6e, 0x76, 0x7a, 0x72, 0x2e, 0x61, 0x6e, 0x62, 0x7a, 0x76, 0x61, 0x72, 0x67, 0x2e, 0x77, 0x63] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'chunistar',
		name: 'CHUNITHM STAR',
		image: 'chunistar.png',
		patchers: [
			[
				{
					appname: 'chuniApp.exe',
					version: '(1.20.00) STAR',
					patches: [
						{
							// mon STAR
							name: 'Allow 127.0.0.1 as the network server',
							patches: [
								{ offset: 0x834630, off: [0x55, 0x8b, 0xec], on: [0x31, 0xc0, 0xc3] },
								{ offset: 0x1577c84, off: [0x31, 0x32, 0x37, 0x2f], on: [0x30, 0x2f, 0x38, 0x00] },
							],
						},
						{
							// mon STAR
							name: 'Disable shop close lockout',
							tooltip: 'Disables ~12-8am lockout. Does not disable maint lockout from 6:30-7am JST',
							patches: [{ offset: 0x85c263, off: [0x74], on: [0xeb] }],
						},
						{
							// somewhatlurker STAR
							name: 'Force shared audio mode, system audio samplerate must be 48000',
							tooltip: 'Improves compatibility but may increase latency',
							patches: [{ offset: 0xbdfa2a, off: [0x01], on: [0x00] }],
						},
						{
							// somewhatlurker STAR
							name: 'Force 2 channel audio output',
							patches: [{ offset: 0xbdfb01, off: [0x75, 0x3f], on: [0x90, 0x90] }],
						},
						{
							name: 'Patch for Windows 7',
							tooltip: 'May not be able to connect to the server',
							patches: [
								{ offset: 0x18c9250, off: [0x45, 0x78], on: [0x5f, 0x41] },
								{ offset: 0x18c9259, off: [0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x51, 0x75, 0x65, 0x72, 0x79], on: [0x51, 0x75, 0x65, 0x72, 0x79, 0x5f, 0x41, 0x00, 0x00, 0x00, 0x00] },
							],
						},
						{
							// lybxlpsv STAR
							name: 'Disable Song Select Timer',
							tooltip: 'May only work when playing with card.',
							patches: [{ offset: 0x67ca22, off: [0x74], on: [0xeb] }],
						},
						{
							// esterTion STAR
							name: 'Set All Timers to 999',
							patches: [{ offset: 0x555ff0, off: [0x8b, 0x44, 0x24, 0x04, 0x69, 0xc0, 0xe8, 0x03, 0x00, 0x00], on: [0xb8, 0x58, 0x3e, 0x0f, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// lin714093880 & esterTion STAR
							name: 'Better patch for head-to-head play',
							tooltip: 'Fix infinite sync while trying to connect to head to head play.',
							patches: [{ offset: 0x3d9d33, off: [0x01], on: [0x00] }],
						},
					],
				},
				{
					appname: 'chuniApp.exe',
					version: '(1.25.00) STAR PLUS',
					patches: [
						{
							// mon STARPLUS
							name: 'Allow 127.0.0.1 as the network server',
							patches: [
								{ offset: 0x83c8a0, off: [0x55, 0x8b, 0xec], on: [0x31, 0xc0, 0xc3] },
								{ offset: 0x1595478, off: [0x31, 0x32, 0x37, 0x2f], on: [0x30, 0x2f, 0x38, 0x00] },
							],
						},
						{
							// mon STARPLUS
							name: 'Disable shop close lockout',
							tooltip: 'Disables ~12-8am lockout. Does not disable maint lockout from 6:30-7am JST',
							patches: [{ offset: 0x8644f3, off: [0x74], on: [0xeb] }],
						},
						{
							// somewhatlurker STARPLUS
							name: 'Force shared audio mode, system audio samplerate must be 48000',
							tooltip: 'Improves compatibility but may increase latency',
							patches: [{ offset: 0xbf4bfa, off: [0x01], on: [0x00] }],
						},
						{
							// somewhatlurker STARPLUS
							name: 'Force 2 channel audio output',
							patches: [{ offset: 0xbf4cd1, off: [0x75, 0x3f], on: [0x90, 0x90] }],
						},
						{
							name: 'Patch for Windows 7',
							tooltip: 'May not be able to connect to the server',
							patches: [
								{ offset: 0x18ec270, off: [0x45, 0x78], on: [0x5f, 0x41] },
								{ offset: 0x18ec279, off: [0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x51, 0x75, 0x65, 0x72, 0x79], on: [0x51, 0x75, 0x65, 0x72, 0x79, 0x5f, 0x41, 0x00, 0x00, 0x00, 0x00] },
							],
						},
						{
							// lybxlpsv STARPLUS
							name: 'Disable Song Select Timer',
							tooltip: 'May only work when playing with card.',
							patches: [{ offset: 0x680652, off: [0x74], on: [0xeb] }],
						},
						{
							// esterTion STARPLUS
							name: 'Set All Timers to 999',
							patches: [{ offset: 0x5567e0, off: [0x8b, 0x44, 0x24, 0x04, 0x69, 0xc0, 0xe8, 0x03, 0x00, 0x00], on: [0xb8, 0x58, 0x3e, 0x0f, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// lin714093880 & esterTion STARPLUS
							name: 'Better patch for head-to-head play',
							tooltip: 'Fix infinite sync while trying to connect to head to head play.',
							patches: [{ offset: 0x3d8c43, off: [0x01], on: [0x00] }],
						},
					],
				},
			],
			[
				{
					appname: 'aimeReaderHost.exe',
					version: '(1.20.00) STAR',
					patches: [
						{
							name: 'Change obfuscation to be compatible with segatools',
							tooltip: "(Scene Release Only) Patches 'aime.anbzvarg.wc' to 'nvzr.anbzvarg.wc' for Aime server check to work correctly.",
							patches: [{ offset: 0xa83c4, off: [0x61, 0x69, 0x6d, 0x65, 0x2e, 0x61, 0x6e, 0x62, 0x7a, 0x76, 0x61, 0x72, 0x67, 0x2e, 0x77, 0x63], on: [0x6e, 0x76, 0x7a, 0x72, 0x2e, 0x61, 0x6e, 0x62, 0x7a, 0x76, 0x61, 0x72, 0x67, 0x2e, 0x77, 0x63] }],
						},
					],
				},
				{
					appname: 'aimeReaderHost.exe',
					version: '(1.25.00) STAR PLUS',
					patches: [
						{
							name: 'Change obfuscation to be compatible with segatools',
							tooltip: "(Scene Release Only) Patches 'aime.anbzvarg.wc' to 'nvzr.anbzvarg.wc' for Aime server check to work correctly.",
							patches: [{ offset: 0xaf43c, off: [0x61, 0x69, 0x6d, 0x65, 0x2e, 0x61, 0x6e, 0x62, 0x7a, 0x76, 0x61, 0x72, 0x67, 0x2e, 0x77, 0x63], on: [0x6e, 0x76, 0x7a, 0x72, 0x2e, 0x61, 0x6e, 0x62, 0x7a, 0x76, 0x61, 0x72, 0x67, 0x2e, 0x77, 0x63] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'chuniamazon',
		name: 'CHUNITHM AMAZON',
		image: 'chuniamazon.png',
		patchers: [
			[
				{
					appname: 'chuniApp.exe',
					version: '(1.35.00) AMAZON PLUS',
					patches: [
						{
							// mon
							name: 'Allow 127.0.0.1/localhost as the network server',
							patches: [
								{ offset: 0x8df380, off: [0x55, 0x8b, 0xec], on: [0x31, 0xc0, 0xc3] },
								{ offset: 0x1693da8, off: [0x31, 0x32, 0x37, 0x2f], on: [0x30, 0x2f, 0x38, 0x00] },
							],
						},
						{
							// mon
							name: 'Disable shop close lockout',
							tooltip: 'Disables ~12-8am lockout. Does not disable maint lockout from 6:30-7am JST',
							patches: [{ offset: 0x906fd3, off: [0x74], on: [0xeb] }],
						},
						/* i didn't find this
                    {
                        // mon
                        name: "Disable update check (faster boot)",
                        patches: [
                            {offset: 0x8AE690, off: [0xA1, 0x54, 0x88], on: [0x31, 0xC0, 0xC3]},
                        ],
                    },
                    */
						{
							// somewhatlurker
							name: 'Force shared audio mode, system audio samplerate must be 48000',
							tooltip: 'Improves compatibility but may increase latency',
							patches: [{ offset: 0xca9e1a, off: [0x01], on: [0x00] }],
						},
						{
							// somewhatlurker
							name: 'Force 2 channel audio output',
							patches: [{ offset: 0xca9ef1, off: [0x75, 0x3f], on: [0x90, 0x90] }],
						},
						{
							// maybenotuseful
							name: 'Patch for Windows 7',
							tooltip: 'May not be able to connect to the server',
							patches: [
								{ offset: 0x19ff4e8, off: [0x45, 0x78], on: [0x5f, 0x41] },
								{ offset: 0x19ff4f1, off: [0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x51, 0x75, 0x65, 0x72, 0x79], on: [0x51, 0x75, 0x65, 0x72, 0x79, 0x5f, 0x41, 0x00, 0x00, 0x00, 0x00] },
							],
						},
						{
							// lybxlpsv
							name: 'Disable Song Select Timer',
							tooltip: 'May only work when playing with card.',
							patches: [{ offset: 0x722ed2, off: [0x74], on: [0xeb] }],
						},
						{
							// esterTion
							name: 'Set All Timers to 999',
							patches: [{ offset: 0x5df750, off: [0x8b, 0x44, 0x24, 0x04, 0x69, 0xc0, 0xe8, 0x03, 0x00, 0x00], on: [0xb8, 0x58, 0x3e, 0x0f, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// lin714093880 & esterTion
							name: 'Patch for head-to-head play',
							tooltip: 'Fix infinite sync while trying to connect to head to head play.',
							patches: [{ offset: 0x44cba3, off: [0x01], on: [0x00] }],
						},
						{
							// esterTion
							name: 'Increase max credits to 254',
							patches: [{ offset: 0xbf6177, off: [0x8a, 0x5d, 0x14], on: [0xb3, 0xfe, 0x90] }],
						},
						{
							// esterTion
							name: 'Free Play',
							tooltip: 'Endless credits',
							patches: [{ offset: 0xbf6595, off: [0x28], on: [0x08] }],
						},
						{
							// esterTion
							name: 'Dummy LED',
							tooltip: 'Skip LED board check',
							patches: [{ offset: 0x2499c7, off: [0x00], on: [0x01] }],
						},
					],
				},
				{
					appname: 'chuniApp.exe',
					version: '(1.30.00) AMAZON',
					patches: [
						{
							// mon
							name: 'Allow 127.0.0.1/localhost as the network server',
							patches: [
								{ offset: 0x8bc180, off: [0x55, 0x8b, 0xec], on: [0x31, 0xc0, 0xc3] },
								{ offset: 0x164d0e0, off: [0x31, 0x32, 0x37, 0x2f], on: [0x30, 0x2f, 0x38, 0x00] },
							],
						},
						{
							// mon
							name: 'Disable shop close lockout',
							tooltip: 'Disables ~12-8am lockout. Does not disable maint lockout from 6:30-7am JST',
							patches: [{ offset: 0x8e3dd3, off: [0x74], on: [0xeb] }],
						},
						{
							// mon
							name: 'Disable update check (faster boot)',
							patches: [{ offset: 0x8ae690, off: [0xa1, 0x54, 0x88], on: [0x31, 0xc0, 0xc3] }],
						},
						{
							// somewhatlurker
							name: 'Force shared audio mode, system audio samplerate must be 48000',
							tooltip: 'Improves compatibility but may increase latency',
							patches: [{ offset: 0xc77d1a, off: [0x01], on: [0x00] }],
						},
						{
							// somewhatlurker
							name: 'Force 2 channel audio output',
							patches: [{ offset: 0xc77df1, off: [0x75, 0x3f], on: [0x90, 0x90] }],
						},
						{
							// maybenotuseful
							name: 'Patch for Windows 7',
							tooltip: 'May not be able to connect to the server',
							patches: [
								{ offset: 0x19b0aae, off: [0x45, 0x78], on: [0x5f, 0x41] },
								{ offset: 0x19b0ab7, off: [0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x51, 0x75, 0x65, 0x72, 0x79], on: [0x51, 0x75, 0x65, 0x72, 0x79, 0x5f, 0x41, 0x00, 0x00, 0x00, 0x00] },
							],
						},
						{
							// lybxlpsv
							name: 'Disable Song Select Timer',
							tooltip: 'May only work when playing with card.',
							patches: [{ offset: 0x6ffc62, off: [0x74], on: [0xeb] }],
						},
						{
							// esterTion
							name: 'Set All Timers to 999',
							patches: [{ offset: 0x5c30e0, off: [0x8b, 0x44, 0x24, 0x04, 0x69, 0xc0, 0xe8, 0x03, 0x00, 0x00], on: [0xb8, 0x58, 0x3e, 0x0f, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// lin714093880 & esterTion
							name: 'Better patch for head-to-head play',
							tooltip: 'Fix infinite sync while trying to connect to head to head play.',
							patches: [{ offset: 0x440cd3, off: [0x01], on: [0x00] }],
						},
						{
							// esterTion
							name: 'Increase max credits to 254',
							patches: [{ offset: 0xbc4b37, off: [0x8a, 0x5d, 0x14], on: [0xb3, 0xfe, 0x90] }],
						},
						{
							// esterTion
							name: 'Free Play',
							tooltip: 'Endless credits',
							patches: [{ offset: 0xbc4f55, off: [0x28], on: [0x08] }],
						},
						{
							// esterTion
							name: 'Dummy LED',
							tooltip: 'Skip LED board check',
							patches: [{ offset: 0x244ae7, off: [0x00], on: [0x01] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'chunicrystal',
		name: 'CHUNITHM CRYSTAL',
		image: 'chunicrystal.png',
		patchers: [
			[
				{
					appname: 'chuniApp.exe',
					version: '',
					patches: [
						{
							name: 'Allow 127.0.0.1/localhost as the network server',
							patches: [
								{ offset: 0x905500, off: [0x55, 0x8b, 0xec], on: [0x31, 0xc0, 0xc3] },
								{ offset: 0x16ce988, off: [0x31, 0x32, 0x37, 0x2f], on: [0x30, 0x2f, 0x38, 0x00] },
							],
						},
						{
							name: 'Disable shop close lockout',
							tooltip: 'Disables ~12-8am lockout. Does not disable maint lockout from 6:30-7am JST',
							patches: [{ offset: 0x92d153, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Force shared audio mode, system audio samplerate must be 48000',
							tooltip: 'Improves compatibility but may increase latency',
							patches: [{ offset: 0xcd470a, off: [0x01], on: [0x00] }],
						},
						{
							name: 'Force 2 channel audio output',
							patches: [{ offset: 0xcd47e1, off: [0x75, 0x3f], on: [0x90, 0x90] }],
						},
						{
							name: 'Patch for Windows 7',
							tooltip: 'May not be able to connect to the server',
							patches: [
								{ offset: 0x1a404e8, off: [0x45, 0x78], on: [0x5f, 0x41] },
								{ offset: 0x1a404f1, off: [0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x51, 0x75, 0x65, 0x72, 0x79], on: [0x51, 0x75, 0x65, 0x72, 0x79, 0x5f, 0x41, 0x00, 0x00, 0x00, 0x00] },
							],
						},
						{
							name: 'Disable Song Select Timer',
							tooltip: 'May only work when playing with card.',
							patches: [{ offset: 0x748fe2, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Set All Timers to 999',
							patches: [{ offset: 0x5fc300, off: [0x8b, 0x44, 0x24, 0x04, 0x69, 0xc0, 0xe8, 0x03, 0x00, 0x00], on: [0xb8, 0x58, 0x3e, 0x0f, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							name: 'Better patch for head-to-head play',
							tooltip: 'Fix infinite sync while trying to connect to head to head play.',
							patches: [{ offset: 0x464db3, off: [0x01], on: [0x00] }],
						},
						{
							// ikaros14
							name: 'Increase max credits to 254',
							patches: [{ offset: 0xc204b7, off: [0x8a, 0x5d, 0x14], on: [0xb3, 0xfe, 0x90] }],
						},
						{
							// ikaros14
							name: 'Free Play',
							tooltip: 'Endless credits',
							patches: [{ offset: 0xc208d5, off: [0x28], on: [0x08] }],
						},
						{
							// ikaros14
							name: 'Dummy LED',
							tooltip: 'Skip LED board check',
							patches: [{ offset: 0x2499d7, off: [0x00], on: [0x01] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'chuniparadise',
		name: 'CHUNITHM PARADISE',
		image: 'chuniparadise.png',
		patchers: [
			[
				{
					appname: 'chuniApp.exe',
					version: '',
					patches: [
						{
							name: 'Allow 127.0.0.1/localhost as the network server',
							patches: [
								{ offset: 0x9b5bf0, off: [0x55, 0x8b, 0xec], on: [0x31, 0xc0, 0xc3] },
								{ offset: 0x1743510, off: [0x31, 0x32, 0x37, 0x2f], on: [0x30, 0x2f, 0x38, 0x00] },
							],
						},
						{
							name: 'Disable shop close lockout',
							tooltip: 'Disables ~12-8am lockout. Does not disable maint lockout from 6:30-7am JST',
							patches: [{ offset: 0x9dd843, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Force shared audio mode, system audio samplerate must be 48000',
							tooltip: 'Improves compatibility but may increase latency',
							patches: [{ offset: 0xd1134a, off: [0x01], on: [0x00] }],
						},
						{
							name: 'Force 2 channel audio output',
							patches: [{ offset: 0xd11421, off: [0x75, 0x3f], on: [0x90, 0x90] }],
						},
						{
							name: 'Disable Song Select Timer',
							tooltip: 'May only work when playing with card.',
							patches: [{ offset: 0x784a42, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Set All Timers to 999',
							patches: [{ offset: 0x62d790, off: [0x8b, 0x44, 0x24, 0x04, 0x69, 0xc0, 0xe8, 0x03, 0x00, 0x00], on: [0xb8, 0x58, 0x3e, 0x0f, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// lin714093880 & esterTion
							name: 'Patch for head-to-head play',
							tooltip: 'Fix infinite sync while trying to connect to head to head play.',
							patches: [{ offset: 0x48c9b3, off: [0x01], on: [0x00] }],
						},
						{
							name: 'Auto Play',
							patches: [{ offset: 0x747369, off: [0x00], on: [0x01] }],
						},
						{
							// maybenotuseful
							name: 'Patch for Windows 7',
							tooltip: 'May not be able to connect to the server',
							patches: [
								{ offset: 0x1bdd428, off: [0x45, 0x78], on: [0x5f, 0x41] },
								{ offset: 0x1bdd430, off: [0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x51, 0x75, 0x65, 0x72, 0x79], on: [0x51, 0x75, 0x65, 0x72, 0x79, 0x5f, 0x41, 0x00, 0x00, 0x00, 0x00] },
							],
						},
						{
							// ikaros14
							name: 'Increase max credits to 254',
							patches: [{ offset: 0xcb28d7, off: [0x8a, 0x5d, 0x14], on: [0xb3, 0xfe, 0x90] }],
						},
						{
							// esterTion
							name: 'Free Play',
							tooltip: 'Endless credits',
							patches: [{ offset: 0xcb2cf5, off: [0x28], on: [0x08] }],
						},
						{
							// esterTion
							name: 'Dummy LED',
							tooltip: 'Skip LED board check',
							patches: [{ offset: 0x24a5e7, off: [0x00], on: [0x01] }],
						},
						{
							name: 'No Encryption',
							tooltip: 'Title server workaround',
							patches: [{ offset: 0x3e2832, off: [0x39], on: [0xc3] }],
						},
						{
							name: 'No TLS',
							tooltip: 'Title server workaround',
							patches: [{ offset: 0xd04d09, off: [0x81, 0xe3, 0x00, 0x00, 0x80, 0x00], on: [0x31, 0xdb, 0x90, 0x90, 0x90, 0x90] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'tricoro',
		name: 'beatmania IIDX 20 tricoro',
		image: 'tricoro.png',
		patchers: [
			[
				{
					appname: 'bm2dx.dll',
					version: '2012-09-19',
					patches: [
						{
							//by nibs
							name: 'Shorter monitor check',
							tooltip: 'Runs for 300 frames (5 seconds) instead of 1200 (20 seconds), recommended only if you have a very stable framerate',
							patches: [{ offset: 0x66c0d, off: [0xb0, 0x04], on: [0x2c, 0x01] }],
						},
						{
							//by nibs
							name: '6 digits in monitor check',
							tooltip: 'Purely visual, does not affect anything besides the FPS display',
							//changes the FPS = %2.4f string to FPS = %2.6f
							patches: [{ offset: 0x143c45, off: [0x34], on: [0x36] }],
						},
					],
				},
				{
					appname: 'bm2dx.dll',
					version: '2012-10-09',
					patches: [
						{
							name: 'Premium Free',
							patches: [{ offset: 0x49cac, off: [0x75], on: [0xeb] }],
						},
					],
				},
				{
					appname: 'bm2dx.dll',
					version: '2012-12-07',
					patches: [
						{
							name: 'Premium Free',
							patches: [{ offset: 0x4c47c, off: [0x75], on: [0xeb] }],
						},
					],
				},
				{
					appname: 'bm2dx.dll',
					version: '2013-03-05',
					patches: [
						{
							name: 'Premium Free',
							patches: [{ offset: 0x4e6cc, off: [0x75], on: [0xeb] }],
						},
					],
				},
				{
					appname: 'bm2dx.dll',
					version: '2013-09-09',
					patches: [
						{
							name: 'Premium Free',
							patches: [{ offset: 0x4f2dc, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x4921d, off: [0x75, 0x09], on: [0x90, 0x90] }],
						},
						{
							//by nibs
							name: 'Shorter monitor check',
							tooltip: 'Runs for 300 frames (5 seconds) instead of 1200 (20 seconds), recommended only if you have a very stable framerate',
							patches: [{ offset: 0x6d07a, off: [0xb0, 0x04], on: [0x2c, 0x01] }],
						},
						{
							//by nibs
							name: '6 digits in monitor check',
							tooltip: 'Purely visual, does not affect anything besides the FPS display',
							//changes the FPS = %2.4f string to FPS = %2.6f
							patches: [{ offset: 0x16bdd5, off: [0x34], on: [0x36] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'spada',
		name: 'beatmania IIDX 21 SPADA',
		image: 'spada.png',
		patchers: [
			[
				{
					appname: 'bm2dx.dll',
					version: '2013-10-02',
					patches: [
						{
							//by nibs
							name: 'Shorter monitor check',
							tooltip: 'Runs for 300 frames (5 seconds) instead of 1200 (20 seconds), recommended only if you have a very stable framerate',
							patches: [{ offset: 0x6b4aa, off: [0xb0, 0x04], on: [0x2c, 0x01] }],
						},
						{
							//by nibs
							name: '6 digits in monitor check',
							tooltip: 'Purely visual, does not affect anything besides the FPS display',
							//changes the FPS = %2.4f string to FPS = %2.6f
							patches: [{ offset: 0x160b05, off: [0x34], on: [0x36] }],
						},
					],
				},
				{
					appname: 'bm2dx.dll',
					version: '2014-07-16',
					patches: [
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0x9150e, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Unlock all songs',
							patches: [{ offset: 0x48c3d, off: [0x75, 0x09], on: [0x90, 0x90] }],
						},
						{
							name: 'CS-Style Song Start Delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [{ offset: 0x6a046, off: [0x7c], on: [0xeb] }],
						},
						{
							name: 'Premium Free',
							patches: [{ offset: 0x4f2da, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Premium Free Timer Freeze',
							patches: [{ offset: 0x4882d, off: [0x48], on: [0x90] }],
						},
						{
							name: 'Hide FREE PLAY text',
							patches: [{ offset: 0x13e8a, off: [0xec, 0x0b, 0x15], on: [0x14, 0xc8, 0xc7] }],
						},
						{
							name: 'Cursor lock',
							tooltip: 'After song finishes, song select remains on previous song',
							patches: [{ offset: 0x5c3ee, off: [0x74, 0x22], on: [0x90, 0x90] }],
						},
						{
							name: 'Volume Bug Fix',
							tooltip: 'If your volume gets forced to max, turn this on',
							patches: [{ offset: 0xca369, off: [0x00], on: [0x01] }],
						},
						{
							name: 'Debug mode (disables score saving!)',
							tooltip: 'Press F1 in-game to open menu',
							patches: [{ offset: 0x9e090, off: [0x32, 0xc0], on: [0x0c, 0x01] }],
						},
						{
							name: 'Free play text to LED ticker',
							patches: [{ offset: 0x13e8a, off: [0xec, 0x0b, 0x15, 0x10], on: [0xf4, 0xae, 0x41, 0x11] }],
						},
						{
							//by nibs
							name: 'Shorter monitor check',
							tooltip: 'Runs for 300 frames (5 seconds) instead of 1200 (20 seconds), recommended only if you have a very stable framerate',
							patches: [{ offset: 0x721ba, off: [0xb0, 0x04], on: [0x2c, 0x01] }],
						},
						{
							//by nibs
							name: '6 digits in monitor check',
							tooltip: 'Purely visual, does not affect anything besides the FPS display',
							//changes the FPS = %2.4f string to FPS = %2.6f
							patches: [{ offset: 0x192175, off: [0x34], on: [0x36] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'pendual',
		name: 'beatmania IIDX 22 PENDUAL',
		image: 'pendual.png',
		patchers: [
			[
				{
					appname: 'bm2dx.dll',
					version: '2014-09-17',
					patches: [
						{
							//by nibs
							name: 'Shorter monitor check',
							tooltip: 'Runs for 300 frames (5 seconds) instead of 1200 (20 seconds), recommended only if you have a very stable framerate',
							patches: [{ offset: 0x6d5ea, off: [0xb0, 0x04], on: [0x2c, 0x01] }],
						},
						{
							//by nibs
							name: '6 digits in monitor check',
							tooltip: 'Purely visual, does not affect anything besides the FPS display',
							//changes the FPS = %2.4f string to FPS = %2.6f
							patches: [{ offset: 0x14e2ad, off: [0x34], on: [0x36] }],
						},
					],
				},
				{
					appname: 'bm2dx.dll',
					version: '2015-08-05',
					patches: [
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0x9c55e, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Premium Free',
							patches: [{ offset: 0x5d31b, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Premium Free Timer Freeze',
							patches: [{ offset: 0x563ad, off: [0x48], on: [0x90] }],
						},
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x58b3e, off: [0x75, 0x0a], on: [0x90, 0x90] }],
						},
						{
							name: 'CS-Style Song Start Delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [{ offset: 0x77cf6, off: [0x7c], on: [0xeb] }],
						},
						{
							name: 'Cursor lock',
							tooltip: 'After song finishes, song select remains on previous song',
							patches: [{ offset: 0x6bf3a, off: [0x74, 0x23], on: [0x90, 0x90] }],
						},
						{
							name: 'Volume Bug Fix',
							tooltip: 'If your volume gets forced to max, turn this on',
							patches: [{ offset: 0xd5d09, off: [0x00], on: [0x01] }],
						},
						{
							name: 'Replace FREE PLAY text with song name',
							patches: [{ offset: 0x14c3a, off: [0x90, 0x3f, 0x12, 0x10], on: [0x24, 0xaa, 0x43, 0x11] }],
						},
						{
							//by nibs
							name: 'Shorter monitor check',
							tooltip: 'Runs for 300 frames (5 seconds) instead of 1200 (20 seconds), recommended only if you have a very stable framerate',
							patches: [{ offset: 0x8065a, off: [0xb0, 0x04], on: [0x2c, 0x01] }],
						},
						{
							//by nibs
							name: '6 digits in monitor check',
							tooltip: 'Purely visual, does not affect anything besides the FPS display',
							//changes the FPS = %2.4f string to FPS = %2.6f
							patches: [{ offset: 0x16e911, off: [0x34], on: [0x36] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'copula',
		name: 'beatmania IIDX 23 copula',
		image: 'copula.png',
		patchers: [
			[
				{
					appname: 'bm2dx.dll',
					version: '2016-08-31',
					patches: [
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0x8f98e, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Premium Free',
							patches: [{ offset: 0x562ba, off: [0x75], on: [0xeb] }],
						},
						// By mon - modifies a few more bytes than needed but whatever
						{
							name: 'Premium Free (2 player mode)',
							patches: [
								{ offset: 0x56424, off: [0x74, 0x2f], on: [0x90, 0x90] },
								{ offset: 0x56435, off: [0x0f, 0x85, 0x3b], on: [0xe9, 0x3c, 0xff] },
								{ offset: 0x5643a, off: [0xff], on: [0x90] },
							],
						},
						{
							name: 'Premium Free Timer Freeze',
							patches: [{ offset: 0x4f8fd, off: [0x48], on: [0x90] }],
						},
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x4fd84, off: [0x74, 0x16], on: [0x90, 0x90] }],
						},
						{
							name: 'Level 12 Unlocked',
							patches: [{ offset: 0x4fe35, off: [0x83, 0xff, 0x02, 0x74, 0x0b, 0x83, 0xff, 0x05, 0x74, 0x06, 0xb0, 0x01], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							name: 'Cursor lock',
							tooltip: 'After song finishes, song select remains on previous song',
							patches: [{ offset: 0x63722, off: [0x74, 0x23], on: [0x90, 0x90] }],
						},
						{
							name: 'CS-Style Song Start Delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [{ offset: 0x6f3ff, off: [0x7c], on: [0xeb] }],
						},
						{
							name: 'Disable HCN Tutorial',
							tooltip: "Don't show tutorial for Hell Charge Notes",
							patches: [{ offset: 0x6f3e6, off: [0x5e, 0xe9, 0x24, 0xff, 0xff, 0xff], on: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00] }],
						},
						{
							name: 'Quick Retry',
							tooltip: 'Hold VEFX and Effect during a song to restart',
							patches: [{ offset: 0x46724, off: [0x8a, 0xc3], on: [0xb0, 0x01] }],
						},
						{
							name: 'Dark Mode',
							patches: [{ offset: 0x68833, off: [0x74, 0x32], on: [0x90, 0x90] }],
						},
						{
							name: 'Volume Bug Fix',
							tooltip: 'If your volume gets forced to max, turn this on',
							patches: [{ offset: 0xcb2b9, off: [0x00], on: [0x01] }],
						},
						{
							type: 'union',
							name: 'FREE PLAY text',
							offset: 0x1379a,
							patches: [
								{
									name: 'On',
									patch: [0x88, 0x3d, 0x11, 0x10],
								},
								{
									name: 'Off',
									patch: [0x87, 0x3d, 0x11, 0x10],
								},
								{
									name: 'Replace with song name',
									patch: [0x54, 0x1d, 0x42, 0x11],
								},
							],
						},
						{
							//by nibs
							name: 'Shorter monitor check',
							tooltip: 'Runs for 300 frames (5 seconds) instead of 1200 (20 seconds), recommended only if you have a very stable framerate',
							patches: [{ offset: 0x77daa, off: [0xb0, 0x04], on: [0x2c, 0x01] }],
						},
						{
							//by nibs
							name: '6 digits in monitor check',
							tooltip: 'Purely visual, does not affect anything besides the FPS display',
							//changes the FPS = %2.4f string to FPS = %2.6f
							patches: [{ offset: 0x13e429, off: [0x34], on: [0x36] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'sinobuz',
		name: 'beatmania IIDX 24 SINOBUZ',
		image: 'sinobuz.png',
		patchers: [
			[
				{
					appname: 'bm2dx.dll',
					version: '2017-08-28',
					patches: [
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0x9baee, off: [0x74], on: [0xeb] }],
						},
						{
							name: '90sec Music Select Timer',
							tooltip: 'Make sure your Select Time option is set to "45 SEC" in the Game Options for this to work!',
							patches: [{ offset: 0x350b4, off: [0x2d], on: [0x5a] }],
						},
						{
							name: 'Premium Free',
							patches: [{ offset: 0x60a1b, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Premium Free (2 player mode)',
							patches: [
								{ offset: 0x60b94, off: [0x74, 0x2f], on: [0x90, 0x90] },
								{ offset: 0x60ba5, off: [0x0f, 0x85, 0x3b], on: [0xe9, 0x3c, 0xff] },
								{ offset: 0x60baa, off: [0xff], on: [0x90] },
							],
						},
						{
							name: 'Premium Free Timer Freeze',
							patches: [{ offset: 0x5dead, off: [0x48], on: [0x90] }],
						},
						{
							name: 'Level 12 Unlocked',
							// size mismatch is intentional - new omni doesn't nop the last 2 bytes
							patches: [{ offset: 0x5bb35, off: [0x83, 0xff, 0x02, 0x74, 0x0b, 0x83, 0xff, 0x05, 0x74, 0x06, 0xb0, 0x01], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x5c005, off: [0x74, 0x15], on: [0x90, 0x90] }],
						},
						{
							name: 'Unlock All Daily Bonuses',
							patches: [{ offset: 0x5e180, off: [0x56, 0x8b, 0xf1, 0xe8, 0x58, 0x57, 0xfd, 0xff], on: [0xb8, 0x01, 0x00, 0x00, 0x00, 0xc2, 0x04, 0x00] }],
						},
						{
							name: 'Cursor lock',
							tooltip: 'After song finishes, song select remains on previous song',
							patches: [{ offset: 0x6c8e5, off: [0x74, 0x23], on: [0x90, 0x90] }],
						},
						{
							name: 'CS-Style Song Start Delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [{ offset: 0x78d52, off: [0x7c], on: [0xeb] }],
						},
						{
							name: 'Dark Mode',
							patches: [{ offset: 0x71cb7, off: [0x74, 0x3b], on: [0x90, 0x90] }],
						},
						{
							name: 'Disable Bar Lines',
							patches: [{ offset: 0x3d540, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Remove Rainbow Banners',
							patches: [{ offset: 0x12c34d, off: [0x5f], on: [0x00] }],
						},
						{
							name: 'Volume Bug Fix',
							tooltip: 'If your volume gets forced to max, turn this on',
							patches: [{ offset: 0xda249, off: [0x00], on: [0x01] }],
						},
						{
							name: 'Free play text to LED ticker',
							patches: [{ offset: 0x150ea, off: [0xe0, 0x8f, 0x12, 0x10], on: [0x64, 0x99, 0x6a, 0x11] }],
						},
						{
							name: 'Free play text to LED ticker (Upper left)',
							patches: [
								{ offset: 0xa4615, off: [0x74, 0x32], on: [0x90, 0x90] },
								{ offset: 0xa4630, off: [0x54, 0x1d, 0x16, 0x10], on: [0x64, 0x99, 0x6a, 0x11] },
							],
						},
						{
							name: 'Debug mode (disables score saving!)',
							tooltip: 'Press F1 in-game to open menu',
							patches: [{ offset: 0x579b0, off: [0x32, 0xc0], on: [0x0c, 0x01] }],
						},
						{
							name: 'Skip Card Entry',
							tooltip: 'Useful for those without service or to prevent login',
							patches: [{ offset: 0x63e34, off: [0x32], on: [0x20] }],
						},
						{
							name: 'Quick Retry',
							tooltip: 'Hold VEFX and Effect during a song to restart',
							patches: [{ offset: 0x4e284, off: [0x8a, 0xc3], on: [0xb0, 0x01] }],
						},
						{
							//by nibs
							name: 'Shorter monitor check',
							tooltip: 'Runs for 300 frames (5 seconds) instead of 1200 (20 seconds), recommended only if you have a very stable framerate',
							patches: [{ offset: 0x81a5a, off: [0xb0, 0x04], on: [0x2c, 0x01] }],
						},
						{
							//by nibs
							name: '6 digits in monitor check',
							tooltip: 'Purely visual, does not affect anything besides the FPS display',
							//changes the FPS = %2.4f string to FPS = %2.6f
							patches: [{ offset: 0x15adf9, off: [0x34], on: [0x36] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'ballerz',
		name: 'beatmania IIDX 25 CANNON BALLERS',
		image: 'ballerz.png',
		patchers: [
			[
				{
					appname: 'bm2dx.dll',
					version: '2018-09-19',
					patches: [
						{
							// discovered by GHYAKIMA
							name: 'SSE4.2 Fix',
							tooltip: 'This will allow the game to run on processors which do not support the SSE4.2 instruction set. If you can successfully boot the game, do NOT check this.',
							patches: [{ offset: 0x169667, off: [0xf3, 0x45, 0x0f], on: [0x90, 0x90, 0x90] }],
						},
						{
							// ported by Xyen
							name: 'Unlock All Songs',
							patches: [{ offset: 0xb60b2, off: [0x74, 0x10], on: [0x90, 0x90] }],
						},
						{
							// ported by a machine
							name: 'Unlock All 12s',
							patches: [{ offset: 0xb5fb0, off: [0x83, 0xff, 0x02, 0x74, 0x05, 0x83, 0xff, 0x05], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// ported by Iemnok?
							name: 'Skip CAMERA DEVICE ERROR prompt',
							patches: [{ offset: 0x10c5fb, off: [0x84], on: [0x81] }],
						},
						{
							// ported by Xyen
							name: '1P Premium Free',
							patches: [{ offset: 0xdc819, off: [0x75, 0x14], on: [0xeb, 0x14] }],
						},
						{
							// ported by a machine
							name: '2P Premium Free',
							patches: [
								{ offset: 0xdc9b2, off: [0x74, 0x6c], on: [0x90, 0x90] },
								{ offset: 0xdc9c8, off: [0x74, 0x56], on: [0x90, 0x90] },
							],
						},
						{
							// ported by Xyen
							name: 'Premium Free Timer Freeze',
							patches: [{ offset: 0xb89bd, off: [0xff, 0xc8], on: [0x90, 0x90] }],
						},
						{
							// ported by Zelminar
							name: 'Standard/Menu Timer Freeze',
							patches: [{ offset: 0x1237e7, off: [0x74], on: [0xeb] }],
						},
						{
							// ported by Zelminar
							name: '90sec Music Select Timer',
							tooltip: 'Make sure your Select Time option is set to "45 SEC" in the Game Options for this to work!',
							patches: [{ offset: 0x5dda5, off: [0x2d], on: [0x5a] }],
						},
						{
							// ported by Xyen
							name: 'Cursor lock',
							tooltip: 'After song finishes, song select remains on previous song',
							patches: [{ offset: 0xdf93c, off: [0x74, 0x1d], on: [0x90, 0x90] }],
						},
						{
							// ported by Xyen
							name: 'CS-Style Song Start Delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [{ offset: 0xf5caa, off: [0x7d, 0x25], on: [0x90, 0x90] }],
						},
						{
							// discovered by dogelition_man with some help from zelminar
							name: 'Play video preview on all songs',
							tooltip: 'By default, only some songs in the beginner folder show a BGA preview on the music select screen. This edit extends this function to every song in any folder.',
							patches: [
								{ offset: 0x75422, off: [0x74, 0x15], on: [0x90, 0x90] },
								{ offset: 0x7243c, off: [0x0f, 0xb6], on: [0xeb, 0x2f] },
							],
						},
						{
							name: 'Hide INSERT COIN[S] text',
							patches: [{ offset: 0x64389, off: [0x1b], on: [0x1a] }],
						},
						{
							name: 'Hide CREDIT: %d text',
							patches: [{ offset: 0x63f17, off: [0xdd, 0xb8, 0x15, 0x00], on: [0xdc, 0xb8, 0x15, 0x00] }],
						},
						{
							name: 'Hide CREDIT: %d COIN %d / %d text',
							patches: [{ offset: 0x63eed, off: [0xe7], on: [0xe6] }],
						},
						{
							name: 'Hide EXTRA PASELI: %d text',
							patches: [{ offset: 0x64009, off: [0x13], on: [0x12] }],
						},
						{
							name: 'Hide PASELI: %d text',
							patches: [{ offset: 0x641d8, off: [0x74], on: [0x73] }],
						},
						{
							name: 'Hide PASELI: NO ACCOUNT text',
							patches: [{ offset: 0x64292, off: [0xfa, 0xb5, 0x15, 0x00], on: [0xf9, 0xb5, 0x15, 0x00] }],
						},
						{
							name: 'Hide PASELI: ****** text',
							patches: [{ offset: 0x641fb, off: [0x71, 0xb6, 0x15, 0x00], on: [0x70, 0xb6, 0x15, 0x00] }],
						},
						{
							// ported by Zelminar
							name: 'Free play text to LED ticker (Bottom Right)',
							tooltip: 'Song Title/Ticker information will display instead of FREEPLAY',
							patches: [{ offset: 0x640bf, off: [0x05, 0xb7, 0x15, 0x00], on: [0xd9, 0x68, 0x44, 0x02] }],
						},
						{
							// ported by Zelminar
							name: 'LED Ticker (Top Left)',
							tooltip: 'This does NOT require FREEPLAY on',
							patches: [
								{ offset: 0x10a800, off: [0x1c, 0x73, 0x15, 0x00], on: [0x98, 0x01, 0x3a, 0x02] },
								{ offset: 0x10a9d8, off: [0x74, 0x3c], on: [0x90, 0x90] },
							],
						},
						{
							// ported by Zelminar
							name: 'Dark Mode',
							tooltip: 'Removes frame assets from playfield during song',
							patches: [{ offset: 0xeb231, off: [0x74, 0x4b], on: [0x90, 0x90] }],
						},
						{
							// ported by Zelminar
							// discovered by dogelition_man
							name: 'Disable Bar Lines',
							tooltip: 'Removes white measure bars during song. Great with Dark Mode.',
							patches: [{ offset: 0x8ae8b, off: [0x75], on: [0xeb] }],
						},
						{
							// ported by Zelminar
							name: 'Remove Song Select Color Banners',
							patches: [
								{ offset: 0x1c5395, off: [0x5f], on: [0x00] },
								{ offset: 0x1c53a5, off: [0x5f], on: [0x00] },
								{ offset: 0x1c53b5, off: [0x5f], on: [0x00] },
								{ offset: 0x1c53c5, off: [0x5f], on: [0x00] },
							],
						},
						{
							// ported by Zelminar
							name: 'Quick Retry',
							tooltip: 'Guest or non-VIP Card Players - Hold VEFX and Effect during a song to quick restart',
							patches: [{ offset: 0xa3fff, off: [0x32, 0xc0], on: [0xb0, 0x01] }],
						},
						{
							// ported by Zelminar
							name: 'Debug Mode',
							tooltip: 'While in game, press F1 to enable menu.  (Disables Profile/Score saving)',
							patches: [{ offset: 0x660d0, off: [0x32, 0xc0], on: [0x0c, 0x01] }],
						},
						{
							// ported by Zelminar
							name: 'Skip Card Entry',
							tooltip: 'Useful for those without service or wish to prevent login',
							patches: [{ offset: 0xc06ef, off: [0x32], on: [0x20] }],
						},
						{
							// ported by Zelminar
							name: 'Expert Course Force Open (in offline or local mode)',
							patches: [{ offset: 0xdc953, off: [0x75], on: [0xeb] }],
						},
						{
							//by nibs
							name: 'Shorter monitor check',
							tooltip: 'Runs for 300 frames (5 seconds) instead of 1200 (20 seconds), recommended only if you have a very stable framerate',
							patches: [{ offset: 0x104305, off: [0xb0, 0x04], on: [0x2c, 0x01] }],
						},
						{
							//by nibs
							name: '6 digits in monitor check',
							tooltip: 'Purely visual, does not affect anything besides the FPS display',
							//changes the FPS = %2.4f string to FPS = %2.6f
							patches: [{ offset: 0x25fd41, off: [0x34], on: [0x36] }],
						},
						{
							// by aixxe
							name: 'Skip decide screen',
							tooltip: 'Immediately loads into chart after selection.',
							patches: [{ offset: 0x72775, off: [0xe8, 0x66, 0x00, 0x00, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
					],
				},
				{
					appname: 'bm2dx.dll',
					version: '2018-07-24',
					patches: [
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0xb61d2, off: [0x74, 0x10], on: [0x90, 0x90] }],
						},
						{
							name: 'Premium Free',
							patches: [{ offset: 0xdc949, off: [0x75, 0x14], on: [0xeb, 0x14] }],
						},
						{
							name: 'Premium Free Timer Freeze',
							patches: [{ offset: 0xb8add, off: [0xff, 0xc8], on: [0x90, 0x90] }],
						},
						{
							name: 'Cursor lock',
							tooltip: 'After song finishes, song select remains on previous song',
							patches: [{ offset: 0xdfa2c, off: [0x74, 0x1d], on: [0x90, 0x90] }],
						},
						{
							name: 'CS-Style Song Start Delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [{ offset: 0xf5d9a, off: [0x7d, 0x25], on: [0x90, 0x90] }],
						},
					],
				},
				{
					appname: 'bm2dx.dll',
					version: '2018-06-13',
					patches: [
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0xb42d2, off: [0x74, 0x10], on: [0x90, 0x90] }],
						},
						{
							name: 'Premium Free',
							patches: [{ offset: 0xda3c9, off: [0x75, 0x14], on: [0xeb, 0x14] }],
						},
						{
							name: 'Premium Free Timer Freeze',
							patches: [{ offset: 0xb682d, off: [0xff, 0xc8], on: [0x90, 0x90] }],
						},
						{
							name: 'Cursor lock',
							tooltip: 'After song finishes, song select remains on previous song',
							patches: [{ offset: 0xdd4ac, off: [0x74, 0x1d], on: [0x90, 0x90] }],
						},
						{
							name: 'CS-Style Song Start Delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [{ offset: 0xf296a, off: [0x7d, 0x25], on: [0x90, 0x90] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'rootage',
		name: 'beatmania IIDX 26 Rootage',
		image: 'rootage.png',
		patchers: [
			[
				{
					appname: 'bm2dx.dll',
					version: '2019-01-23',
					patches: [
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x1609c2, off: [0x74, 0x10], on: [0x90, 0x90] }],
						},
						{
							name: 'Premium Free',
							patches: [{ offset: 0x31db97, off: [0x75, 0x14], on: [0xeb, 0x14] }],
						},
						{
							name: 'Premium Free Timer Freeze',
							patches: [{ offset: 0x16294d, off: [0xff, 0xc8], on: [0x90, 0x90] }],
						},
						{
							name: 'Cursor lock',
							tooltip: 'After song finishes, song select remains on previous song',
							patches: [{ offset: 0x322dc4, off: [0x74, 0x1d], on: [0x90, 0x90] }],
						},
						{
							name: 'CS-Style Song Start Delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [{ offset: 0x33df5a, off: [0x7d, 0x25], on: [0x90, 0x90] }],
						},
					],
				},
				{
					appname: 'bm2dx.dll',
					version: '2019-02-20',
					patches: [
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x161462, off: [0x74, 0x10], on: [0x90, 0x90] }],
						},
						{
							name: 'Premium Free Timer Freeze',
							patches: [{ offset: 0x16366d, off: [0xff, 0xc8], on: [0x90, 0x90] }],
						},
					],
				},
				{
					appname: 'bm2dx.dll',
					version: '2019-06-03',
					patches: [
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x16c412, off: [0x74, 0x10], on: [0x90, 0x90] }],
						},
						{
							name: 'Premium Free Timer Freeze',
							patches: [{ offset: 0x16e6ed, off: [0xff, 0xc8], on: [0x90, 0x90] }],
						},
					],
				},
				{
					appname: 'bm2dx.dll',
					version: '2019-09-02',
					patches: [
						{
							name: 'SSE4.2 Fix',
							tooltip: 'This will allow the game to run on processors which do not support the SSE4.2 instruction set. If you can successfully boot the game, do NOT check this.',
							patches: [{ offset: 0x3f8c77, off: [0xf3, 0x45, 0x0f], on: [0x90, 0x90, 0x90] }],
						},
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x16d7b2, off: [0x74, 0x10], on: [0x90, 0x90] }],
						},
						{
							name: 'Unlock All 12s',
							patches: [{ offset: 0x16d660, off: [0x83, 0xff, 0x02, 0x74, 0x05, 0x83, 0xff, 0x05], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							name: 'Skip CAMERA DEVICE ERROR prompt',
							patches: [{ offset: 0x36f37b, off: [0x84], on: [0x81] }],
						},
						{
							name: '1P Premium Free',
							patches: [{ offset: 0x32f5c7, off: [0x75, 0x14], on: [0xeb, 0x14] }],
						},
						{
							name: '2P Premium Free',
							patches: [
								{ offset: 0x32f765, off: [0x74, 0x55], on: [0x90, 0x90] },
								{ offset: 0x32f77b, off: [0x74, 0x3f], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Premium Free Timer Freeze',
							patches: [{ offset: 0x16fcad, off: [0xff, 0xc8], on: [0x90, 0x90] }],
						},
						{
							name: 'Standard/Menu Timer Freeze',
							patches: [{ offset: 0x387eb7, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Cursor lock',
							tooltip: 'After song finishes, song select remains on previous song',
							patches: [{ offset: 0x334914, off: [0x74, 0x1d], on: [0x90, 0x90] }],
						},
						{
							name: 'CS-Style Song Start Delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [{ offset: 0x35396a, off: [0x7d, 0x25], on: [0x90, 0x90] }],
						},
						{
							name: 'Play video preview on all songs',
							tooltip: 'By default, only some songs in the beginner folder show a BGA preview on the music select screen. This edit extends this function to every song in any folder.',
							patches: [
								{ offset: 0x11ca4c, off: [0x0f, 0xb6], on: [0xeb, 0x2f] },
								{ offset: 0x11fdfe, off: [0x74, 0x0e], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Hide INSERT COIN[S] text',
							patches: [{ offset: 0x107279, off: [0x3b], on: [0x3a] }],
						},
						{
							name: 'Hide CREDIT: %d text',
							patches: [{ offset: 0x106df8, off: [0x0c], on: [0x0b] }],
						},
						{
							name: 'Hide CREDIT: %d COIN %d / %d text',
							patches: [{ offset: 0x106dcd, off: [0x17], on: [0x16] }],
						},
						{
							name: 'Hide EXTRA PASELI: %d text',
							patches: [{ offset: 0x106ee9, off: [0x43], on: [0x42] }],
						},
						{
							name: 'Hide PASELI: %d text',
							patches: [{ offset: 0x1070b8, off: [0xa4], on: [0xa3] }],
						},
						{
							name: 'Hide PASELI: NO ACCOUNT text',
							patches: [{ offset: 0x10717b, off: [0x21], on: [0x20] }],
						},
						{
							name: 'Hide PASELI: ****** text',
							patches: [{ offset: 0x1070dd, off: [0x9f], on: [0x9e] }],
						},
						{
							name: 'Free play text to LED ticker (Bottom Right)',
							tooltip: 'Song Title/Ticker information will display instead of FREEPLAY',
							patches: [{ offset: 0x106f9f, off: [0x35, 0x2f, 0x35, 0x00], on: [0x59, 0x61, 0x03, 0x03] }],
						},
						{
							name: 'LED Ticker (Top Left)',
							tooltip: 'This does NOT require FREEPLAY on',
							patches: [
								{ offset: 0x36d700, off: [0x7c, 0xba, 0x1c, 0x00], on: [0x98, 0x01, 0x3a, 0x02] },
								{ offset: 0x36d8d8, off: [0x74, 0x3c], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Quick Retry',
							tooltip: 'Guest or non-VIP Card Players - Hold VEFX and Effect during a song to quick restart',
							patches: [{ offset: 0x1583bf, off: [0x32, 0xc0], on: [0xb0, 0x01] }],
						},
						{
							name: 'Expert Course Force Open (in offline or local mode)',
							patches: [{ offset: 0x32f711, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Shorter monitor check',
							tooltip: 'Runs for 120 frames (2 seconds) instead of 1200 (20 seconds), recommended only if you have a very stable framerate',
							patches: [{ offset: 0x366dec, off: [0xb0, 0x04], on: [0x78, 0x00] }],
						},
						{
							name: 'Shorter Arena timeout',
							tooltip: 'Reduce time before CPUs fill empty slots in online lobbies from 1m5s to 30s. Only takes effect if you are the host.',
							patches: [{ offset: 0x37fe54, off: [0x3c, 0x0f], on: [0x08, 0x07] }],
						},
					],
				},
				{
					appname: 'bm2dx.dll',
					version: '2019-10-07',
					patches: [
						{
							name: 'SSE4.2 Fix',
							tooltip: 'This will allow the game to run on processors which do not support the SSE4.2 instruction set. If you can successfully boot the game, do NOT check this.',
							patches: [{ offset: 0x3f8cf7, off: [0xf3, 0x45, 0x0f], on: [0x90, 0x90, 0x90] }],
						},
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x16d7b2, off: [0x74, 0x10], on: [0x90, 0x90] }],
						},
						{
							name: 'Unlock All 12s',
							patches: [{ offset: 0x16d660, off: [0x83, 0xff, 0x02, 0x74, 0x05, 0x83, 0xff, 0x05], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							name: 'Skip CAMERA DEVICE ERROR prompt',
							patches: [{ offset: 0x36f3fb, off: [0x84], on: [0x81] }],
						},
						{
							name: '1P Premium Free',
							patches: [{ offset: 0x32f5c7, off: [0x75, 0x14], on: [0xeb, 0x14] }],
						},
						{
							name: '2P Premium Free',
							patches: [
								{ offset: 0x32f765, off: [0x74, 0x55], on: [0x90, 0x90] },
								{ offset: 0x32f77b, off: [0x74, 0x3f], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Premium Free Timer Freeze',
							patches: [{ offset: 0x16fcad, off: [0xff, 0xc8], on: [0x90, 0x90] }],
						},
						{
							name: 'Standard/Menu Timer Freeze',
							patches: [{ offset: 0x387f37, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Cursor lock',
							tooltip: 'After song finishes, song select remains on previous song',
							patches: [{ offset: 0x334914, off: [0x74, 0x1d], on: [0x90, 0x90] }],
						},
						{
							name: 'CS-Style Song Start Delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [{ offset: 0x3539ea, off: [0x7d, 0x25], on: [0x90, 0x90] }],
						},
						{
							name: 'Play video preview on all songs',
							tooltip: 'By default, only some songs in the beginner folder show a BGA preview on the music select screen. This edit extends this function to every song in any folder.',
							patches: [
								{ offset: 0x11ca4c, off: [0x0f, 0xb6], on: [0xeb, 0x2f] },
								{ offset: 0x11fdfe, off: [0x74, 0x0e], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Hide INSERT COIN[S] text',
							patches: [{ offset: 0x107279, off: [0x3b], on: [0x3a] }],
						},
						{
							name: 'Hide CREDIT: %d text',
							patches: [{ offset: 0x106df8, off: [0x0c], on: [0x0b] }],
						},
						{
							name: 'Hide CREDIT: %d COIN %d / %d text',
							patches: [{ offset: 0x106dcd, off: [0x17], on: [0x16] }],
						},
						{
							name: 'Hide EXTRA PASELI: %d text',
							patches: [{ offset: 0x106ee9, off: [0x43], on: [0x42] }],
						},
						{
							name: 'Hide PASELI: %d text',
							patches: [{ offset: 0x1070b8, off: [0xa4], on: [0xa3] }],
						},
						{
							name: 'Hide PASELI: NO ACCOUNT text',
							patches: [{ offset: 0x10717b, off: [0x21], on: [0x20] }],
						},
						{
							name: 'Hide PASELI: ****** text',
							patches: [{ offset: 0x1070dd, off: [0x9f], on: [0x9e] }],
						},
						{
							name: 'Free play text to LED ticker (Bottom Right)',
							tooltip: 'Song Title/Ticker information will display instead of FREEPLAY',
							patches: [{ offset: 0x106f9f, off: [0x35, 0x2f, 0x35, 0x00], on: [0xd9, 0x68, 0x44, 0x02] }],
						},
						{
							name: 'LED Ticker (Top Left)',
							tooltip: 'This does NOT require FREEPLAY on',
							patches: [
								{ offset: 0x36d780, off: [0xfc, 0xb9, 0x1c, 0x00], on: [0x98, 0x01, 0x3a, 0x02] },
								{ offset: 0x36d958, off: [0x74, 0x3c], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Quick Retry',
							tooltip: 'Guest or non-VIP Card Players - Hold VEFX and Effect during a song to quick restart',
							patches: [{ offset: 0x1583bf, off: [0x32, 0xc0], on: [0xb0, 0x01] }],
						},
						{
							name: 'Expert Course Force Open (in offline or local mode)',
							patches: [{ offset: 0x32f711, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Shorter monitor check',
							tooltip: 'Runs for 120 frames (2 seconds) instead of 1200 (20 seconds), recommended only if you have a very stable framerate',
							patches: [{ offset: 0x366e6c, off: [0xb0, 0x04], on: [0x78, 0x00] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'heroicverse',
		name: 'beatmania IIDX 27 HEROIC VERSE',
		image: 'heroicverse.png',
		patchers: [
			[
				{
					appname: 'bm2dx.dll',
					version: '2020-09-29',
					patches: [
						{
							name: 'Disable TDJ check for exclusive songs',
							patches: [
								{ offset: 0x352ea9, off: [0x75, 0x19], on: [0x90, 0x90] },
								{ offset: 0x352f19, off: [0x75, 0x15], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Disable TDJ check for lightning category',
							patches: [{ offset: 0x33718d, off: [0x75, 0x0a], on: [0x90, 0x90] }],
						},
						{
							name: 'Force 120hz timing and adapter mode in LDJ (Experimental)',
							patches: [
								{ offset: 0x2fbba3, off: [0x75], on: [0xeb] },
								{ offset: 0x621169, off: [0x74, 0x03], on: [0x90, 0x90] },
								{ offset: 0x620f7e, off: [0x3c], on: [0x78] },
							],
						},
						{
							name: 'Force LDJ software video decoder for all boot modes',
							patches: [{ offset: 0x5fbcc7, off: [0x83, 0x78, 0x08, 0x02], on: [0x83, 0x78, 0x08, 0x05] }],
						},
						{
							name: 'Bypass lightning monitor error',
							patches: [{ offset: 0x58c681, off: [0x0f, 0x85], on: [0x90, 0xe9] }],
						},
						{
							// mon
							name: 'Force shared audio',
							tooltip: "If it doesn't work, set your device to 44100Hz 16bit",
							patches: [{ offset: 0x2678b1, off: [0x01], on: [0x00] }],
						},
						{
							name: 'Skip decide screen',
							tooltip: 'Immediately loads into chart after selection',
							patches: [{ offset: 0x2d6160, off: [0xe8, 0x6b, 0x00, 0x00, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							name: 'Cursor lock',
							tooltip: 'After song finishes, song select remains on previous song',
							patches: [{ offset: 0x551d98, off: [0x84, 0xc0], on: [0x90, 0x90] }],
						},
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x353e90, off: [0x75, 0x24], on: [0x90, 0x90] }],
						},
						{
							name: 'Unlock All 12s',
							patches: [{ offset: 0x353cd0, off: [0x83, 0xff, 0x03, 0x74, 0x05, 0x83, 0xff, 0x08], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							// ikaros14
							name: 'Quick Retry',
							patches: [{ offset: 0x339bbf, off: [0x32, 0xc0], on: [0xb0, 0x01] }],
						},
						{
							name: 'Skip CAMERA DEVICE ERROR prompt',
							tooltip: 'Prevents the CAMERA DEVICE ERROR message from popping up on boot',
							patches: [{ offset: 0x59962b, off: [0x84], on: [0x81] }],
						},
						{
							name: 'Premium Free (1 Player Mode)',
							patches: [{ offset: 0x54b667, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Premium Free (2 Player Mode)',
							patches: [
								{ offset: 0x54b805, off: [0x74, 0x55], on: [0x90, 0x90] },
								{ offset: 0x54b81b, off: [0x74, 0x3f], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Premium Free Timer Freeze',
							tooltip: 'Freezes the timer in PREMIUM FREE mode, allowing unlimited play until exit',
							patches: [{ offset: 0x356bbd, off: [0x7e], on: [0xeb] }],
						},
						{
							name: 'Standard/Menu Timer Freeze',
							tooltip: 'Freezes the timer in STANDARD and in-game menus such as song select',
							patches: [{ offset: 0x5bdca7, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Shim Lightning Mode IO (for spicetools)',
							patches: [
								{ offset: 0x5fbcce, off: [0x0f, 0x84, 0x8d, 0x00, 0x00, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] },
								{ offset: 0x63b0e4, off: [0x0f, 0x84], on: [0x90, 0xe9] },
								{ offset: 0x63b850, off: [0x7c, 0xe5], on: [0x0c, 0xde] },
							],
						},
						{
							name: 'Hide "EXTRA PASELI: %d"',
							patches: [
								{
									offset: 0x2bd1b1,
									off: [0x7f, 0x12, 0x44, 0x8b, 0xcb, 0x4c, 0x8d, 0x05, 0xf3, 0xd8, 0x4e, 0x00],
									on: [0x90, 0xe9, 0x22, 0x00, 0x00, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90],
								},
							],
						},
						{
							name: 'Hide "INSERT COIN[S]"',
							patches: [{ offset: 0x2bd56b, off: [0xe8, 0x50, 0xaa, 0x00, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							name: 'Hide "PASELI: *****"',
							patches: [{ offset: 0x2bd3bb, off: [0xff, 0x15, 0x5f, 0x8e, 0x4e, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							name: 'Hide "PASELI: NO ACCOUNT"',
							patches: [{ offset: 0x2bd459, off: [0xff, 0x15, 0xc1, 0x8d, 0x4e, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							name: 'Hide "CREDIT: %s"',
							patches: [{ offset: 0x2bd0d6, off: [0xff, 0x15, 0x44, 0x91, 0x4e, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							name: 'SSE4.2 Fix',
							tooltip: 'This will allow the game to run on processors which do not support the SSE4.2 instruction set. If you can successfully boot the game, do NOT check this.',
							patches: [{ offset: 0x2677c4, off: [0xf3, 0x45, 0x0f], on: [0x90, 0x90, 0x90] }],
						},
						{
							name: 'Always show FAST/SLOW total',
							tooltip: "Toggles the 'FA/SL' judge text to show by default instead of requiring VEFX to be held.",
							patches: [
								{ offset: 0x5667f0, off: [0x74], on: [0x75] },
								{ offset: 0x5665d3, off: [0x74], on: [0x75] },
							],
						},
						{
							name: 'CS-Style Song Start Delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [{ offset: 0x575423, off: [0x7d, 0x4d], on: [0x90, 0x90] }],
						},
						{
							name: 'Free play text to LED ticker (Bottom Right)',
							tooltip: 'Song Title/Ticker information will display instead of FREEPLAY',
							patches: [{ offset: 0x2bd26f, off: [0xe5, 0xd7, 0x4e, 0x00], on: [0x49, 0x7f, 0x50, 0x04] }],
						},
						{
							name: 'Unscramble touch screen keypad in TDJ',
							tooltip: 'Disable randomization of keypad layout when carding in',
							patches: [{ offset: 0x614855, off: [0x4d, 0x03, 0xc8, 0x49, 0xf7, 0xf1], on: [0xba, 0x0c, 0x00, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'Always display EX score instead of money score',
							patches: [{ offset: 0x5ca12e, off: [0x33, 0xc0], on: [0xeb, 0xf4] }],
						},
						{
							name: 'Debug Mode',
							tooltip: 'While in game, press F1 to enable menu.  (Disables Profile/Score saving)',
							patches: [{ offset: 0x59a450, off: [0x32, 0xc0], on: [0xb0, 0x01] }],
						},
						{
							name: 'QC Mode',
							tooltip: 'Hidden test menu. Press SW4 to navigate right/left',
							patches: [
								{ offset: 0x5e3171, off: [0x74, 0x4f], on: [0x90, 0x90] },
								{ offset: 0x5e3199, off: [0x74], on: [0xeb] },
							],
						},
						{
							name: 'Increase "All Factory Settings" buffer',
							tooltip: 'Enable this if the option below is not default',
							patches: [
								{ offset: 0x5c359e, off: [0x40, 0x01, 0x00, 0x00], on: [0x22, 0x61, 0x14, 0x00] },
								{ offset: 0x78e62a, off: [0x40, 0x01, 0x00, 0x00], on: [0x22, 0x61, 0x14, 0x00] },
							],
						},
						{
							type: 'union',
							name: 'Reroute "All Factory Settings" test menu',
							offset: 0x5c35b5,
							patches: [
								{
									name: 'TestAllFactorySettingsScene',
									tooltip: 'Default',
									patch: [0x17, 0x88, 0x01, 0x00],
								},
								{
									name: 'AfpViewerScene',
									patch: [0x57, 0x72, 0xd4, 0xff],
								},
								{
									name: 'QproViewerScene',
									patch: [0x07, 0x03, 0xd5, 0xff],
								},
								{
									name: 'SoundViewerScene',
									patch: [0x37, 0x69, 0xd5, 0xff],
								},
							],
						},
						{
							type: 'union',
							name: "Reroute 'I/O Check -> Camera Check -> 2D Code check' test menu",
							offset: 0x5c3a55,
							patches: [
								{
									name: 'TestIOCheckQrCheckScene',
									tooltip: 'Default',
									patch: [0xa7, 0x49, 0x01, 0x00],
								},
								{
									name: 'CustomizeViewerScene',
									patch: [0x87, 0x92, 0xd4, 0xff],
								},
								{
									name: 'SoundRankingViewerScene',
									patch: [0x47, 0x2b, 0xd5, 0xff],
								},
								{
									name: 'SystemSoundViewerScene',
									patch: [0x47, 0x9e, 0xd5, 0xff],
								},
							],
						},
						{
							name: 'Disable News Sound',
							tooltip: 'Disables the sound played when news banners appear.',
							patches: [{ offset: 0x88d1c0, off: [0x10], on: [0x00] }],
						},
					],
				},
			],
		],
	},
	{
		id: 'bistrover', // game id
		name: 'beatmania IIDX 28 BISTROVER', // game name
		image: 'bistrover.jpg', // game icon
		patchers: [
			// array of PatchContainers
			[
				// array for PatchContainer
				{
					// object containing Patcher data
					appname: 'bm2dx.dll', // app entryfile
					version: '2021-04-26', // app version
					patches: [
						{
							name: 'Force 120hz timing and adapter mode in LDJ (Experimental)',
							patches: [
								{ offset: 0x3c6063, off: [0x75], on: [0xeb] },
								{ offset: 0x771a5e, off: [0x3c], on: [0x78] },
								{ offset: 0x771c49, off: [0x74, 0x03], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Shim Lightning Mode IO (for spicetools)',
							patches: [
								{
									offset: 0x715fbe,
									off: [0x0f, 0x84, 0x8d, 0x00, 0x00, 0x00],
									on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90],
								},
								{ offset: 0x78bfe4, off: [0x0f, 0x84], on: [0x90, 0xe9] },
								{ offset: 0x78c750, off: [0x9c, 0xe4], on: [0x3c, 0xdd] },
							],
						},
						{
							name: 'Force LDJ software video decoder for all boot modes',
							patches: [
								{
									offset: 0x715fb7,
									off: [0x83, 0x78, 0x08, 0x02],
									on: [0x83, 0x78, 0x08, 0x05],
								},
							],
						},
						{
							name: 'Unscramble touch screen keypad in TDJ',
							patches: [
								{
									offset: 0x7488f5,
									off: [0x4d, 0x03, 0xc8, 0x49, 0xf7, 0xf1],
									on: [0xba, 0x0c, 0x00, 0x00, 0x00, 0x90],
								},
							],
						},
						{
							name: 'Quick Retry',
							patches: [{ offset: 0x40e36f, off: [0x32, 0xc0], on: [0xb0, 0x01] }],
						},
						{
							name: 'CS-Style Song Start Delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [{ offset: 0x68d453, off: [0x7d, 0x4d], on: [0x90, 0x90] }],
						},
						{
							name: 'Bypass lightning monitor error',
							patches: [{ offset: 0x6a4d91, off: [0x0f, 0x85], on: [0x90, 0xe9] }],
						},
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x429d49, off: [0x75, 0x24], on: [0x90, 0x90] }],
						},
						{
							name: 'Unlock All 12s',
							patches: [
								{
									offset: 0x429af0,
									off: [0x83, 0xff, 0x03, 0x74, 0x05, 0x83, 0xff, 0x08],
									on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90],
								},
							],
						},
						{
							name: 'Skip Decide Screen',
							patches: [
								{
									offset: 0x348980,
									off: [0xe8, 0x6b, 0x00, 0x00, 0x00],
									on: [0x90, 0x90, 0x90, 0x90, 0x90],
								},
							],
						},
						{
							name: 'Skip Camera Error',
							patches: [{ offset: 0x6b2318, off: [0x84], on: [0x81] }],
						},
						{
							name: 'Cursor Lock',
							patches: [{ offset: 0x662ecf, off: [0x74, 0x1f], on: [0x90, 0x90] }],
						},

						{
							name: 'Standard/Menu Timer Freeze',
							patches: [{ offset: 0x6d6b77, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'WASAPI Shared Mode (with 44100Hz)',
							patches: [{ offset: 0x20a541, off: [0x01], on: [0x00] }],
						},
						{
							name: 'Premium Free (1 Player Mode)',
							patches: [{ offset: 0x65bd64, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Premium Free (2 Player Mode)',
							patches: [
								{ offset: 0x65bf15, off: [0x74, 0x55], on: [0x90, 0x90] },
								{ offset: 0x65bf2b, off: [0x74, 0x3f], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Premium Free Timer Freeze',
							tooltip: 'Freezes the timer in PREMIUM FREE mode, allowing unlimited play until exit',
							patches: [{ offset: 0x42e5dd, off: [0x7e], on: [0xeb] }],
						},
						{
							name: 'Hide all bottom text',
							tooltip: 'Free play text to LED ticker still displays',
							patches: [
								{
									offset: 0x95ea70,
									// biiiig yoshi
									off: [0x46, 0x52, 0x45, 0x45, 0x20, 0x50, 0x4c, 0x41, 0x59, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x43, 0x52, 0x45, 0x44, 0x49, 0x54, 0x3a, 0x20, 0x25, 0x64, 0x20, 0x43, 0x4f, 0x49, 0x4e, 0x3a, 0x20, 0x25, 0x64, 0x20, 0x2f, 0x20, 0x25, 0x64, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x43, 0x52, 0x45, 0x44, 0x49, 0x54, 0x3a, 0x20, 0x25, 0x64, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x50, 0x41, 0x53, 0x45, 0x4c, 0x49, 0x3a, 0x20, 0x4e, 0x4f, 0x54, 0x20, 0x41, 0x56, 0x41, 0x49, 0x4c, 0x41, 0x42, 0x4c, 0x45, 0x00, 0x00, 0x00, 0x45, 0x58, 0x54, 0x52, 0x41, 0x20, 0x50, 0x41, 0x53, 0x45, 0x4c, 0x49, 0x3a, 0x20, 0x25, 0x64, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x45, 0x58, 0x54, 0x52, 0x41, 0x20, 0x50, 0x41, 0x53, 0x45, 0x4c, 0x49, 0x3a, 0x20, 0x25, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x50, 0x41, 0x53, 0x45, 0x4c, 0x49, 0x3a, 0x20, 0x25, 0x64, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x50, 0x41, 0x53, 0x45, 0x4c, 0x49, 0x3a, 0x20, 0x25, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x50, 0x41, 0x53, 0x45, 0x4c, 0x49, 0x3a, 0x20, 0x2a, 0x2a, 0x2a, 0x2a, 0x2a, 0x2a, 0x00, 0x00, 0x20, 0x2b, 0x20, 0x25, 0x64, 0x00, 0x00, 0x00, 0x20, 0x2b, 0x20, 0x25, 0x73, 0x00, 0x00, 0x00, 0x50, 0x41, 0x53, 0x45, 0x4c, 0x49, 0x3a, 0x20, 0x4e, 0x4f, 0x20, 0x41, 0x43, 0x43, 0x4f, 0x55, 0x4e, 0x54, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x49, 0x4e, 0x53, 0x45, 0x52, 0x54, 0x20, 0x43, 0x4f, 0x49, 0x4e, 0x5b, 0x53, 0x5d, 0x00, 0x00, 0x50, 0x41, 0x53, 0x45, 0x4c, 0x49, 0x3a, 0x20, 0x2a, 0x2a, 0x2a, 0x2a, 0x2a, 0x2a, 0x20, 0x2b, 0x20, 0x30, 0x30, 0x30, 0x30, 0x30, 0x00, 0x00, 0x43, 0x52, 0x45, 0x44, 0x49, 0x54, 0x3a, 0x20, 0x39, 0x39, 0x20, 0x43, 0x4f, 0x49, 0x4e, 0x3a, 0x20, 0x39, 0x39, 0x20, 0x2f, 0x20, 0x31, 0x30],
									//  biiiig yoshi
									on: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
								},
							],
						},
					],
				},
			],
			//[], // array for PatchContainer						// and so on...
		],
	},
	{
		id: 'ddr2014',
		name: 'Dance Dance Revolution 2014',
		image: 'ddr2014.png',
		patchers: [
			[
				{
					appname: 'mdxja.dll',
					version: '',
					patches: [
						{
							// Created by Renard1911
							name: 'Premium Free',
							tooltip: 'Song clears/scores only. Profile progress and custom settings do not save. Reboot game to re-query for scores.',
							patches: [{ offset: 0x23c5, off: [0xff, 0x80, 0xe4, 0x16, 0x00, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						// These patches were auto-generated and thus very verbose
						{
							name: 'Unlock all songs',
							patches: [
								{ offset: 0x205c70, off: [0xeb], on: [0x00] },
								{ offset: 0x205c74, off: [0xf7, 0x01], on: [0x00, 0x00] },
								{ offset: 0x205c78, off: [0xf5], on: [0x00] },
								{ offset: 0x205c7c, off: [0x60, 0x01], on: [0x00, 0x00] },
								{ offset: 0x205c80, off: [0x13, 0x01], on: [0x00, 0x00] },
								{ offset: 0x205c84, off: [0x95, 0x01], on: [0x00, 0x00] },
								{ offset: 0x205c88, off: [0x02], on: [0x00] },
								{ offset: 0x205c8c, off: [0x2e, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205c90, off: [0x03], on: [0x00] },
								{ offset: 0x205c94, off: [0x28, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205c98, off: [0x04], on: [0x00] },
								{ offset: 0x205c9c, off: [0x25, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ca0, off: [0x05], on: [0x00] },
								{ offset: 0x205ca4, off: [0x29, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ca8, off: [0x06], on: [0x00] },
								{ offset: 0x205cac, off: [0x26, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205cb0, off: [0x07], on: [0x00] },
								{ offset: 0x205cb4, off: [0x2a, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205cb8, off: [0x08], on: [0x00] },
								{ offset: 0x205cbc, off: [0x27, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205cc0, off: [0x09], on: [0x00] },
								{ offset: 0x205cc4, off: [0x2d, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205cc8, off: [0x0a], on: [0x00] },
								{ offset: 0x205ccc, off: [0x2b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205cd0, off: [0x0b], on: [0x00] },
								{ offset: 0x205cd4, off: [0x2c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205cd8, off: [0x45], on: [0x00] },
								{ offset: 0x205cdc, off: [0x33, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ce0, off: [0x3c], on: [0x00] },
								{ offset: 0x205ce4, off: [0x34, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ce8, off: [0x3d], on: [0x00] },
								{ offset: 0x205cec, off: [0x35, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205cf0, off: [0x3e], on: [0x00] },
								{ offset: 0x205cf4, off: [0x36, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205cf8, off: [0x3f], on: [0x00] },
								{ offset: 0x205cfc, off: [0x37, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d00, off: [0x40], on: [0x00] },
								{ offset: 0x205d04, off: [0x38, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d08, off: [0x41], on: [0x00] },
								{ offset: 0x205d0c, off: [0x39, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d10, off: [0x42], on: [0x00] },
								{ offset: 0x205d14, off: [0x3a, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d18, off: [0x43], on: [0x00] },
								{ offset: 0x205d1c, off: [0x3b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d20, off: [0x44], on: [0x00] },
								{ offset: 0x205d24, off: [0x3c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d28, off: [0x55], on: [0x00] },
								{ offset: 0x205d2c, off: [0x4d, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d30, off: [0x56], on: [0x00] },
								{ offset: 0x205d34, off: [0x4a, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d38, off: [0x57], on: [0x00] },
								{ offset: 0x205d3c, off: [0x4b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d40, off: [0x58], on: [0x00] },
								{ offset: 0x205d44, off: [0x43, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d48, off: [0x59], on: [0x00] },
								{ offset: 0x205d4c, off: [0x4c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d50, off: [0x5a], on: [0x00] },
								{ offset: 0x205d54, off: [0x42, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d58, off: [0x5b], on: [0x00] },
								{ offset: 0x205d5c, off: [0x49, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d60, off: [0x5c], on: [0x00] },
								{ offset: 0x205d64, off: [0x46, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d68, off: [0x5d], on: [0x00] },
								{ offset: 0x205d6c, off: [0x45, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d70, off: [0x5e], on: [0x00] },
								{ offset: 0x205d74, off: [0x48, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d78, off: [0x5f], on: [0x00] },
								{ offset: 0x205d7c, off: [0x44, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d80, off: [0x60], on: [0x00] },
								{ offset: 0x205d84, off: [0x47, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d88, off: [0x61], on: [0x00] },
								{ offset: 0x205d8c, off: [0x4e, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d90, off: [0x16], on: [0x00] },
								{ offset: 0x205d94, off: [0x0b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205d98, off: [0x17], on: [0x00] },
								{ offset: 0x205d9c, off: [0xff, 0x01], on: [0x00, 0x00] },
								{ offset: 0x205da0, off: [0x18], on: [0x00] },
								{ offset: 0x205da4, off: [0x23, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205da8, off: [0x19], on: [0x00] },
								{ offset: 0x205dac, off: [0x0c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205db0, off: [0x1a], on: [0x00] },
								{ offset: 0x205db4, off: [0x07, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205db8, off: [0x1b], on: [0x00] },
								{ offset: 0x205dbc, off: [0x04, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205dc0, off: [0x1c], on: [0x00] },
								{ offset: 0x205dc4, off: [0x08, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205dc8, off: [0x1d], on: [0x00] },
								{ offset: 0x205dcc, off: [0x01, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205dd0, off: [0x1e], on: [0x00] },
								{ offset: 0x205dd4, off: [0x03, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205dd8, off: [0x1f], on: [0x00] },
								{ offset: 0x205ddc, off: [0x0e, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205de0, off: [0x7f], on: [0x00] },
								{ offset: 0x205de4, off: [0x54, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205de8, off: [0x7e], on: [0x00] },
								{ offset: 0x205dec, off: [0x55, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205df0, off: [0x84], on: [0x00] },
								{ offset: 0x205df4, off: [0x56, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205df8, off: [0x85], on: [0x00] },
								{ offset: 0x205dfc, off: [0x57, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e00, off: [0x86], on: [0x00] },
								{ offset: 0x205e04, off: [0x58, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e08, off: [0x87], on: [0x00] },
								{ offset: 0x205e0c, off: [0x59, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e10, off: [0x82], on: [0x00] },
								{ offset: 0x205e14, off: [0x5a, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e18, off: [0x83], on: [0x00] },
								{ offset: 0x205e1c, off: [0x5b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e20, off: [0x88], on: [0x00] },
								{ offset: 0x205e24, off: [0x63, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e28, off: [0x89], on: [0x00] },
								{ offset: 0x205e2c, off: [0x64, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e30, off: [0x8a], on: [0x00] },
								{ offset: 0x205e34, off: [0x65, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e38, off: [0x8b], on: [0x00] },
								{ offset: 0x205e3c, off: [0x61, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e40, off: [0x8c], on: [0x00] },
								{ offset: 0x205e44, off: [0x62, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e48, off: [0x8d], on: [0x00] },
								{ offset: 0x205e4c, off: [0x5c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e50, off: [0x8e], on: [0x00] },
								{ offset: 0x205e54, off: [0x5d, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e58, off: [0x8f], on: [0x00] },
								{ offset: 0x205e5c, off: [0x5e, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e60, off: [0x90], on: [0x00] },
								{ offset: 0x205e64, off: [0x5f, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e68, off: [0x91], on: [0x00] },
								{ offset: 0x205e6c, off: [0x60, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e70, off: [0x99], on: [0x00] },
								{ offset: 0x205e74, off: [0x66, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e78, off: [0x9a], on: [0x00] },
								{ offset: 0x205e7c, off: [0x69, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e80, off: [0x9b], on: [0x00] },
								{ offset: 0x205e84, off: [0x67, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e88, off: [0x9c], on: [0x00] },
								{ offset: 0x205e8c, off: [0x68, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e90, off: [0x9d], on: [0x00] },
								{ offset: 0x205e94, off: [0x6a, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205e98, off: [0xa0], on: [0x00] },
								{ offset: 0x205e9c, off: [0x7f, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ea0, off: [0xa2], on: [0x00] },
								{ offset: 0x205ea4, off: [0x77, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ea8, off: [0xa3], on: [0x00] },
								{ offset: 0x205eac, off: [0x6b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205eb0, off: [0xa4], on: [0x00] },
								{ offset: 0x205eb4, off: [0x72, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205eb8, off: [0xa5], on: [0x00] },
								{ offset: 0x205ebc, off: [0x6d, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ec0, off: [0xa7], on: [0x00] },
								{ offset: 0x205ec4, off: [0x71, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ec8, off: [0xa8], on: [0x00] },
								{ offset: 0x205ecc, off: [0x78, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ed0, off: [0xa9], on: [0x00] },
								{ offset: 0x205ed4, off: [0x6c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ed8, off: [0xaa], on: [0x00] },
								{ offset: 0x205edc, off: [0x6f, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ee0, off: [0xab], on: [0x00] },
								{ offset: 0x205ee4, off: [0x7b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ee8, off: [0xac], on: [0x00] },
								{ offset: 0x205eec, off: [0x7a, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ef0, off: [0xae], on: [0x00] },
								{ offset: 0x205ef4, off: [0x7c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ef8, off: [0xaf], on: [0x00] },
								{ offset: 0x205efc, off: [0x73, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f00, off: [0xb0], on: [0x00] },
								{ offset: 0x205f04, off: [0x70, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f08, off: [0xb1], on: [0x00] },
								{ offset: 0x205f0c, off: [0x7d, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f10, off: [0xb2], on: [0x00] },
								{ offset: 0x205f14, off: [0x6e, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f18, off: [0xb4], on: [0x00] },
								{ offset: 0x205f1c, off: [0x75, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f20, off: [0xb5], on: [0x00] },
								{ offset: 0x205f24, off: [0x76, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f28, off: [0xb6], on: [0x00] },
								{ offset: 0x205f2c, off: [0x7e, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f30, off: [0xb7], on: [0x00] },
								{ offset: 0x205f34, off: [0x79, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f38, off: [0xb8], on: [0x00] },
								{ offset: 0x205f3c, off: [0x74, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f40, off: [0xb9], on: [0x00] },
								{ offset: 0x205f44, off: [0x80, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f48, off: [0xbe], on: [0x00] },
								{ offset: 0x205f4c, off: [0x81, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f50, off: [0xbf], on: [0x00] },
								{ offset: 0x205f54, off: [0x82, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f58, off: [0xc0], on: [0x00] },
								{ offset: 0x205f5c, off: [0x83, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f60, off: [0xc1], on: [0x00] },
								{ offset: 0x205f64, off: [0x84, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f68, off: [0xc2], on: [0x00] },
								{ offset: 0x205f6c, off: [0x87, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f70, off: [0xc3], on: [0x00] },
								{ offset: 0x205f74, off: [0x88, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f78, off: [0xc4], on: [0x00] },
								{ offset: 0x205f7c, off: [0x86, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f80, off: [0xc5], on: [0x00] },
								{ offset: 0x205f84, off: [0x85, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f88, off: [0xc7], on: [0x00] },
								{ offset: 0x205f8c, off: [0x89, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f90, off: [0xc8], on: [0x00] },
								{ offset: 0x205f94, off: [0x8b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205f98, off: [0xca], on: [0x00] },
								{ offset: 0x205f9c, off: [0x8a, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205fa0, off: [0xcc], on: [0x00] },
								{ offset: 0x205fa4, off: [0x8f, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205fa8, off: [0xcd], on: [0x00] },
								{ offset: 0x205fac, off: [0x90, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205fb0, off: [0xce], on: [0x00] },
								{ offset: 0x205fb4, off: [0x91, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205fb8, off: [0xcf], on: [0x00] },
								{ offset: 0x205fbc, off: [0x92, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205fc0, off: [0xd0], on: [0x00] },
								{ offset: 0x205fc4, off: [0x93, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205fc8, off: [0xd1], on: [0x00] },
								{ offset: 0x205fcc, off: [0x94, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205fd0, off: [0xd2], on: [0x00] },
								{ offset: 0x205fd4, off: [0x8c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205fd8, off: [0xd3], on: [0x00] },
								{ offset: 0x205fdc, off: [0x8d, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205fe0, off: [0xd4], on: [0x00] },
								{ offset: 0x205fe4, off: [0x8e, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205fe8, off: [0xd7], on: [0x00] },
								{ offset: 0x205fec, off: [0x8c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ff0, off: [0xd8], on: [0x00] },
								{ offset: 0x205ff4, off: [0x8d, 0x02], on: [0x00, 0x00] },
								{ offset: 0x205ff8, off: [0xd9], on: [0x00] },
								{ offset: 0x205ffc, off: [0x8e, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206000, off: [0xdb], on: [0x00] },
								{ offset: 0x206004, off: [0x95, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206008, off: [0xdc], on: [0x00] },
								{ offset: 0x20600c, off: [0x96, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206010, off: [0xdd], on: [0x00] },
								{ offset: 0x206014, off: [0x97, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206018, off: [0xde], on: [0x00] },
								{ offset: 0x20601c, off: [0x98, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206020, off: [0xdf], on: [0x00] },
								{ offset: 0x206024, off: [0x99, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206028, off: [0xe0], on: [0x00] },
								{ offset: 0x20602c, off: [0x9a, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206030, off: [0xe1], on: [0x00] },
								{ offset: 0x206034, off: [0x9b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206038, off: [0xe2], on: [0x00] },
								{ offset: 0x20603c, off: [0x9c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206040, off: [0xe3], on: [0x00] },
								{ offset: 0x206044, off: [0x9d, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206048, off: [0xed], on: [0x00] },
								{ offset: 0x20604c, off: [0x9f, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206050, off: [0xee], on: [0x00] },
								{ offset: 0x206054, off: [0x9e, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206058, off: [0xef], on: [0x00] },
								{ offset: 0x20605c, off: [0xa0, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206060, off: [0xf0], on: [0x00] },
								{ offset: 0x206064, off: [0xa1, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206068, off: [0xf1], on: [0x00] },
								{ offset: 0x20606c, off: [0xa2, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206070, off: [0xf2], on: [0x00] },
								{ offset: 0x206074, off: [0xa3, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206078, off: [0xf4], on: [0x00] },
								{ offset: 0x20607c, off: [0xa4, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206080, off: [0xf7], on: [0x00] },
								{ offset: 0x206084, off: [0xa5, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206088, off: [0xf9], on: [0x00] },
								{ offset: 0x20608c, off: [0xa6, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206090, off: [0xfa], on: [0x00] },
								{ offset: 0x206094, off: [0xa7, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206098, off: [0xfb], on: [0x00] },
								{ offset: 0x20609c, off: [0xa8, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2060a0, off: [0xfc], on: [0x00] },
								{ offset: 0x2060a4, off: [0xa9, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2060a8, off: [0xfd], on: [0x00] },
								{ offset: 0x2060ac, off: [0xaa, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2060b0, off: [0xfe], on: [0x00] },
								{ offset: 0x2060b4, off: [0xab, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2060b8, off: [0xff], on: [0x00] },
								{ offset: 0x2060bc, off: [0xac, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2060c1, off: [0x01], on: [0x00] },
								{ offset: 0x2060c4, off: [0xad, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2060c8, off: [0x02, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2060cc, off: [0xae, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2060d0, off: [0x03, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2060d4, off: [0xaf, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2060d8, off: [0x04, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2060dc, off: [0xb0, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2060e0, off: [0x05, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2060e4, off: [0xb1, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2060e8, off: [0x06, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2060ec, off: [0xb2, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2060f0, off: [0x07, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2060f4, off: [0xb3, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2060f8, off: [0x08, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2060fc, off: [0xb4, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206100, off: [0x09, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206104, off: [0xb5, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206108, off: [0x18, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20610c, off: [0xb6, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206110, off: [0x19, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206114, off: [0xb7, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206118, off: [0x1a, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20611c, off: [0xb8, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206120, off: [0x1f, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206124, off: [0xb9, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206128, off: [0x20, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20612c, off: [0xba, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206130, off: [0x21, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206134, off: [0xbb, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206138, off: [0x23, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20613c, off: [0xbc, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206140, off: [0x24, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206144, off: [0xbd, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206148, off: [0x25, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20614c, off: [0xbe, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206150, off: [0x26, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206154, off: [0xbf, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206158, off: [0x29, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20615c, off: [0xc2, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206160, off: [0x2a, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206164, off: [0xc0, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206168, off: [0x2b, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20616c, off: [0xc1, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206170, off: [0x2d, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206174, off: [0xc3, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206178, off: [0x32, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20617c, off: [0xc4, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206180, off: [0x33, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206184, off: [0xc5, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206188, off: [0x34, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20618c, off: [0xc7, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206190, off: [0x35, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206194, off: [0xc6, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206198, off: [0x36, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20619c, off: [0xc8, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2061a0, off: [0x37, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061a4, off: [0x69, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061a8, off: [0x38, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061ac, off: [0x5c, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061b0, off: [0x39, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061b4, off: [0x71, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061b8, off: [0x3a, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061bc, off: [0x70, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061c0, off: [0x3b, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061c4, off: [0x96, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061c8, off: [0x3c, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061cc, off: [0x67, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061d0, off: [0x3d, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061d4, off: [0x68, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061d8, off: [0x3e, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061dc, off: [0x9a, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061e0, off: [0x40, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061e4, off: [0x5d, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061e8, off: [0xc9], on: [0x00] },
								{ offset: 0x2061ec, off: [0xc9, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2061f0, off: [0x42, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061f4, off: [0xcd, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2061f8, off: [0x43, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2061fc, off: [0xcb, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206200, off: [0x44, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206204, off: [0xcc, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206208, off: [0x45, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20620c, off: [0xcf, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206210, off: [0x46, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206214, off: [0xca, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206218, off: [0x47, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20621c, off: [0xce, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206220, off: [0x4d, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206224, off: [0xd0, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206228, off: [0x4e, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20622c, off: [0xd1, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206230, off: [0x4f, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206234, off: [0xd2, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206238, off: [0x51, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20623c, off: [0xd4, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206240, off: [0x52, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206244, off: [0xd3, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206248, off: [0x54, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20624c, off: [0xd5, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206250, off: [0x57, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206254, off: [0x78], on: [0x00] },
								{ offset: 0x206258, off: [0x5a, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20625c, off: [0xd6, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206260, off: [0x5b, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206264, off: [0xd7, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206268, off: [0x5c, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20626c, off: [0xd8, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206270, off: [0x5e, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206274, off: [0xd9, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206278, off: [0x5f, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20627c, off: [0xdb, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206280, off: [0x60, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206284, off: [0xdc, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206288, off: [0x5d, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20628c, off: [0xda, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206290, off: [0x16], on: [0x00] },
								{ offset: 0x206294, off: [0x0b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206298, off: [0x17], on: [0x00] },
								{ offset: 0x20629c, off: [0xff, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2062a0, off: [0x18], on: [0x00] },
								{ offset: 0x2062a4, off: [0x23, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2062a8, off: [0x19], on: [0x00] },
								{ offset: 0x2062ac, off: [0x0c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2062b0, off: [0x1a], on: [0x00] },
								{ offset: 0x2062b4, off: [0x07, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2062b8, off: [0x1b], on: [0x00] },
								{ offset: 0x2062bc, off: [0x04, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2062c0, off: [0x45], on: [0x00] },
								{ offset: 0x2062c4, off: [0x33, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2062c8, off: [0x91], on: [0x00] },
								{ offset: 0x2062cc, off: [0x60, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2062d0, off: [0x9b], on: [0x00] },
								{ offset: 0x2062d4, off: [0x67, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2062d8, off: [0x9c], on: [0x00] },
								{ offset: 0x2062dc, off: [0x68, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2062e0, off: [0x9d], on: [0x00] },
								{ offset: 0x2062e4, off: [0x6a, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2062e8, off: [0x1d], on: [0x00] },
								{ offset: 0x2062ec, off: [0x01, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2062f0, off: [0x58, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2062f4, off: [0xb5, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2062fc, off: [0x01], on: [0x00] },
								{ offset: 0x206300, off: [0x0c], on: [0x00] },
								{ offset: 0x206304, off: [0x2e, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206308, off: [0x0d], on: [0x00] },
								{ offset: 0x20630c, off: [0x28, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206310, off: [0x0e], on: [0x00] },
								{ offset: 0x206314, off: [0x25, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206318, off: [0x0f], on: [0x00] },
								{ offset: 0x20631c, off: [0x29, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206320, off: [0x10], on: [0x00] },
								{ offset: 0x206324, off: [0x26, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206328, off: [0x11], on: [0x00] },
								{ offset: 0x20632c, off: [0x2a, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206330, off: [0x12], on: [0x00] },
								{ offset: 0x206334, off: [0x27, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206338, off: [0x13], on: [0x00] },
								{ offset: 0x20633c, off: [0x2d, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206340, off: [0x14], on: [0x00] },
								{ offset: 0x206344, off: [0x2b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206348, off: [0x15], on: [0x00] },
								{ offset: 0x20634c, off: [0x2c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206350, off: [0x38], on: [0x00] },
								{ offset: 0x206354, off: [0x19, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206358, off: [0x39], on: [0x00] },
								{ offset: 0x20635c, off: [0x30, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206360, off: [0x3a], on: [0x00] },
								{ offset: 0x206364, off: [0x31, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206368, off: [0x46], on: [0x00] },
								{ offset: 0x20636c, off: [0x33, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206370, off: [0x2c], on: [0x00] },
								{ offset: 0x206374, off: [0x12, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206378, off: [0x2d], on: [0x00] },
								{ offset: 0x20637c, off: [0x13, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206380, off: [0x2e], on: [0x00] },
								{ offset: 0x206384, off: [0x14, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206388, off: [0x2f], on: [0x00] },
								{ offset: 0x20638c, off: [0x16, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206390, off: [0x30], on: [0x00] },
								{ offset: 0x206394, off: [0x18, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206398, off: [0x31], on: [0x00] },
								{ offset: 0x20639c, off: [0x0b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2063a0, off: [0x4b], on: [0x00] },
								{ offset: 0x2063a4, off: [0xff, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2063a8, off: [0x33], on: [0x00] },
								{ offset: 0x2063ac, off: [0x0c, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2063b0, off: [0x32], on: [0x00] },
								{ offset: 0x2063b4, off: [0x23, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2063b8, off: [0x34], on: [0x00] },
								{ offset: 0x2063bc, off: [0x07, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2063c0, off: [0x35], on: [0x00] },
								{ offset: 0x2063c4, off: [0x04, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2063c8, off: [0x6b], on: [0x00] },
								{ offset: 0x2063cc, off: [0x45, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2063d0, off: [0x6a], on: [0x00] },
								{ offset: 0x2063d4, off: [0x46, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2063d8, off: [0x6e], on: [0x00] },
								{ offset: 0x2063dc, off: [0x47, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2063e0, off: [0x6c], on: [0x00] },
								{ offset: 0x2063e4, off: [0x48, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2063e8, off: [0x64], on: [0x00] },
								{ offset: 0x2063ec, off: [0x4b, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2063f0, off: [0x6f], on: [0x00] },
								{ offset: 0x2063f4, off: [0x4e, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2063f8, off: [0x22], on: [0x00] },
								{ offset: 0x2063fc, off: [0x05, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206400, off: [0x24], on: [0x00] },
								{ offset: 0x206404, off: [0x09, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206408, off: [0x25], on: [0x00] },
								{ offset: 0x20640c, off: [0x0a, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206410, off: [0x26], on: [0x00] },
								{ offset: 0x206414, off: [0x0d, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206418, off: [0x28], on: [0x00] },
								{ offset: 0x20641c, off: [0x0f, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206420, off: [0x29], on: [0x00] },
								{ offset: 0x206424, off: [0x10, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206428, off: [0x2a], on: [0x00] },
								{ offset: 0x20642c, off: [0x11, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206430, off: [0x2b], on: [0x00] },
								{ offset: 0x206434, off: [0x24, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206438, off: [0x20], on: [0x00] },
								{ offset: 0x20643c, off: [0x01, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206440, off: [0x21], on: [0x00] },
								{ offset: 0x206444, off: [0x03, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206448, off: [0x23], on: [0x00] },
								{ offset: 0x20644c, off: [0x08, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206450, off: [0x27], on: [0x00] },
								{ offset: 0x206454, off: [0x0e, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206458, off: [0x80], on: [0x00] },
								{ offset: 0x20645c, off: [0x54, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206460, off: [0x93], on: [0x00] },
								{ offset: 0x206464, off: [0x55, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206468, off: [0x92], on: [0x00] },
								{ offset: 0x20646c, off: [0x60, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206470, off: [0x9e], on: [0x00] },
								{ offset: 0x206474, off: [0x6a, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206478, off: [0xc6], on: [0x00] },
								{ offset: 0x20647c, off: [0x85, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206480, off: [0xd5], on: [0x00] },
								{ offset: 0x206484, off: [0x93, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206488, off: [0xd6], on: [0x00] },
								{ offset: 0x20648c, off: [0x94, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206490, off: [0xe7], on: [0x00] },
								{ offset: 0x206494, off: [0x09], on: [0x00] },
								{ offset: 0x206498, off: [0xe8], on: [0x00] },
								{ offset: 0x20649c, off: [0x78], on: [0x00] },
								{ offset: 0x2064a0, off: [0xe9], on: [0x00] },
								{ offset: 0x2064a4, off: [0x2c, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2064a8, off: [0xea], on: [0x00] },
								{ offset: 0x2064ac, off: [0xed, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2064b0, off: [0x27, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2064b4, off: [0xbf, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2064b8, off: [0x4a, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2064bc, off: [0xb3, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2064c0, off: [0x4b, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2064c4, off: [0xb4, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2064c8, off: [0x4c, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2064cc, off: [0xc9, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2064d0, off: [0x50, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2064d4, off: [0xd1, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2064d8, off: [0x55, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2064dc, off: [0x4f, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2064e0, off: [0x56, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2064e4, off: [0x32, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2064e8, off: [0x58, 0x01], on: [0x00, 0x00] },
								{ offset: 0x2064ec, off: [0xb5, 0x02], on: [0x00, 0x00] },
								{ offset: 0x2064f0, off: [0x48], on: [0x00] },
								{ offset: 0x2064f4, off: [0x71], on: [0x00] },
								{ offset: 0x2064f8, off: [0x49], on: [0x00] },
								{ offset: 0x2064fc, off: [0x6c], on: [0x00] },
								{ offset: 0x206500, off: [0x94], on: [0x00] },
								{ offset: 0x206504, off: [0x55, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206508, off: [0x98], on: [0x00] },
								{ offset: 0x20650c, off: [0x28, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206510, off: [0x1b, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206514, off: [0x32, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206518, off: [0x1c, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20651c, off: [0x50, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206520, off: [0x2e, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206524, off: [0xc2, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206528, off: [0x2f, 0x01], on: [0x00, 0x00] },
								{ offset: 0x20652c, off: [0xc0, 0x02], on: [0x00, 0x00] },
								{ offset: 0x206530, off: [0x30, 0x01], on: [0x00, 0x00] },
								{ offset: 0x206534, off: [0xc3, 0x02], on: [0x00, 0x00] },
								{ offset: 0x20653c, off: [0x01], on: [0x00] },
							],
						},
					],
				},
			],
		],
	},
	{
		id: 'ddra',
		name: 'Dance Dance Revolution A',
		image: 'ddra.png',
		patchers: [
			[
				{
					appname: 'gamemdx.dll',
					version: '2019-04-22',
					patches: [
						{
							name: 'Force enable fast/slow',
							patches: [{ offset: 0x97c60, off: [0x8b, 0x41, 0x44], on: [0x31, 0xc0, 0x40] }],
						},
						{
							name: 'Force background judgement',
							patches: [{ offset: 0x97c50, off: [0x8b, 0x41], on: [0x31, 0xc0] }],
						},
						{
							name: 'Force darkest background',
							patches: [{ offset: 0x98a0e, off: [0x75, 0x03, 0x33, 0xc0], on: [0x33, 0xc0, 0xb0, 0x03] }],
						},
						{
							name: 'Song Unlock (Incomplete)',
							tooltip: 'Unlocks all event mode songs, ACES FOR ACES and ENDYMION, A20 (including ORCA), but still requires a musicdb edit to remove all restrictions.',
							patches: [
								// Event Mode unlocks A4A here
								{ offset: 0x846d1, off: [0x45, 0xf4], on: [0x90, 0xe9] },
								// A20+ Songs
								{ offset: 0x8d007, off: [0x32, 0xc0], on: [0xb0, 0x01] },
								// ORCA unlock (by Flipend0)
								{ offset: 0x8e5b9, off: [0x74], on: [0xeb] },
							],
						},
						{
							name: 'Tutorial Skip',
							patches: [{ offset: 0x49d33, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0x275d7, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Unlock options',
							tooltip: 'Unlocks e-amusement exclusive options such as ARROW COLOR',
							patches: [{ offset: 0x82733, off: [0x75], on: [0xeb] }],
						},
						{
							// by nibs & dogelition_man
							name: 'Force Cabinet Type 6',
							tooltip: 'This will cause the game to load a different theme, some assets (such as menu background) may not work with this forced code.',
							patches: [{ offset: 0xde18, off: [0xff, 0x24], on: [0xeb, 0x71] }],
						},
						{
							// by nibs
							name: 'Force ENDYMION menu background',
							tooltip: 'This will force the game to use the red cloud background instead of the default one.',
							patches: [{ offset: 0x1f98d, off: [0xec], on: [0xf0] }],
						},
						{
							// by nibs & dogelition_man
							name: 'Skip A20 menu background loading',
							tooltip: 'This skips the check for the golden menu background completely, and instead will load the default',
							patches: [{ offset: 0x1f944, off: [0x75], on: [0xeb] }],
						},
						{
							// by cube, ported by Azlekayn
							name: 'Opaque background for darkest background option',
							tooltip: 'This makes the background for the darkest background option be 99% opaque, hiding the background dancers and videos.',
							patches: [{ offset: 0x1c9f6c, off: [0x33, 0x33, 0x33, 0x3f], on: [0xa4, 0x70, 0x7d, 0x3f] }],
						},
						{
							// by naryu
							name: 'Enable cabinet lights for Cabinet Type 6',
							tooltip: 'This enables the use of cabinet lighting for Cabinet Type 6',
							patches: [
								{ offset: 0xbcd1, off: [0xe8, 0x1a, 0x21], on: [0xb8, 0x00, 0x00] },
								{ offset: 0x2cb8a, off: [0xe8, 0x61, 0x12, 0xfe, 0xff], on: [0xb8, 0x00, 0x00, 0x00, 0x00] },
								{ offset: 0x2d0ae, off: [0xe8, 0x3d, 0x0d, 0xfe, 0xff], on: [0xb8, 0x00, 0x00, 0x00, 0x00] },
							],
						},
						{
							name: 'Enable DDR SELECTION',
							tooltip: 'Even works in offline/local mode!',
							patches: [{ offset: 0x7ceb7, off: [0xe8, 0xf4, 0x9f, 0x01], on: [0xb8, 0x01, 0x00, 0x00] }],
						},
						{
							name: 'Premium Free',
							patches: [{ offset: 0x1f0a6, off: [0x01], on: [0x00] }],
						},
						{
							name: 'Mute announcer',
							tooltip: 'Also mutes crowd cheering and booing during gameplay',
							patches: [
								{ offset: 0x2a468, off: [0x0f, 0x84], on: [0x90, 0xe9] },
								{ offset: 0x1b78bb, off: [0x76], on: [0x62] },
								{ offset: 0x1b78d7, off: [0x76], on: [0x62] },
							],
						},
						{
							name: 'Force DDR SELECTION theme everywhere',
							tooltip: 'Skips intro and enables the skin selected below on all songs',
							patches: [
								{ offset: 0x26871, off: [0x0f, 0x84], on: [0x90, 0xe9] },
								{ offset: 0x96a1d, off: [0x75, 0x49], on: [0x90, 0x90] },
								{ offset: 0x96a2a, off: [0x77, 0x3c], on: [0x90, 0x90] },
								{ offset: 0x96a2c, off: [0xff, 0x24], on: [0xeb, 0x11] },
							],
						},
						{
							type: 'union',
							name: 'Choose forced theme',
							offset: 0x96a40,
							patches: [
								{
									name: '1st',
									patch: [0x01],
								},
								{
									name: 'EXTREME',
									patch: [0x02],
								},
								{
									name: 'SuperNOVA2',
									patch: [0x03],
								},
								{
									name: 'X2',
									patch: [0x04],
								},
								{
									name: '2013',
									patch: [0x05],
								},
							],
						},
					],
				},
				{
					appname: 'gamemdx.dll',
					version: '2018-10-22',
					patches: [
						{
							name: 'Force enable fast/slow',
							patches: [{ offset: 0x8ca60, off: [0x8b, 0x41, 0x44], on: [0x31, 0xc0, 0x40] }],
						},
						{
							name: 'Force background judgement',
							patches: [{ offset: 0x8ca50, off: [0x8b, 0x41, 0x40], on: [0x31, 0xc0, 0x40] }],
						},
						{
							name: 'Force darkest background',
							patches: [{ offset: 0x8d53b, off: [0x75, 0x03, 0x33, 0xc0], on: [0x33, 0xc0, 0xb0, 0x03] }],
						},
						{
							name: 'Unlock all songs',
							tooltip: 'Unlocks all e-amusement songs, event mode songs, ACES FOR ACES and ENDYMION',
							patches: [
								//e-amusement
								{ offset: 0x8ed83, off: [0x32, 0xc0], on: [0xb0, 0x01] },
								//event mode
								{ offset: 0x8463b, off: [0x75], on: [0xeb] },
								//ACES FOR ACES, ENDYMION, ???
								{ offset: 0x846d1, off: [0x32, 0xc0], on: [0xb0, 0x01] },
							],
						},
						{
							name: 'Tutorial Skip',
							patches: [{ offset: 0x45704, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0x24667, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Unlock options',
							tooltip: 'Unlocks e-amusement exclusive options such as ARROW COLOR',
							patches: [{ offset: 0x7a6a2, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Force Extra Stage/Extra Encore Stage (fixed)',
							patches: [
								{ offset: 0x5ac77, off: [0x0f, 0x85], on: [0x90, 0xe9] },
								{ offset: 0x5add2, off: [0x0f, 0x85], on: [0x90, 0xe9] },
							],
						},
						{
							name: 'Enable DDR SELECTION',
							tooltip: 'Even works in offline/local mode!',
							patches: [{ offset: 0x75774, off: [0xe8, 0xc7, 0x71, 0x01], on: [0xb8, 0x01, 0x00, 0x00] }],
						},
						{
							name: 'Premium Free',
							tooltip: 'Song clears/scores only. Profile progress and custom settings do not save. Reboot game to re-query for scores.',
							patches: [{ offset: 0x1c9df, off: [0x01], on: [0x00] }],
						},
					],
				},
				{
					appname: 'gamemdx.dll',
					version: '2018-04-23',
					patches: [
						{
							name: 'Force enable fast/slow',
							patches: [{ offset: 0x84ec0, off: [0x8b, 0x41, 0x44], on: [0x31, 0xc0, 0x40] }],
						},
						{
							name: 'Force background judgement',
							patches: [{ offset: 0x84eb0, off: [0x8b, 0x41, 0x40], on: [0x31, 0xc0, 0x40] }],
						},
						{
							name: 'Force darkest background',
							patches: [
								{ offset: 0x84e84, off: [0xcc, 0xcc, 0xcc, 0xcc, 0xcc], on: [0x31, 0xc0, 0xb0, 0x03, 0xc3] },
								{ offset: 0x1ae838, off: [0x40, 0xdf, 0x0d, 0x10], on: [0x84, 0x5a, 0x08, 0x10] },
							],
						},
						{
							name: 'Unlock all songs (old)',
							tooltip: "Do not use this anymore. It's only here to toggle off.",
							patches: [{ offset: 0x1ae58c, off: [0x6c], on: [0x66] }],
						},
						{
							name: 'Unlock all songs',
							tooltip: 'Unlocks all e-amusement songs, event mode songs, ACES FOR ACES and ENDYMION',
							patches: [
								//e-amusement
								{ offset: 0x86cd8, off: [0x32, 0xc0], on: [0xb0, 0x01] },
								//event mode
								{ offset: 0x7defe, off: [0x75], on: [0xeb] },
								//ACES FOR ACES, ENDYMION
								{ offset: 0x7df3e, off: [0x32, 0xc0], on: [0xb0, 0x01] },
							],
						},
						{
							name: 'Tutorial Skip',
							patches: [{ offset: 0x41844, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0x23127, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Unlock options',
							tooltip: 'Unlocks e-amusement exclusive options such as ARROW COLOR',
							patches: [{ offset: 0x73e52, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Force Extra Stage/Extra Encore Stage (fixed)',
							patches: [
								{ offset: 0x5483b, off: [0x0f, 0x85], on: [0x90, 0xe9] },
								{ offset: 0x549c0, off: [0x0f, 0x85], on: [0x90, 0xe9] },
							],
						},
						{
							name: 'Disable Credit Consumption',
							tooltip: 'Similar to FREE PLAY, but allows premium credit options. Requires 1 credit.',
							patches: [
								{ offset: 0x8b8a, off: [0x74, 0x0b], on: [0xeb, 0x09] },
								{ offset: 0x8bec, off: [0x74, 0x0b], on: [0xeb, 0x09] },
								{ offset: 0x8c4c, off: [0x74, 0x0b], on: [0xeb, 0x09] },
								{ offset: 0x8bc9, off: [0x74, 0x2e], on: [0xeb, 0x2c] },
								{ offset: 0x8c29, off: [0x74, 0x2e], on: [0xeb, 0x2c] },
							],
						},
					],
				},
			],
		],
	},
	{
		id: 'ddra20',
		name: 'Dance Dance Revolution A20',
		image: 'ddra20.png',
		patchers: [
			[
				{
					appname: 'gamemdx.dll',
					version: '2020-02-03',
					patches: [
						{
							name: 'Force enable fast/slow',
							patches: [{ offset: 0xa0d40, off: [0x8b, 0x41, 0x44], on: [0x31, 0xc0, 0x40] }],
						},
						{
							name: 'Force background judgement',
							patches: [{ offset: 0xa0d30, off: [0x8b, 0x41], on: [0x31, 0xc0] }],
						},
						{
							name: 'Force darkest background',
							patches: [{ offset: 0xa1aee, off: [0x75, 0x03, 0x33, 0xc0], on: [0x33, 0xc0, 0xb0, 0x03] }],
						},
						{
							name: 'Song Unlock',
							patches: [
								{ offset: 0x952c6, off: [0x75, 0x08, 0x5f, 0x32, 0xc0], on: [0x90, 0x90, 0x5f, 0xb0, 0x01] },
								{ offset: 0x969a3, off: [0x0f, 0x85], on: [0x90, 0xe9] },
								{ offset: 0x1cec24, off: [0x65], on: [0x62] },
								{ offset: 0x1cec2c, off: [0x72], on: [0x62] },
								{ offset: 0x1cec34, off: [0x6c], on: [0x62] },
								{ offset: 0x1cec40, off: [0x6c], on: [0x62] },
							],
						},
						{
							name: 'Tutorial Skip',
							patches: [{ offset: 0x4ad33, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Timer Freeze',
							patches: [{ offset: 0x28545, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Unlock options',
							tooltip: 'Unlocks e-amusement exclusive options such as ARROW COLOR',
							patches: [{ offset: 0x8acf3, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Enable DDR SELECTION',
							tooltip: 'Even works in offline/local mode!',
							patches: [{ offset: 0x85314, off: [0xe8, 0xa7, 0xaa, 0x01], on: [0xb8, 0x01, 0x00, 0x00] }],
						},
						{
							name: 'Premium Free',
							patches: [{ offset: 0x1f788, off: [0x01], on: [0x00] }],
						},
						{
							name: 'Mute announcer',
							tooltip: 'Also mutes crowd cheering and booing during gameplay',
							patches: [
								{ offset: 0x2b698, off: [0x0f, 0x84], on: [0x90, 0xe9] },
								{ offset: 0x1c16f3, off: [0x76], on: [0x62] },
								{ offset: 0x1c170f, off: [0x76], on: [0x62] },
							],
						},
						{
							name: 'Force DDR SELECTION theme everywhere',
							tooltip: 'Skips intro and enables the skin selected below on all songs',
							patches: [
								{ offset: 0x27431, off: [0x0f, 0x84], on: [0x90, 0xe9] },
								{ offset: 0x9f92d, off: [0x75, 0x49], on: [0x90, 0x90] },
								{ offset: 0x9f93a, off: [0x77, 0x3c], on: [0x90, 0x90] },
								{ offset: 0x9f93c, off: [0xff, 0x24], on: [0xeb, 0x11] },
							],
						},
						{
							type: 'union',
							name: 'Choose forced theme',
							offset: 0x9f950,
							patches: [
								{
									name: '1st',
									patch: [0x01],
								},
								{
									name: 'EXTREME',
									patch: [0x02],
								},
								{
									name: 'SuperNOVA2',
									patch: [0x03],
								},
								{
									name: 'X2',
									patch: [0x04],
								},
								{
									name: '2013',
									patch: [0x05],
								},
							],
						},
					],
				},
			],
		],
	},
	{
		id: 'gc4ex',
		name: 'Groove Coaster 4EX Infinity Highway',
		image: 'gc4ex.png',
		patchers: [
			{
				appname: '',
				version: '',
				patches: [],
			},
		],
	},
	{
		id: 'gfdmv5',
		name: 'GuitarFreaks & DrumMania V5 Rock to Infinity',
		image: 'gfdmv5.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'gfdmv6',
		name: 'GuitarFreaks & DrumMania V6 BLAZING!!!!',
		image: 'gfdmv6.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'gfdmv7',
		name: 'GuitarFreaks & DrumMania V7',
		image: 'gfdmv7.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'gitadoraod',
		name: 'GITADORA OverDrive',
		image: 'od.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
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
					appname: '',
					version: '',
					patches: [],
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
					appname: '',
					version: '',
					patches: [],
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
					appname: '',
					version: '',
					patches: [],
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
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'jubeatprop',
		name: 'jubeat prop',
		image: 'prop.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'jubeatqubell',
		name: 'jubeat Qubell',
		image: 'qubell.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'jubeatclan',
		name: 'jubeat clan',
		image: 'clan.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'jubeatfesto',
		name: 'jubeat festo',
		image: 'festo.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'museca1',
		name: 'MÚSECA',
		image: 'museca1.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'museca2',
		name: 'MÚSECA 1+1/2',
		image: 'museca2.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'nostalgiaop2',
		name: 'Nostalgia Op.2',
		image: 'op2.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'popn22lapistoria',
		name: "pop'n music 22 Lapistoria",
		image: 'lapis.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'popn23eclale',
		name: "pop'n music 23 éclale",
		image: 'eclale.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'popn24usaneko',
		name: "pop'n music 24 うさぎと猫と少年の夢",
		image: 'usaneko.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'popn25peace',
		name: "pop'n music 25 peace",
		image: 'peace.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'reflecbeat-groovin-upper',
		name: "REFLEC BEAT groovin'!! Upper",
		image: 'groovin.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'reflecbeat-volzza2',
		name: 'REFLEC BEAT Volzza 2',
		image: 'volzza2.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'reflecbeat-reflesia',
		name: 'REFLEC BEAT The Reflesia of Eternity',
		image: 'reflesia.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'sdvx3-s2',
		name: 'SDVX III Season 2',
		image: 'sdvx.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'sdvx4',
		name: 'SDVX IV HEAVENLY HAVEN',
		image: 'sdvx4.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
	{
		id: 'sdvx5',
		name: 'SDVX V VIVID WAVE',
		image: 'sdvx5.png',
		patchers: [
			[
				{
					appname: '',
					version: '',
					patches: [],
				},
			],
		],
	},
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
]

module.exports = supportedGames
