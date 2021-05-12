const nostalgia = [
	{
		id: 'nostalgiaop2',
		name: 'Nostalgia Op.2',
		image: 'op2.png',
		patchers: [
			[
				{
					appname: 'nostalgia.dll',
					version: '2019-10-02, 2019-11-27',
					patches: [
						{
							name: 'Menu Timer Freeze',
							patches: [{ offset: 0x303d33, off: [0x41, 0xff, 0xc8], on: [0x90, 0x90, 0x90] }],
						},
						{
							name: 'Shorter Monitor Check',
							tooltip: 'Similar to Rootage, recommended only if you have a stable framerate',
							patches: [{ offset: 0x21a6fa, off: [0x1e], on: [0x00] }],
						},
						{
							name: 'Hide "EXTRA PASELI: %d"',
							patches: [
								{ offset: 0x307bd2, off: [0xca, 0x2f, 0x2a], on: [0x04, 0x72, 0x26] },
								{ offset: 0x307bee, off: [0x7e, 0x2f, 0x2a], on: [0xe8, 0x71, 0x26] },
							],
						},
						{
							name: 'Hide "PASELI: *****"',
							patches: [{ offset: 0x307a6e, off: [0xff, 0x15, 0x14, 0x42, 0x09, 0x00], on: [0xe9, 0xad, 0x01, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'Hide Credit Count',
							tooltip: 'Hides "CREDIT: %d" and "CREDIT %d  COIN: %d / %d"',
							patches: [
								{ offset: 0x307e31, off: [0xbb, 0x2b, 0x2a], on: [0xa5, 0x6f, 0x26] },
								{ offset: 0x307e4d, off: [0x7f, 0x2b, 0x2a], on: [0x89, 0x6f, 0x26] },
							],
						},
					],
				},
			],
		],
	},
]

export default nostalgia
