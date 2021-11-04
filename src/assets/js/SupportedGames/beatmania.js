const bm2dx = [
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
							name: 'Hide "PASELI: NOT AVAILABLE"',
							patches: [{ offset: 0x2bd2b4, off: [0x48, 0x8d, 0x05, 0xdd, 0xd7, 0x4e, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }],
						},
						{
							name: 'Hide "CREDIT: %d"',
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
		image: 'bistrover.png', // game icon
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
							name: 'SSE4.2 Fix',
							patches: [{ offset: 0x20a454, off: [0xf3, 0x45, 0x0f], on: [0x90, 0x90, 0x90] }],
						},
						{
							name: 'Skip Camera Error',
							patches: [{ offset: 0x6b231b, off: [0x84], on: [0x81] }],
						},
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
							name: 'Bypass lightning monitor error',
							patches: [{ offset: 0x6a4d91, off: [0x0f, 0x85], on: [0x90, 0xe9] }],
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
							name: '1P Premium Free',
							patches: [
								{
									offset: 0x65bd64,
									off: [0x75],
									on: [0xeb],
								},
							],
						},
						{
							name: '2P Premium Free',
							patches: [
								{
									offset: 0x65bf15,
									off: [0x74, 0x55],
									on: [0x90, 0x90],
								},
								{ offset: 0x65bf2b, off: [0x74, 0x3f], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Premium Free Timer Freeze',
							tooltip: 'Freezes the timer in PREMIUM FREE mode, allowing unlimited play until exit',
							patches: [{ offset: 0x42e5dd, off: [0x7e], on: [0xeb] }],
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
							name: 'CS-style song start delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [
								{
									offset: 0x68d453,
									off: [0x7d, 0x4d],
									on: [0x90, 0x90],
								},
							],
						},
						{
							name: 'Cursor Lock',
							patches: [{ offset: 0x662ecf, off: [0x74, 0x1f], on: [0x90, 0x90] }],
						},
						{
							name: 'Quick Retry',
							patches: [{ offset: 0x40e36f, off: [0x32, 0xc0], on: [0xb0, 0x01] }],
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
							name: 'Always show FAST/SLOW total',
							patches: [
								{ offset: 0x678863, off: [0x74], on: [0x75] },
								{ offset: 0x678a80, off: [0x74], on: [0x75] },
							],
						},
						{
							name: 'Hide all bottom text',
							patches: [
								{ offset: 0x32ea01, off: [0x7f, 0x12, 0x44, 0x8b, 0xcb, 0x4c, 0x8d, 0x05, 0xbb, 0x06, 0x63, 0x00], on: [0x90, 0xe9, 0x22, 0x00, 0x00, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //EXTRA PASELI: %d
								{ offset: 0x32edbd, off: [0xe8, 0xae, 0xaf, 0x00, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90] }, //INSERT COIN[S]
								{ offset: 0x32ec0b, off: [0xff, 0x15, 0xcf, 0xa7, 0x62, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //PASELI: ******
								{ offset: 0x32eca9, off: [0xff, 0x15, 0x31, 0xa7, 0x62, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //PASELI: NO ACCOUNT
								{ offset: 0x32eb24, off: [0x48, 0x8d, 0x05, 0x3d, 0x12, 0x77, 0x04], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //PASELI: NOT AVAILABLE
								{ offset: 0x32e926, off: [0xff, 0x15, 0xb4, 0xaa, 0x62, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //CREDIT: %d
							],
						},
						{
							name: 'FREE PLAY text to LED ticker',
							tooltip: 'Song Title/Ticker information will display instead of FREEPLAY',
							patches: [{ offset: 0x32eabf, off: [0xad, 0x05, 0x63, 0x00], on: [0x49, 0x56, 0x00, 0x05] }],
						},
					],
				},
				{
					// object containing Patcher data
					appname: 'bm2dx.dll', // app entryfile
					version: '2021-07-12', // app version
					patches: [
						{
							name: 'SSE4.2 Fix',
							patches: [{ offset: 0x28c714, off: [0xf3, 0x45, 0x0f], on: [0x90, 0x90, 0x90] }],
						},
						{
							name: 'Skip Camera Error',
							patches: [{ offset: 0x752cbb, off: [0x84], on: [0x81] }],
						},
						{
							name: 'Force 120hz timing and adapter mode in LDJ (Experimental)',
							patches: [
								{ offset: 0x45ece3, off: [0x75], on: [0xeb] },
								{ offset: 0x8537fe, off: [0x3c], on: [0x78] },
								{ offset: 0x8539e9, off: [0x74, 0x03], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Shim Lightning Mode IO (for spicetools)',
							patches: [
								{
									offset: 0x7bb07e,
									off: [0x0f, 0x84, 0x8d, 0x00, 0x00, 0x00],
									on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90],
								},
								{ offset: 0x86dda4, off: [0x0f, 0x84], on: [0x90, 0xe9] },
								{ offset: 0x86e510, off: [0x9c, 0xe4], on: [0x3c, 0xdd] },
							],
						},
						{
							name: 'Bypass lightning monitor error',
							patches: [{ offset: 0x745a31, off: [0x0f, 0x85], on: [0x90, 0xe9] }],
						},
						{
							name: 'Force LDJ software video decoder for all boot modes',
							patches: [
								{
									offset: 0x7bb07a,
									off: [0x02],
									on: [0x05],
								},
							],
						},
						{
							name: 'Unscramble touch screen keypad in TDJ',
							patches: [
								{
									offset: 0x7fa095,
									off: [0x4d, 0x03, 0xc8, 0x49, 0xf7, 0xf1],
									on: [0xba, 0x0c, 0x00, 0x00, 0x00, 0x90],
								},
							],
						},
						{
							name: '1P Premium Free',
							patches: [
								{
									offset: 0x6fa329,
									off: [0x75],
									on: [0xeb],
								},
							],
						},
						{
							name: '2P Premium Free',
							patches: [
								{
									offset: 0x6fa540,
									off: [0x74, 0x56],
									on: [0x90, 0x90],
								},
								{ offset: 0x6fa52a, off: [0x74, 0x6c], on: [0x90, 0x90] },
							],
						},
						{
							name: '2P Force ARENA',
							patches: [{ offset: 0x6fa555, off: [0x75, 0x41], on: [0x90, 0x90] }],
						},
						{
							name: 'Force BPL Battle',
							patches: [{ offset: 0x6fa57a, off: [0x74, 0x1c], on: [0x90, 0x90] }],
						},
						{
							name: 'Premium Free Timer Freeze',
							tooltip: 'Freezes the timer in PREMIUM FREE mode, allowing unlimited play until exit',
							patches: [{ offset: 0x4cb5ed, off: [0x7e], on: [0xeb] }],
						},
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x4c6108, off: [0x75, 0x2d], on: [0x90, 0x90] }],
						},
						{
							name: 'Unlock All 12s',
							patches: [
								{
									offset: 0x4c5ea0,
									off: [0x83, 0xff, 0x03, 0x74, 0x05, 0x83, 0xff, 0x08],
									on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90],
								},
							],
						},
						{
							name: 'Skip Decide Screen',
							patches: [
								{
									offset: 0x3cd510,
									off: [0xe8, 0x6b, 0x00, 0x00, 0x00],
									on: [0x90, 0x90, 0x90, 0x90, 0x90],
								},
							],
						},
						{
							name: 'CS-style song start delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [
								{
									offset: 0x72d503,
									off: [0x7d, 0x4d],
									on: [0x90, 0x90],
								},
							],
						},
						{
							name: 'Cursor Lock',
							patches: [{ offset: 0x701cff, off: [0x74, 0x1f], on: [0x90, 0x90] }],
						},
						{
							name: 'Quick Retry',
							patches: [{ offset: 0x4a80bf, off: [0x32, 0xc0], on: [0xb0, 0x01] }],
						},
						{
							name: 'Standard/Menu Timer Freeze',
							patches: [{ offset: 0x779aa7, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'WASAPI Shared Mode (with 44100Hz)',
							patches: [{ offset: 0x28c801, off: [0x01], on: [0x00] }],
						},
						{
							name: 'Always show FAST/SLOW total',
							patches: [
								{ offset: 0x717ca3, off: [0x74], on: [0x75] },
								{ offset: 0x717ec0, off: [0x74], on: [0x75] },
							],
						},
					],
				},
				{
					// object containing Patcher data
					appname: 'bm2dx.dll', // app entryfile
					version: '2021-08-30', // app version
					patches: [
						{
							name: 'SSE4.2 Fix',
							patches: [{ offset: 0x28c824, off: [0xf3, 0x45, 0x0f], on: [0x90, 0x90, 0x90] }],
						},
						{
							name: 'Skip Camera Error',
							patches: [{ offset: 0x7536eb, off: [0x84], on: [0x81] }],
						},
						{
							name: 'Force 120hz timing and adapter mode in LDJ (Experimental)',
							patches: [
								{ offset: 0x45f0c3, off: [0x75], on: [0xeb] },
								{ offset: 0x8548fe, off: [0x3c], on: [0x78] },
								{ offset: 0x854ae9, off: [0x74, 0x03], on: [0x90, 0x90] },
							],
						},
						{
							name: 'Shim Lightning Mode IO (for spicetools)',
							patches: [
								{
									offset: 0x7bbe8e,
									off: [0x0f, 0x84, 0x8d, 0x00, 0x00, 0x00],
									on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90],
								},
								{ offset: 0x86eea4, off: [0x0f, 0x84], on: [0x90, 0xe9] },
								{ offset: 0x86f610, off: [0x9c, 0xe4], on: [0x3c, 0xdd] },
							],
						},
						{
							name: 'Bypass lightning monitor error',
							patches: [{ offset: 0x746401, off: [0x0f, 0x85], on: [0x90, 0xe9] }],
						},
						{
							name: 'Force LDJ software video decoder for all boot modes',
							patches: [
								{
									offset: 0x7bbe8a,
									off: [0x02],
									on: [0x05],
								},
							],
						},
						{
							name: 'Unscramble touch screen keypad in TDJ',
							patches: [
								{
									offset: 0x7fb075,
									off: [0x4d, 0x03, 0xc8, 0x49, 0xf7, 0xf1],
									on: [0xba, 0x0c, 0x00, 0x00, 0x00, 0x90],
								},
							],
						},
						{
							name: '1P Premium Free',
							patches: [
								{
									offset: 0x6fac69,
									off: [0x75],
									on: [0xeb],
								},
							],
						},
						{
							name: '2P Premium Free',
							patches: [
								{
									offset: 0x6fae80,
									off: [0x74, 0x56],
									on: [0x90, 0x90],
								},
								{ offset: 0x6fae6a, off: [0x74, 0x6c], on: [0x90, 0x90] },
							],
						},
						{
							name: '2P Force ARENA',
							patches: [{ offset: 0x6fae95, off: [0x75, 0x41], on: [0x90, 0x90] }],
						},
						{
							name: 'Force BPL Battle',
							patches: [{ offset: 0x6faeba, off: [0x74, 0x1c], on: [0x90, 0x90] }],
						},
						{
							name: 'Force Max V-Discs',
							tooltip: 'Only for infinity retry when playing LEGENDARIA charts in Premium Free mode',
							patches: [
								{
									offset: 0x4b2059,
									off: [0x44, 0x89, 0x4c, 0x81, 0x08, 0xc3, 0xcc, 0x48, 0x89, 0x5c, 0x24, 0x08],
									on: [0xc7, 0x44, 0x81, 0x08, 0x10, 0x00, 0x00, 0x00, 0x90, 0x90, 0x90, 0x90],
								},
							],
						},
						{
							name: 'Hide all bottom text',
							patches: [
								{ offset: 0x3b2416, off: [0xff, 0x15, 0xcc, 0x3f, 0x6c, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //CREDIT: %d
								{ offset: 0x3b24f1, off: [0x7f, 0x12, 0x44, 0x8b, 0xcb, 0x4c, 0x8d, 0x05, 0x8b, 0xb2, 0x6c, 0x00], on: [0x90, 0xe9, 0x22, 0x00, 0x00, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //EXTRA PASELI: %d
								{ offset: 0x3b2614, off: [0x48, 0x8d, 0x05, 0x9d, 0x0b, 0x90, 0x04], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //PASELI: NOT AVAILABLE
								{ offset: 0x3b26cc, off: [0xff, 0x15, 0x16, 0x3d, 0x6c, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //PASELI: %d
								{ offset: 0x3b26fb, off: [0xff, 0x15, 0xe7, 0x3c, 0x6c, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //PASELI: ******
								{ offset: 0x3b28ad, off: [0xe8, 0x5e, 0xb1, 0x00, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90] }, //INSERT COIN[S]
								{ offset: 0x3b2799, off: [0xff, 0x15, 0x49, 0x3c, 0x6c, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //PASELI: NO ACCOUNT
							],
						},
						{
							name: 'Hide Time Limit at result',
							patches: [
								{
									offset: 0x7356cf,
									off: [0x84, 0xc0],
									on: [0x90, 0x90],
								},
							],
						},
						{
							name: 'Premium Free Timer Freeze',
							tooltip: 'Freezes the timer in PREMIUM FREE mode, allowing unlimited play until exit',
							patches: [{ offset: 0x4cbb4d, off: [0x7e], on: [0xeb] }],
						},
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x4c6668, off: [0x75, 0x2d], on: [0x90, 0x90] }],
						},
						{
							name: 'Unlock All 12s',
							patches: [
								{
									offset: 0x4c6400,
									off: [0x83, 0xff, 0x03, 0x74, 0x05, 0x83, 0xff, 0x08],
									on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90],
								},
							],
						},
						{
							name: 'Skip Decide Screen',
							patches: [
								{
									offset: 0x3cd720,
									off: [0xe8, 0x6b, 0x00, 0x00, 0x00],
									on: [0x90, 0x90, 0x90, 0x90, 0x90],
								},
							],
						},
						{
							name: 'CS-style song start delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [
								{
									offset: 0x72de93,
									off: [0x7d, 0x4d],
									on: [0x90, 0x90],
								},
							],
						},
						{
							name: 'Cursor Lock',
							patches: [{ offset: 0x70264f, off: [0x74, 0x1f], on: [0x90, 0x90] }],
						},
						{
							name: 'Quick Retry',
							patches: [{ offset: 0x4a84ff, off: [0x32, 0xc0], on: [0xb0, 0x01] }],
						},
						{
							name: 'Standard/Menu Timer Freeze',
							patches: [{ offset: 0x77a517, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'WASAPI Shared Mode (with 44100Hz)',
							patches: [{ offset: 0x28c911, off: [0x01], on: [0x00] }],
						},
						{
							name: 'Always show FAST/SLOW total',
							patches: [
								{ offset: 0x718623, off: [0x74], on: [0x75] },
								{ offset: 0x718840, off: [0x74], on: [0x75] },
							],
						},
					],
				},
				{
					// object containing Patcher data
					appname: 'bm2dx.dll', // app entryfile
					version: '2021-09-15', // app version
					patches: [
						{
							name: 'Bypass lightning monitor error',
							patches: [{ offset: 0x7464a1, off: [0x0f, 0x85], on: [0x90, 0xe9] }],
						},
						{
							name: 'Shim Lightning Mode IO (for spicetools)',
							patches: [
								{ offset: 0x86efd4, off: [0x0f, 0x84], on: [0x90, 0xe9] },
								{ offset: 0x86f740, off: [0x9c, 0xe4], on: [0x3c, 0xdd] },
							],
						},
						{
							name: 'Lightning Mode camera crash fix (for spicetools)',
							patches: [
								{
									offset: 0x7bbf2e,
									off: [0x0f, 0x84, 0x8d, 0x00, 0x00, 0x00],
									on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90],
								},
							],
						},
						{
							name: 'Force LDJ software video decoder for all boot modes',
							patches: [
								{
									offset: 0x7bbf27,
									off: [0x83, 0x78, 0x08, 0x02],
									on: [0x83, 0x78, 0x08, 0x05],
								},
							],
						},
						{
							name: 'Force 120hz timing and adapter mode in LDJ (Experimental)',
							patches: [
								{ offset: 0x45f163, off: [0x75], on: [0xeb] },
								{ offset: 0x854a2e, off: [0x3c], on: [0x78] },
								{ offset: 0x854c19, off: [0x74, 0x03], on: [0x90, 0x90] },
							],
						},
						{
							name: 'WASAPI Shared Mode (with 44100Hz)',
							patches: [{ offset: 0x28c9a1, off: [0x01], on: [0x00] }],
						},
						{
							name: 'Unscramble touch screen keypad in TDJ',
							patches: [
								{
									offset: 0x7fb125,
									off: [0x4d, 0x03, 0xc8, 0x49, 0xf7, 0xf1],
									on: [0xba, 0x0c, 0x00, 0x00, 0x00, 0x90],
								},
							],
						},
						{
							name: 'Skip CAMERA DEVICE ERROR prompt',
							tooltip: 'Prevents the CAMERA DEVICE ERROR message from popping up on boot',
							patches: [{ offset: 0x75378b, off: [0x84], on: [0x81] }],
						},
						{
							name: '1P Premium Free',
							tooltip: 'Forcibly enables Premium Free option for 1P',
							patches: [{ offset: 0x6fad09, off: [0x75], on: [0xeb] }],
						},
						{
							name: '2P Premium Free',
							tooltip: 'Forcibly enables Premium Free option for 2P',
							patches: [
								{ offset: 0x6faf0a, off: [0x74, 0x6c], on: [0x90, 0x90] },
								{ offset: 0x6faf20, off: [0x74, 0x56], on: [0x90, 0x90] },
							],
						},
						{
							name: '2P force ARENA',
							tooltip: 'Allows selecting Arena option on 2P side',
							patches: [{ offset: 0x6faf35, off: [0x75, 0x41], on: [0x90, 0x90] }],
						},
						{
							name: 'Force BPL BATTLE',
							tooltip: 'Forcibly enables BPL BATTLE option',
							patches: [{ offset: 0x6faf5a, off: [0x74, 0x1c], on: [0x90, 0x90] }],
						},
						{
							name: 'Skip Decide Screen',
							patches: [
								{
									offset: 0x3cd7c0,
									off: [0xe8, 0x6b, 0x00, 0x00, 0x00],
									on: [0x90, 0x90, 0x90, 0x90, 0x90],
								},
							],
						},
						{
							name: 'CS-style song start delay',
							tooltip: 'Holding Start will pause the song at the beginning until you release it',
							patches: [
								{
									offset: 0x72df33,
									off: [0x7d, 0x4d],
									on: [0x90, 0x90],
								},
							],
						},
						{
							name: 'Cursor Lock',
							patches: [{ offset: 0x7026ef, off: [0x74, 0x1f], on: [0x90, 0x90] }],
						},
						{
							name: 'Quick Retry',
							patches: [{ offset: 0x4a859f, off: [0x32, 0xc0], on: [0xb0, 0x01] }],
						},
						{
							name: 'Always show FAST/SLOW total',
							patches: [
								{ offset: 0x7186c3, off: [0x74], on: [0x75] },
								{ offset: 0x7188e0, off: [0x74], on: [0x75] },
							],
						},
						{
							name: 'Force max V-Discs',
							tooltip: 'Allows for infinite Leggendaria plays in Premium Free',
							patches: [
								{
									offset: 0x4b20f9,
									off: [0x44, 0x89, 0x4c, 0x81, 0x08, 0xc3, 0xcc, 0x48, 0x89, 0x5c, 0x24, 0x08],
									on: [0xc7, 0x44, 0x81, 0x08, 0x10, 0x00, 0x00, 0x00, 0x90, 0x90, 0x90, 0x90],
								},
							],
						},
						{
							name: 'Hide time limit display on results screen',
							patches: [{ offset: 0x73576f, off: [0x84, 0xc0], on: [0x90, 0x90] }],
						},
						{
							name: 'Premium Free Timer Freeze',
							tooltip: 'Freezes the timer in PREMIUM FREE mode, allowing unlimited play until exit',
							patches: [{ offset: 0x4cbbf3, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Unlock All Songs',
							patches: [{ offset: 0x4c647a, off: [0x32, 0xc0], on: [0xb0, 0x01] }],
						},
						{
							name: 'Standard/Menu Timer Freeze',
							patches: [{ offset: 0x77a5b7, off: [0x74], on: [0xeb] }],
						},
						{
							name: 'Hide bottom text',
							tooltip: 'Hides the CREDIT, INSERT COINS, NO ACCOUNT, NOT AVAILABLE, and EXTRA PASELI messages',
							patches: [
								{ offset: 0x3b2591, off: [0x7f, 0x12, 0x44, 0x8b, 0xcb, 0x4c, 0x8d, 0x05, 0xeb, 0xb1, 0x6c, 0x00], on: [0x90, 0xe9, 0x22, 0x00, 0x00, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //EXTRA PASELI: %d
								{ offset: 0x3b294d, off: [0xe8, 0x5e, 0xb1, 0x00, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90] }, //INSERT COIN[S]
								{ offset: 0x3b2839, off: [0xff, 0x15, 0xa9, 0x3b, 0x6c, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //PASELI: NO ACCOUNT
								{ offset: 0x3b26b4, off: [0x48, 0x8d, 0x05, 0xfd, 0x1a, 0x90, 0x04], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //PASELI: NOT AVAILABLE
								{ offset: 0x3b24b6, off: [0xff, 0x15, 0x2c, 0x3f, 0x6c, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //CREDIT: %d
							],
						},
						{
							name: 'Also hide "PASELI: ******" message',
							tooltip: 'Disable if using PASELI display to LED ticker patch',
							patches: [
								{ offset: 0x3b279b, off: [0xff, 0x15, 0x47, 0x3c, 0x6c, 0x00], on: [0x90, 0x90, 0x90, 0x90, 0x90, 0x90] }, //PASELI: ******
							],
						},
						{
							name: 'Redirect LED ticker to FREE PLAY',
							tooltip: 'Displays LED ticker messages on bottom right when FREE PLAY is enabled',
							patches: [
								{ offset: 0x3b264f, off: [0xdd, 0xb0, 0x6c, 0x00], on: [0x99, 0x83, 0x19, 0x05] }, //PASELI: ******
							],
						},
						{
							name: 'Redirect LED ticker to PASELI display',
							tooltip: 'Displays LED ticker messages on bottom left when PASELI messages are present',
							patches: [
								{ offset: 0x3b2768, off: [0x4c, 0xb0, 0x6c, 0x00], on: [0x80, 0x82, 0x19, 0x05] }, //PASELI: %d
								{ offset: 0x3b278d, off: [0x47, 0xb0, 0x6c, 0x00], on: [0x5b, 0x82, 0x19, 0x05] }, //PASELI: ******
							],
						},
					],
				},
			],
			//[], // array for PatchContainer						// and so on...
		],
	},
]

export default bm2dx
