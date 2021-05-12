const gfdm = [
	{
		id: 'gfdmv5',
		name: 'GuitarFreaks & DrumMania V5 Rock to Infinity',
		image: 'gfdmv5.png',
		patchers: [
			[
				{
					appname: 'game.dll',
					version: '',
					patches: [
						{
							name: 'Force unlock SECRET folder',
							patches: [{ offset: 0xc259a, off: [0x74, 0x12, 0x68, 0xc0], on: [0x90, 0x90, 0x68, 0xc0] }],
						},
					],
				},
				{
					appname: 'boot.dll',
					version: '',
					patches: [
						{
							name: "GF's volume fix",
							patches: [
								{ offset: 0x1bc1, off: [0x00, 0x00, 0x00, 0x00], on: [0x01, 0x00, 0x00, 0x00] },
								{ offset: 0x1bc9, off: [0x01], on: [0x03] },
								{ offset: 0x1bd1, off: [0x02], on: [0x03] },
							],
						},
					],
				},
				{
					appname: 'libshare-pj.dll',
					version: '',
					patches: [
						{
							name: 'Let the game can access e-amuemu which IP is 192.168.*.*',
							tooltip: "It's highly recommended using this just to turn off the e-AMUSEMENT easily,since it's not compatiable with e-amuemu(Cannot register cards but still can get into the game)",
							patches: [{ offset: 0x17eca, off: [0x01, 0x5b], on: [0x00, 0x5b] }],
						},
					],
				},
				{
					appname: 'libsystem.dll',
					version: '',
					patches: [
						{
							name: 'White screen freeze fix',
							patches: [{ offset: 0x306c, off: [0x53, 0x53], on: [0x33, 0xc0] }],
						},
					],
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
					appname: 'game.dll',
					version: '',
					patches: [
						{
							name: 'Force unlock SECRET folder',
							patches: [{ offset: 0xcc8ea, off: [0x74, 0x12, 0x68, 0x04], on: [0x90, 0x90, 0x68, 0x04] }],
						},
					],
				},
				{
					appname: 'boot.dll',
					version: '',
					patches: [
						{
							name: "GF's volume fix",
							patches: [
								{ offset: 0x1b61, off: [0x00, 0x00, 0x00, 0x00], on: [0x01, 0x00, 0x00, 0x00] },
								{ offset: 0x1b69, off: [0x01], on: [0x03] },
								{ offset: 0x1b71, off: [0x02], on: [0x03] },
							],
						},
					],
				},
				{
					appname: 'libshare-pj.dll',
					version: '',
					patches: [
						{
							name: 'Let the game can access e-amuemu which IP is 192.168.*.*',
							patches: [{ offset: 0x18f3a, off: [0x01, 0x5b], on: [0x00, 0x5b] }],
						},
					],
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
					appname: 'game.dll',
					version: '',
					patches: [
						{
							name: 'Force unlock SECRET folder',
							patches: [{ offset: 0xba187, off: [0x74, 0x04, 0xc6, 0x46], on: [0x90, 0x90, 0xc6, 0x46] }],
						},
					],
				},
				{
					appname: 'boot.dll',
					version: '',
					patches: [
						{
							name: "GF's volume fix",
							patches: [
								{ offset: 0x1a31, off: [0x00, 0x00], on: [0x01, 0x00] },
								{ offset: 0x1a39, off: [0x01], on: [0x03] },
								{ offset: 0x1a41, off: [0x02], on: [0x03] },
							],
						},
					],
				},
				{
					appname: 'libshare-pj.dll',
					version: '',
					patches: [
						{
							name: 'Let the game can access e-amuemu which IP is 192.168.*.*',
							patches: [{ offset: 0x16b99, off: [0x01, 0x5b], on: [0x00, 0x5b] }],
						},
					],
				},
				{
					appname: 'libsystem.dll',
					version: '',
					patches: [
						{
							name: 'White screen freeze fix',
							patches: [{ offset: 0x2dfc, off: [0x53, 0x53, 0xa3, 0xcc], on: [0x33, 0xc0, 0xa3, 0xcc] }],
						},
					],
				},
			],
		],
	},
]

export default gfdm
