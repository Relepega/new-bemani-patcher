const beatstream = [
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
]

export default beatstream
