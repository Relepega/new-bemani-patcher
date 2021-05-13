const chuni = [
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
					version: '(1.40.00) CRYSTAL',
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
				{
					appname: 'chuniApp.exe',
					version: '(1.45.00) CRYSTAL PLUS',
					patches: [
						{
							name: 'Allow 127.0.0.1/localhost as the network server',
							patches: [
								{ offset: 0x997380, off: [0x55, 0x8b, 0xec], on: [0x31, 0xc0, 0xc3] },
								{ offset: 0x1717080, off: [0x31, 0x32, 0x37, 0x2f], on: [0x30, 0x2f, 0x38, 0x00] },
							],
						},
						{
							name: 'Disable shop close lockout',
							tooltip: 'Disables ~12-8am lockout. Does not disable maint lockout from 6:30-7am JST',
							patches: [{ offset: 0x9bead3, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Force shared audio mode, system audio samplerate must be 48000',
							tooltip: 'Improves compatibility but may increase latency',
							patches: [{ offset: 0xcf1aba, off: [0x01], on: [0x00] }],
						},
						{
							name: 'Force 2 channel audio output',
							patches: [{ offset: 0xcf1b91, off: [0x75, 0x3f], on: [0x90, 0x90] }],
						},
						{
							name: 'Disable Song Select Timer',
							tooltip: 'May only work when playing with card.',
							patches: [{ offset: 0x765dc2, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Set All Timers to 999',
							patches: [{ offset: 0x613c70, off: [0x8b, 0x44, 0x24, 0x04, 0x69, 0xc0, 0xe8, 0x03, 0x00, 0x00], on: [0xb8, 0x58, 0x3e, 0x0f, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							name: 'Better patch for head-to-head play',
							tooltip: 'Fix infinite sync while trying to connect to head to head play.',
							patches: [{ offset: 0x478e03, off: [0x01], on: [0x00] }],
						},
						{
							// ikaros14
							name: 'Increase max credits to 254',
							patches: [{ offset: 0xc93b67, off: [0x8a, 0x5d, 0x14], on: [0xb3, 0xfe, 0x90] }],
						},
						{
							// ikaros14
							name: 'Free Play',
							tooltip: 'Endless credits',
							patches: [{ offset: 0xc93f85, off: [0x28], on: [0x08] }],
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
]

export default chuni
