const jubeat = [
	{
		id: 'jubeatprop',
		name: 'jubeat prop',
		image: 'prop.png',
		patchers: [
			[
				{
					appname: 'jubeat.dll',
					version: 'jubeat.dll',
					patches: [
						{
							name: 'Disable tutorial',
							patches: [{ offset: 0x81f79, off: [0x0f, 0x85, 0xc7], on: [0xe9, 0xc6, 0x01] }],
						},
						{
							name: 'SELECT MUSIC timer lock',
							patches: [{ offset: 0x16e64d, off: [0x75], on: [0xeb] }],
						},
					],
				},
				{
					appname: 'music_db.dll',
					version: 'music_db.dll',
					patches: [
						{
							name: 'Unlock all songs',
							patches: [{ offset: 0x266d, off: [0x02], on: [0x1f] }],
						},
					],
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
					appname: 'jubeat.dll',
					version: '2017-06-20',
					patches: [
						{
							name: 'Disable tutorial',
							patches: [{ offset: 0xaac32, off: [0x75, 0x4a, 0x53, 0x68, 0x00], on: [0xe9, 0x90, 0x00, 0x00, 0x00] }],
						},
						{
							name: 'SELECT MUSIC timer lock',
							patches: [{ offset: 0x80576, off: [0x75], on: [0xeb] }],
						},
					],
				},
				{
					appname: 'jubeat.dll',
					version: '2017-04-15',
					patches: [
						{
							name: 'Disable tutorial',
							patches: [{ offset: 0xaa462, off: [0x75, 0x4a, 0x53, 0x68, 0x00], on: [0xe9, 0x90, 0x00, 0x00, 0x00] }],
						},
						{
							name: 'SELECT MUSIC timer lock',
							patches: [{ offset: 0x802d0, off: [0x75], on: [0xeb] }],
						},
					],
				},
				{
					appname: 'music_db.dll',
					version: 'music_db.dll',
					patches: [
						{
							name: 'Unlock all songs',
							patches: [{ offset: 0x17df, off: [0x74, 0x09], on: [0x90, 0x90] }],
						},
					],
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
					appname: 'jubeat.dll',
					version: '2018-08-14',
					patches: [
						// Ported by Felix
						{
							name: 'Disable Tutorial',
							patches: [{ offset: 0xcfe67, off: [0x75, 0x4a, 0x57, 0x68, 0x00], on: [0xe9, 0x90, 0x00, 0x00, 0x00] }],
						},
						// Ported by Felix and Cammy
						{
							name: 'SELECT MUSIC Timer Lock',
							patches: [{ offset: 0xa5899, off: [0x75], on: [0xeb] }],
						},
						// Patch by Ash
						{
							name: 'Online Matching Skip',
							patches: [{ offset: 0xbccae, off: [0x7d], on: [0xeb] }],
						},
						// Translation by Cammy
						{
							name: 'English Concierge Menu Text',
							tooltip: 'If text is incorrectly spaced, set your system locale to Japanese.',
							patches: [
								{
									offset: 0x2094c0, // Version and Artist text
									off: [0x83, 0x6f, 0x81, 0x5b, 0x83, 0x57, 0x83, 0x87, 0x83, 0x93, 0x82, 0xa9, 0x82, 0xe7, 0x82, 0xa8, 0x92, 0x54, 0x82, 0xb5, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x8d, 0xa1, 0x8d, 0xec, 0x82, 0xcd, 0x63, 0x6c, 0x61, 0x6e, 0x82, 0xc5, 0x82, 0xb7, 0x81, 0x49, 0x00, 0x00, 0x00, 0x41, 0x52, 0x54, 0x49, 0x53, 0x54, 0x33, 0x00, 0x41, 0x52, 0x54, 0x49, 0x53, 0x54, 0x32, 0x00, 0x83, 0x41, 0x81, 0x5b, 0x83, 0x65, 0x83, 0x42, 0x83, 0x58, 0x83, 0x67, 0x82, 0xa9, 0x82, 0xe7, 0x82, 0xa8, 0x92, 0x54, 0x82, 0xb5, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x8d, 0x44, 0x82, 0xab, 0x82, 0xc8, 0x83, 0x41, 0x81, 0x5b, 0x83, 0x65, 0x83, 0x42, 0x83, 0x58, 0x83, 0x67, 0x82, 0xaa, 0x0a, 0x82, 0xab, 0x82, 0xc1, 0x82, 0xc6, 0x8c, 0xa9, 0x82, 0xc2, 0x82, 0xa9, 0x82, 0xe8, 0x82, 0xdc, 0x82, 0xb7, 0x82, 0xe6, 0x81, 0x49],
									on: [0x4c, 0x65, 0x74, 0x27, 0x73, 0x20, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x20, 0x62, 0x79, 0x20, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x2e, 0x0a, 0x54, 0x68, 0x69, 0x73, 0x20, 0x6f, 0x6e, 0x65, 0x20, 0x69, 0x73, 0x20, 0x63, 0x6c, 0x61, 0x6e, 0x21, 0x20, 0x20, 0x20, 0x00, 0x00, 0x00, 0x41, 0x52, 0x54, 0x49, 0x53, 0x54, 0x33, 0x00, 0x41, 0x52, 0x54, 0x49, 0x53, 0x54, 0x32, 0x00, 0x48, 0x65, 0x72, 0x65, 0x20, 0x77, 0x65, 0x20, 0x63, 0x61, 0x6e, 0x20, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x20, 0x62, 0x79, 0x20, 0x61, 0x72, 0x74, 0x69, 0x73, 0x74, 0x2e, 0x0a, 0x53, 0x75, 0x72, 0x65, 0x6c, 0x79, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x63, 0x61, 0x6e, 0x20, 0x66, 0x69, 0x6e, 0x64, 0x20, 0x79, 0x6f, 0x75, 0x72, 0x20, 0x66, 0x61, 0x76, 0x6f, 0x72, 0x69, 0x74, 0x65, 0x21, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20],
								},
								{
									offset: 0x20956c, // Settings text
									off: [0x6a, 0x75, 0x62, 0x65, 0x61, 0x74, 0x82, 0xf0, 0x82, 0xe6, 0x82, 0xe8, 0x90, 0x5b, 0x82, 0xad, 0x82, 0xa8, 0x8a, 0x79, 0x82, 0xb5, 0x82, 0xdd, 0x92, 0xb8, 0x82, 0xaf, 0x82, 0xe9, 0x0a, 0x8f, 0xe3, 0x8b, 0x89, 0x8e, 0xd2, 0x8c, 0xfc, 0x82, 0xaf, 0x82, 0xcc, 0x8b, 0x40, 0x94, 0x5c, 0x82, 0xc5, 0x82, 0xb7, 0x81, 0x42],
									on: [0x54, 0x68, 0x65, 0x73, 0x65, 0x20, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x20, 0x61, 0x72, 0x65, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x61, 0x64, 0x76, 0x61, 0x6e, 0x63, 0x65, 0x64, 0x20, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x73, 0x2e, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20],
								},
								{
									offset: 0x209630, // Expert options, marker, and background settings text
									off: [0x97, 0x6c, 0x81, 0x58, 0x82, 0xc8, 0x94, 0x77, 0x8c, 0x69, 0x82, 0xf0, 0x0a, 0x8e, 0xe6, 0x82, 0xe8, 0x91, 0xb5, 0x82, 0xa6, 0x82, 0xc4, 0x82, 0xa8, 0x82, 0xe8, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x96, 0x7b, 0x93, 0xfa, 0x82, 0xcd, 0x82, 0xc7, 0x82, 0xcc, 0x94, 0x77, 0x8c, 0x69, 0x82, 0xc9, 0x82, 0xa2, 0x82, 0xbd, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb5, 0x82, 0xe5, 0x82, 0xa4, 0x81, 0x42, 0x00, 0x00, 0x83, 0x7d, 0x81, 0x5b, 0x83, 0x4a, 0x81, 0x5b, 0x33, 0x00, 0x00, 0x00, 0x83, 0x7d, 0x81, 0x5b, 0x83, 0x4a, 0x81, 0x5b, 0x32, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x83, 0x6f, 0x83, 0x89, 0x83, 0x47, 0x83, 0x65, 0x83, 0x42, 0x96, 0x4c, 0x82, 0xa9, 0x82, 0xc8, 0x83, 0x7d, 0x81, 0x5b, 0x83, 0x4a, 0x81, 0x5b, 0x82, 0xf0, 0x0a, 0x8e, 0xe6, 0x82, 0xe8, 0x91, 0xb5, 0x82, 0xa6, 0x82, 0xc4, 0x82, 0xa8, 0x82, 0xe8, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x82, 0xc7, 0x82, 0xcc, 0x83, 0x7d, 0x81, 0x5b, 0x83, 0x4a, 0x81, 0x5b, 0x82, 0xaa, 0x82, 0xa8, 0x8d, 0x44, 0x82, 0xab, 0x82, 0xc5, 0x82, 0xb7, 0x82, 0xa9, 0x81, 0x48, 0x00, 0x00, 0x00, 0x00, 0x8a, 0x65, 0x8e, 0xed, 0x90, 0xdd, 0x92, 0xe8, 0x33, 0x00, 0x00, 0x00, 0x8a, 0x65, 0x8e, 0xed, 0x90, 0xdd, 0x92, 0xe8, 0x32, 0x00, 0x00, 0x00, 0x82, 0xb1, 0x82, 0xb1, 0x82, 0xc5, 0x82, 0xcd, 0x8a, 0x65, 0x8e, 0xed, 0x90, 0xdd, 0x92, 0xe8, 0x82, 0xaa, 0x82, 0xc5, 0x82, 0xab, 0x82, 0xdc, 0x82, 0xb7, 0x82, 0xe6, 0x81, 0x42, 0x0a, 0x8b, 0x43, 0x95, 0xaa, 0x82, 0xc9, 0x8d, 0x87, 0x82, 0xed, 0x82, 0xb9, 0x82, 0xc4, 0x95, 0xcf, 0x82, 0xa6, 0x82, 0xc4, 0x82, 0xdd, 0x82, 0xc4, 0x82, 0xcd, 0x0a, 0x82, 0xa2, 0x82, 0xa9, 0x82, 0xaa, 0x82, 0xc5, 0x82, 0xb5, 0x82, 0xe5, 0x82, 0xa4, 0x82, 0xa9, 0x81, 0x42],
									on: [0x59, 0x6f, 0x75, 0x20, 0x63, 0x61, 0x6e, 0x20, 0x61, 0x6c, 0x73, 0x6f, 0x20, 0x73, 0x68, 0x6f, 0x77, 0x20, 0x6f, 0x72, 0x20, 0x68, 0x69, 0x64, 0x65, 0x20, 0x74, 0x68, 0x65, 0x0a, 0x43, 0x6f, 0x6d, 0x62, 0x6f, 0x20, 0x61, 0x6e, 0x64, 0x20, 0x52, 0x61, 0x6e, 0x6b, 0x20, 0x64, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x20, 0x68, 0x65, 0x72, 0x65, 0x2e, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x00, 0x00, 0x83, 0x7d, 0x81, 0x5b, 0x83, 0x4a, 0x81, 0x5b, 0x33, 0x00, 0x00, 0x00, 0x83, 0x7d, 0x81, 0x5b, 0x83, 0x4a, 0x81, 0x5b, 0x32, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x57, 0x65, 0x20, 0x68, 0x61, 0x76, 0x65, 0x20, 0x61, 0x20, 0x72, 0x69, 0x63, 0x68, 0x20, 0x76, 0x61, 0x72, 0x69, 0x65, 0x74, 0x79, 0x20, 0x6f, 0x66, 0x20, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x72, 0x73, 0x2e, 0x0a, 0x57, 0x68, 0x69, 0x63, 0x68, 0x20, 0x6f, 0x6e, 0x65, 0x20, 0x77, 0x69, 0x6c, 0x6c, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x70, 0x69, 0x63, 0x6b, 0x3f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x8a, 0x65, 0x8e, 0xed, 0x90, 0xdd, 0x92, 0xe8, 0x33, 0x00, 0x00, 0x00, 0x8a, 0x65, 0x8e, 0xed, 0x90, 0xdd, 0x92, 0xe8, 0x32, 0x00, 0x00, 0x00, 0x59, 0x6f, 0x75, 0x20, 0x63, 0x61, 0x6e, 0x20, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x20, 0x76, 0x61, 0x72, 0x69, 0x6f, 0x75, 0x73, 0x20, 0x73, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x20, 0x68, 0x65, 0x72, 0x65, 0x2e, 0x20, 0x20, 0x20, 0x53, 0x65, 0x74, 0x20, 0x69, 0x74, 0x20, 0x75, 0x70, 0x20, 0x68, 0x6f, 0x77, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x6c, 0x69, 0x6b, 0x65, 0x21, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
								},
								{
									offset: 0x20981c, // Jubeat Lab, tournament, grade, genre, level, category text.
									off: [0x6a, 0x75, 0x62, 0x65, 0x61, 0x74, 0x20, 0x4c, 0x61, 0x62, 0x2e, 0x82, 0xcc, 0x45, 0x44, 0x49, 0x54, 0x95, 0x88, 0x96, 0xca, 0x82, 0xaa, 0x97, 0x56, 0x82, 0xd7, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x49, 0x0a, 0x90, 0x56, 0x82, 0xb5, 0x82, 0xa2, 0x95, 0x88, 0x96, 0xca, 0x82, 0xf0, 0x8a, 0x79, 0x82, 0xb5, 0x82, 0xdd, 0x82, 0xdc, 0x82, 0xb5, 0x82, 0xe5, 0x82, 0xa4, 0x81, 0x42, 0x00, 0x00, 0x91, 0xe5, 0x89, 0xef, 0x33, 0x00, 0x00, 0x00, 0x91, 0xe5, 0x89, 0xef, 0x32, 0x00, 0x00, 0x00, 0x83, 0x47, 0x83, 0x93, 0x83, 0x67, 0x83, 0x8a, 0x81, 0x5b, 0x82, 0xb5, 0x82, 0xc4, 0x82, 0xa2, 0x82, 0xe9, 0x91, 0xe5, 0x89, 0xef, 0x88, 0xea, 0x97, 0x97, 0x82, 0xc5, 0x82, 0xb7, 0x81, 0x42, 0x00, 0x00, 0x00, 0x00, 0x83, 0x58, 0x83, 0x52, 0x83, 0x41, 0x33, 0x00, 0x83, 0x58, 0x83, 0x52, 0x83, 0x41, 0x32, 0x00, 0x82, 0xa0, 0x82, 0xc8, 0x82, 0xbd, 0x82, 0xcc, 0x90, 0xac, 0x90, 0xd1, 0x82, 0xa9, 0x82, 0xe7, 0x82, 0xa8, 0x92, 0x54, 0x82, 0xb5, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x8f, 0xe3, 0x8e, 0xe8, 0x82, 0xad, 0x82, 0xc8, 0x82, 0xe8, 0x82, 0xbd, 0x82, 0xa2, 0x90, 0x6c, 0x82, 0xcd, 0x97, 0x76, 0x83, 0x60, 0x83, 0x46, 0x83, 0x62, 0x83, 0x4e, 0x81, 0x49, 0x00, 0x00, 0x00, 0x82, 0xa8, 0x82, 0xb7, 0x82, 0xb7, 0x82, 0xdf, 0x33, 0x00, 0x00, 0x00, 0x82, 0xa8, 0x82, 0xb7, 0x82, 0xb7, 0x82, 0xdf, 0x32, 0x00, 0x00, 0x00, 0x97, 0x4c, 0x96, 0xbc, 0x82, 0xc8, 0x8a, 0x79, 0x8b, 0xc8, 0x81, 0x41, 0x97, 0x56, 0x82, 0xd1, 0x82, 0xe2, 0x82, 0xb7, 0x82, 0xa2, 0x8a, 0x79, 0x8b, 0xc8, 0x82, 0xf0, 0x0a, 0x8f, 0x57, 0x82, 0xdf, 0x82, 0xc4, 0x82, 0xab, 0x82, 0xdc, 0x82, 0xb5, 0x82, 0xbd, 0x81, 0x42, 0x00, 0x00, 0x00, 0x83, 0x57, 0x83, 0x83, 0x83, 0x93, 0x83, 0x8b, 0x33, 0x00, 0x00, 0x00, 0x83, 0x57, 0x83, 0x83, 0x83, 0x93, 0x83, 0x8b, 0x32, 0x00, 0x00, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x82, 0xcc, 0x83, 0x57, 0x83, 0x83, 0x83, 0x93, 0x83, 0x8b, 0x82, 0xa9, 0x82, 0xe7, 0x82, 0xa8, 0x92, 0x54, 0x82, 0xb5, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x8b, 0x43, 0x82, 0xc9, 0x82, 0xc8, 0x82, 0xe9, 0x83, 0x57, 0x83, 0x83, 0x83, 0x93, 0x83, 0x8b, 0x82, 0xcd, 0x82, 0xa0, 0x82, 0xe8, 0x82, 0xdc, 0x82, 0xb7, 0x82, 0xa9, 0x81, 0x48, 0x00, 0x83, 0x8c, 0x83, 0x78, 0x83, 0x8b, 0x33, 0x00, 0x83, 0x8c, 0x83, 0x78, 0x83, 0x8b, 0x32, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x82, 0xcc, 0x4c, 0x45, 0x56, 0x45, 0x4c, 0x82, 0xa9, 0x82, 0xe7, 0x82, 0xa8, 0x92, 0x54, 0x82, 0xb5, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x8d, 0xa1, 0x89, 0xf1, 0x82, 0xcd, 0x82, 0xc7, 0x82, 0xcc, 0x93, 0xef, 0x82, 0xb5, 0x82, 0xb3, 0x82, 0xc9, 0x92, 0xa7, 0x90, 0xed, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x82, 0xa9, 0x81, 0x48, 0x00, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x96, 0xbc, 0x33, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x96, 0xbc, 0x32, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x96, 0xbc, 0x82, 0xa9, 0x82, 0xe7, 0x82, 0xa8, 0x92, 0x54, 0x82, 0xb5, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x82, 0xed, 0x82, 0xbd, 0x82, 0xad, 0x82, 0xb5, 0x82, 0xaa, 0x91, 0x53, 0x97, 0xcd, 0x82, 0xc5, 0x8c, 0xa9, 0x82, 0xc2, 0x82, 0xaf, 0x82, 0xc4, 0x8e, 0x51, 0x82, 0xe8, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x49, 0x00, 0x83, 0x8b, 0x81, 0x5b, 0x83, 0x67, 0x33, 0x00, 0x83, 0x8b, 0x81, 0x5b, 0x83, 0x67, 0x32, 0x00, 0x8b, 0x43, 0x82, 0xc9, 0x82, 0xc8, 0x82, 0xe9, 0x83, 0x4a, 0x83, 0x65, 0x83, 0x53, 0x83, 0x8a, 0x83, 0x70, 0x83, 0x6c, 0x83, 0x8b, 0x82, 0xf0, 0x83, 0x5e, 0x83, 0x62, 0x83, 0x60, 0x81, 0x49, 0x0a, 0x82, 0xb2, 0x8a, 0xf3, 0x96, 0x5d, 0x82, 0xcc, 0x8a, 0x79, 0x8b, 0xc8, 0x82, 0xf0, 0x82, 0xa8, 0x91, 0x49, 0x82, 0xd1, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42],
									on: [0x50, 0x6c, 0x61, 0x79, 0x20, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x20, 0x62, 0x79, 0x20, 0x6a, 0x75, 0x62, 0x65, 0x61, 0x74, 0x20, 0x4c, 0x61, 0x62, 0x2e, 0x20, 0x45, 0x44, 0x49, 0x54, 0x21, 0x0a, 0x4c, 0x65, 0x74, 0x27, 0x73, 0x20, 0x65, 0x6e, 0x6a, 0x6f, 0x79, 0x20, 0x74, 0x68, 0x65, 0x20, 0x6e, 0x65, 0x77, 0x20, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x2e, 0x20, 0x20, 0x20, 0x20, 0x00, 0x00, 0x91, 0xe5, 0x89, 0xef, 0x33, 0x00, 0x00, 0x00, 0x91, 0xe5, 0x89, 0xef, 0x32, 0x00, 0x00, 0x00, 0x46, 0x69, 0x6e, 0x64, 0x20, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x20, 0x74, 0x6f, 0x75, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x20, 0x68, 0x65, 0x72, 0x65, 0x2e, 0x20, 0x20, 0x20, 0x00, 0x00, 0x00, 0x00, 0x83, 0x58, 0x83, 0x52, 0x83, 0x41, 0x33, 0x00, 0x83, 0x58, 0x83, 0x52, 0x83, 0x41, 0x32, 0x00, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x20, 0x62, 0x79, 0x20, 0x47, 0x72, 0x61, 0x64, 0x65, 0x73, 0x2e, 0x20, 0x54, 0x68, 0x65, 0x20, 0x70, 0x72, 0x6f, 0x27, 0x73, 0x20, 0x75, 0x73, 0x65, 0x20, 0x74, 0x68, 0x69, 0x73, 0x0a, 0x74, 0x6f, 0x20, 0x69, 0x6d, 0x70, 0x72, 0x6f, 0x76, 0x65, 0x20, 0x74, 0x68, 0x65, 0x69, 0x72, 0x20, 0x73, 0x6b, 0x69, 0x6c, 0x6c, 0x73, 0x21, 0x00, 0x00, 0x00, 0x82, 0xa8, 0x82, 0xb7, 0x82, 0xb7, 0x82, 0xdf, 0x33, 0x00, 0x00, 0x00, 0x82, 0xa8, 0x82, 0xb7, 0x82, 0xb7, 0x82, 0xdf, 0x32, 0x00, 0x00, 0x00, 0x97, 0x4c, 0x96, 0xbc, 0x82, 0xc8, 0x8a, 0x79, 0x8b, 0xc8, 0x81, 0x41, 0x97, 0x56, 0x82, 0xd1, 0x82, 0xe2, 0x82, 0xb7, 0x82, 0xa2, 0x8a, 0x79, 0x8b, 0xc8, 0x82, 0xf0, 0x0a, 0x8f, 0x57, 0x82, 0xdf, 0x82, 0xc4, 0x82, 0xab, 0x82, 0xdc, 0x82, 0xb5, 0x82, 0xbd, 0x81, 0x42, 0x00, 0x00, 0x00, 0x83, 0x57, 0x83, 0x83, 0x83, 0x93, 0x83, 0x8b, 0x33, 0x00, 0x00, 0x00, 0x83, 0x57, 0x83, 0x83, 0x83, 0x93, 0x83, 0x8b, 0x32, 0x00, 0x00, 0x00, 0x48, 0x65, 0x72, 0x65, 0x20, 0x77, 0x65, 0x20, 0x63, 0x61, 0x6e, 0x20, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x20, 0x62, 0x79, 0x20, 0x47, 0x65, 0x6e, 0x72, 0x65, 0x2e, 0x0a, 0x57, 0x68, 0x69, 0x63, 0x68, 0x20, 0x6f, 0x6e, 0x65, 0x20, 0x61, 0x72, 0x65, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x69, 0x6e, 0x20, 0x74, 0x68, 0x65, 0x20, 0x6d, 0x6f, 0x6f, 0x64, 0x20, 0x66, 0x6f, 0x72, 0x3f, 0x00, 0x83, 0x8c, 0x83, 0x78, 0x83, 0x8b, 0x33, 0x00, 0x83, 0x8c, 0x83, 0x78, 0x83, 0x8b, 0x32, 0x00, 0x4c, 0x65, 0x74, 0x27, 0x73, 0x20, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x20, 0x62, 0x79, 0x20, 0x4c, 0x45, 0x56, 0x45, 0x4c, 0x21, 0x0a, 0x44, 0x6f, 0x6e, 0x27, 0x74, 0x20, 0x62, 0x65, 0x20, 0x61, 0x66, 0x72, 0x61, 0x69, 0x64, 0x20, 0x74, 0x6f, 0x20, 0x63, 0x68, 0x61, 0x6c, 0x6c, 0x65, 0x6e, 0x67, 0x65, 0x20, 0x79, 0x6f, 0x75, 0x72, 0x73, 0x65, 0x6c, 0x66, 0x21, 0x20, 0x00, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x96, 0xbc, 0x33, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x96, 0xbc, 0x32, 0x00, 0x48, 0x65, 0x72, 0x65, 0x20, 0x77, 0x65, 0x20, 0x63, 0x61, 0x6e, 0x20, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x20, 0x62, 0x79, 0x20, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x2e, 0x0a, 0x47, 0x6f, 0x6f, 0x64, 0x20, 0x6c, 0x75, 0x63, 0x6b, 0x20, 0x77, 0x69, 0x74, 0x68, 0x20, 0x74, 0x68, 0x69, 0x73, 0x20, 0x6f, 0x6e, 0x65, 0x20, 0x6c, 0x6f, 0x6c, 0x2e, 0x20, 0x20, 0x00, 0x83, 0x8b, 0x81, 0x5b, 0x83, 0x67, 0x33, 0x00, 0x83, 0x8b, 0x81, 0x5b, 0x83, 0x67, 0x32, 0x00, 0x43, 0x68, 0x6f, 0x6f, 0x73, 0x65, 0x20, 0x74, 0x68, 0x65, 0x20, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x77, 0x61, 0x6e, 0x74, 0x21, 0x0a, 0x49, 0x20, 0x77, 0x69, 0x6c, 0x6c, 0x20, 0x74, 0x61, 0x6b, 0x65, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x74, 0x6f, 0x20, 0x69, 0x74, 0x2e, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20],
								},
							],
						},
					],
				},
				{
					appname: 'jubeat.dll',
					version: '2018-07-09',
					patches: [
						{
							name: 'Disable Tutorial',
							patches: [{ offset: 0xcffc7, off: [0x75, 0x4a, 0x57, 0x68, 0x00], on: [0xe9, 0x90, 0x00, 0x00, 0x00] }],
						},
						{
							name: 'SELECT MUSIC Timer Lock',
							patches: [{ offset: 0xa5a49, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Expert Options Lock',
							tooltip: 'As soon as you toggle on expert option, every subsequent play will keep it on.',
							patches: [{ offset: 0xd4699, off: [0x89, 0x1d], on: [0xeb, 0x0b] }],
						},
						// Patch by Ash
						{
							name: 'Online Matching Skip',
							patches: [{ offset: 0xbcdce, off: [0x7d], on: [0xeb] }],
						},
						// Translation by Cammy
						{
							name: 'English Concierge Menu Text',
							tooltip: 'If text is incorrectly spaced, set your system locale to Japanese.',
							patches: [
								{
									offset: 0x209aa0, // Version and Artist text
									off: [0x83, 0x6f, 0x81, 0x5b, 0x83, 0x57, 0x83, 0x87, 0x83, 0x93, 0x82, 0xa9, 0x82, 0xe7, 0x82, 0xa8, 0x92, 0x54, 0x82, 0xb5, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x8d, 0xa1, 0x8d, 0xec, 0x82, 0xcd, 0x63, 0x6c, 0x61, 0x6e, 0x82, 0xc5, 0x82, 0xb7, 0x81, 0x49, 0x00, 0x00, 0x00, 0x41, 0x52, 0x54, 0x49, 0x53, 0x54, 0x33, 0x00, 0x41, 0x52, 0x54, 0x49, 0x53, 0x54, 0x32, 0x00, 0x83, 0x41, 0x81, 0x5b, 0x83, 0x65, 0x83, 0x42, 0x83, 0x58, 0x83, 0x67, 0x82, 0xa9, 0x82, 0xe7, 0x82, 0xa8, 0x92, 0x54, 0x82, 0xb5, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x8d, 0x44, 0x82, 0xab, 0x82, 0xc8, 0x83, 0x41, 0x81, 0x5b, 0x83, 0x65, 0x83, 0x42, 0x83, 0x58, 0x83, 0x67, 0x82, 0xaa, 0x0a, 0x82, 0xab, 0x82, 0xc1, 0x82, 0xc6, 0x8c, 0xa9, 0x82, 0xc2, 0x82, 0xa9, 0x82, 0xe8, 0x82, 0xdc, 0x82, 0xb7, 0x82, 0xe6, 0x81, 0x49],
									on: [0x4c, 0x65, 0x74, 0x27, 0x73, 0x20, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x20, 0x62, 0x79, 0x20, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x2e, 0x0a, 0x54, 0x68, 0x69, 0x73, 0x20, 0x6f, 0x6e, 0x65, 0x20, 0x69, 0x73, 0x20, 0x63, 0x6c, 0x61, 0x6e, 0x21, 0x20, 0x20, 0x20, 0x00, 0x00, 0x00, 0x41, 0x52, 0x54, 0x49, 0x53, 0x54, 0x33, 0x00, 0x41, 0x52, 0x54, 0x49, 0x53, 0x54, 0x32, 0x00, 0x48, 0x65, 0x72, 0x65, 0x20, 0x77, 0x65, 0x20, 0x63, 0x61, 0x6e, 0x20, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x20, 0x62, 0x79, 0x20, 0x61, 0x72, 0x74, 0x69, 0x73, 0x74, 0x2e, 0x0a, 0x53, 0x75, 0x72, 0x65, 0x6c, 0x79, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x63, 0x61, 0x6e, 0x20, 0x66, 0x69, 0x6e, 0x64, 0x20, 0x79, 0x6f, 0x75, 0x72, 0x20, 0x66, 0x61, 0x76, 0x6f, 0x72, 0x69, 0x74, 0x65, 0x21, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20],
								},
								{
									offset: 0x209b4c, // Settings text
									off: [0x6a, 0x75, 0x62, 0x65, 0x61, 0x74, 0x82, 0xf0, 0x82, 0xe6, 0x82, 0xe8, 0x90, 0x5b, 0x82, 0xad, 0x82, 0xa8, 0x8a, 0x79, 0x82, 0xb5, 0x82, 0xdd, 0x92, 0xb8, 0x82, 0xaf, 0x82, 0xe9, 0x0a, 0x8f, 0xe3, 0x8b, 0x89, 0x8e, 0xd2, 0x8c, 0xfc, 0x82, 0xaf, 0x82, 0xcc, 0x8b, 0x40, 0x94, 0x5c, 0x82, 0xc5, 0x82, 0xb7, 0x81, 0x42],
									on: [0x54, 0x68, 0x65, 0x73, 0x65, 0x20, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x20, 0x61, 0x72, 0x65, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x61, 0x64, 0x76, 0x61, 0x6e, 0x63, 0x65, 0x64, 0x20, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x73, 0x2e, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20],
								},
								{
									offset: 0x209c10, // Expert options, marker, and background settings text
									off: [0x97, 0x6c, 0x81, 0x58, 0x82, 0xc8, 0x94, 0x77, 0x8c, 0x69, 0x82, 0xf0, 0x0a, 0x8e, 0xe6, 0x82, 0xe8, 0x91, 0xb5, 0x82, 0xa6, 0x82, 0xc4, 0x82, 0xa8, 0x82, 0xe8, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x96, 0x7b, 0x93, 0xfa, 0x82, 0xcd, 0x82, 0xc7, 0x82, 0xcc, 0x94, 0x77, 0x8c, 0x69, 0x82, 0xc9, 0x82, 0xa2, 0x82, 0xbd, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb5, 0x82, 0xe5, 0x82, 0xa4, 0x81, 0x42, 0x00, 0x00, 0x83, 0x7d, 0x81, 0x5b, 0x83, 0x4a, 0x81, 0x5b, 0x33, 0x00, 0x00, 0x00, 0x83, 0x7d, 0x81, 0x5b, 0x83, 0x4a, 0x81, 0x5b, 0x32, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x83, 0x6f, 0x83, 0x89, 0x83, 0x47, 0x83, 0x65, 0x83, 0x42, 0x96, 0x4c, 0x82, 0xa9, 0x82, 0xc8, 0x83, 0x7d, 0x81, 0x5b, 0x83, 0x4a, 0x81, 0x5b, 0x82, 0xf0, 0x0a, 0x8e, 0xe6, 0x82, 0xe8, 0x91, 0xb5, 0x82, 0xa6, 0x82, 0xc4, 0x82, 0xa8, 0x82, 0xe8, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x82, 0xc7, 0x82, 0xcc, 0x83, 0x7d, 0x81, 0x5b, 0x83, 0x4a, 0x81, 0x5b, 0x82, 0xaa, 0x82, 0xa8, 0x8d, 0x44, 0x82, 0xab, 0x82, 0xc5, 0x82, 0xb7, 0x82, 0xa9, 0x81, 0x48, 0x00, 0x00, 0x00, 0x00, 0x8a, 0x65, 0x8e, 0xed, 0x90, 0xdd, 0x92, 0xe8, 0x33, 0x00, 0x00, 0x00, 0x8a, 0x65, 0x8e, 0xed, 0x90, 0xdd, 0x92, 0xe8, 0x32, 0x00, 0x00, 0x00, 0x82, 0xb1, 0x82, 0xb1, 0x82, 0xc5, 0x82, 0xcd, 0x8a, 0x65, 0x8e, 0xed, 0x90, 0xdd, 0x92, 0xe8, 0x82, 0xaa, 0x82, 0xc5, 0x82, 0xab, 0x82, 0xdc, 0x82, 0xb7, 0x82, 0xe6, 0x81, 0x42, 0x0a, 0x8b, 0x43, 0x95, 0xaa, 0x82, 0xc9, 0x8d, 0x87, 0x82, 0xed, 0x82, 0xb9, 0x82, 0xc4, 0x95, 0xcf, 0x82, 0xa6, 0x82, 0xc4, 0x82, 0xdd, 0x82, 0xc4, 0x82, 0xcd, 0x0a, 0x82, 0xa2, 0x82, 0xa9, 0x82, 0xaa, 0x82, 0xc5, 0x82, 0xb5, 0x82, 0xe5, 0x82, 0xa4, 0x82, 0xa9, 0x81, 0x42],
									on: [0x59, 0x6f, 0x75, 0x20, 0x63, 0x61, 0x6e, 0x20, 0x61, 0x6c, 0x73, 0x6f, 0x20, 0x73, 0x68, 0x6f, 0x77, 0x20, 0x6f, 0x72, 0x20, 0x68, 0x69, 0x64, 0x65, 0x20, 0x74, 0x68, 0x65, 0x0a, 0x43, 0x6f, 0x6d, 0x62, 0x6f, 0x20, 0x61, 0x6e, 0x64, 0x20, 0x52, 0x61, 0x6e, 0x6b, 0x20, 0x64, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x20, 0x68, 0x65, 0x72, 0x65, 0x2e, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x00, 0x00, 0x83, 0x7d, 0x81, 0x5b, 0x83, 0x4a, 0x81, 0x5b, 0x33, 0x00, 0x00, 0x00, 0x83, 0x7d, 0x81, 0x5b, 0x83, 0x4a, 0x81, 0x5b, 0x32, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x57, 0x65, 0x20, 0x68, 0x61, 0x76, 0x65, 0x20, 0x61, 0x20, 0x72, 0x69, 0x63, 0x68, 0x20, 0x76, 0x61, 0x72, 0x69, 0x65, 0x74, 0x79, 0x20, 0x6f, 0x66, 0x20, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x72, 0x73, 0x2e, 0x0a, 0x57, 0x68, 0x69, 0x63, 0x68, 0x20, 0x6f, 0x6e, 0x65, 0x20, 0x77, 0x69, 0x6c, 0x6c, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x70, 0x69, 0x63, 0x6b, 0x3f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x8a, 0x65, 0x8e, 0xed, 0x90, 0xdd, 0x92, 0xe8, 0x33, 0x00, 0x00, 0x00, 0x8a, 0x65, 0x8e, 0xed, 0x90, 0xdd, 0x92, 0xe8, 0x32, 0x00, 0x00, 0x00, 0x59, 0x6f, 0x75, 0x20, 0x63, 0x61, 0x6e, 0x20, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x20, 0x76, 0x61, 0x72, 0x69, 0x6f, 0x75, 0x73, 0x20, 0x73, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x20, 0x68, 0x65, 0x72, 0x65, 0x2e, 0x20, 0x20, 0x20, 0x53, 0x65, 0x74, 0x20, 0x69, 0x74, 0x20, 0x75, 0x70, 0x20, 0x68, 0x6f, 0x77, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x6c, 0x69, 0x6b, 0x65, 0x21, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
								},
								{
									offset: 0x209dfc, // Jubeat Lab, tournament, grade, genre, level, category text.
									off: [0x6a, 0x75, 0x62, 0x65, 0x61, 0x74, 0x20, 0x4c, 0x61, 0x62, 0x2e, 0x82, 0xcc, 0x45, 0x44, 0x49, 0x54, 0x95, 0x88, 0x96, 0xca, 0x82, 0xaa, 0x97, 0x56, 0x82, 0xd7, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x49, 0x0a, 0x90, 0x56, 0x82, 0xb5, 0x82, 0xa2, 0x95, 0x88, 0x96, 0xca, 0x82, 0xf0, 0x8a, 0x79, 0x82, 0xb5, 0x82, 0xdd, 0x82, 0xdc, 0x82, 0xb5, 0x82, 0xe5, 0x82, 0xa4, 0x81, 0x42, 0x00, 0x00, 0x91, 0xe5, 0x89, 0xef, 0x33, 0x00, 0x00, 0x00, 0x91, 0xe5, 0x89, 0xef, 0x32, 0x00, 0x00, 0x00, 0x83, 0x47, 0x83, 0x93, 0x83, 0x67, 0x83, 0x8a, 0x81, 0x5b, 0x82, 0xb5, 0x82, 0xc4, 0x82, 0xa2, 0x82, 0xe9, 0x91, 0xe5, 0x89, 0xef, 0x88, 0xea, 0x97, 0x97, 0x82, 0xc5, 0x82, 0xb7, 0x81, 0x42, 0x00, 0x00, 0x00, 0x00, 0x83, 0x58, 0x83, 0x52, 0x83, 0x41, 0x33, 0x00, 0x83, 0x58, 0x83, 0x52, 0x83, 0x41, 0x32, 0x00, 0x82, 0xa0, 0x82, 0xc8, 0x82, 0xbd, 0x82, 0xcc, 0x90, 0xac, 0x90, 0xd1, 0x82, 0xa9, 0x82, 0xe7, 0x82, 0xa8, 0x92, 0x54, 0x82, 0xb5, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x8f, 0xe3, 0x8e, 0xe8, 0x82, 0xad, 0x82, 0xc8, 0x82, 0xe8, 0x82, 0xbd, 0x82, 0xa2, 0x90, 0x6c, 0x82, 0xcd, 0x97, 0x76, 0x83, 0x60, 0x83, 0x46, 0x83, 0x62, 0x83, 0x4e, 0x81, 0x49, 0x00, 0x00, 0x00, 0x82, 0xa8, 0x82, 0xb7, 0x82, 0xb7, 0x82, 0xdf, 0x33, 0x00, 0x00, 0x00, 0x82, 0xa8, 0x82, 0xb7, 0x82, 0xb7, 0x82, 0xdf, 0x32, 0x00, 0x00, 0x00, 0x97, 0x4c, 0x96, 0xbc, 0x82, 0xc8, 0x8a, 0x79, 0x8b, 0xc8, 0x81, 0x41, 0x97, 0x56, 0x82, 0xd1, 0x82, 0xe2, 0x82, 0xb7, 0x82, 0xa2, 0x8a, 0x79, 0x8b, 0xc8, 0x82, 0xf0, 0x0a, 0x8f, 0x57, 0x82, 0xdf, 0x82, 0xc4, 0x82, 0xab, 0x82, 0xdc, 0x82, 0xb5, 0x82, 0xbd, 0x81, 0x42, 0x00, 0x00, 0x00, 0x83, 0x57, 0x83, 0x83, 0x83, 0x93, 0x83, 0x8b, 0x33, 0x00, 0x00, 0x00, 0x83, 0x57, 0x83, 0x83, 0x83, 0x93, 0x83, 0x8b, 0x32, 0x00, 0x00, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x82, 0xcc, 0x83, 0x57, 0x83, 0x83, 0x83, 0x93, 0x83, 0x8b, 0x82, 0xa9, 0x82, 0xe7, 0x82, 0xa8, 0x92, 0x54, 0x82, 0xb5, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x8b, 0x43, 0x82, 0xc9, 0x82, 0xc8, 0x82, 0xe9, 0x83, 0x57, 0x83, 0x83, 0x83, 0x93, 0x83, 0x8b, 0x82, 0xcd, 0x82, 0xa0, 0x82, 0xe8, 0x82, 0xdc, 0x82, 0xb7, 0x82, 0xa9, 0x81, 0x48, 0x00, 0x83, 0x8c, 0x83, 0x78, 0x83, 0x8b, 0x33, 0x00, 0x83, 0x8c, 0x83, 0x78, 0x83, 0x8b, 0x32, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x82, 0xcc, 0x4c, 0x45, 0x56, 0x45, 0x4c, 0x82, 0xa9, 0x82, 0xe7, 0x82, 0xa8, 0x92, 0x54, 0x82, 0xb5, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x8d, 0xa1, 0x89, 0xf1, 0x82, 0xcd, 0x82, 0xc7, 0x82, 0xcc, 0x93, 0xef, 0x82, 0xb5, 0x82, 0xb3, 0x82, 0xc9, 0x92, 0xa7, 0x90, 0xed, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x82, 0xa9, 0x81, 0x48, 0x00, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x96, 0xbc, 0x33, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x96, 0xbc, 0x32, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x96, 0xbc, 0x82, 0xa9, 0x82, 0xe7, 0x82, 0xa8, 0x92, 0x54, 0x82, 0xb5, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42, 0x0a, 0x82, 0xed, 0x82, 0xbd, 0x82, 0xad, 0x82, 0xb5, 0x82, 0xaa, 0x91, 0x53, 0x97, 0xcd, 0x82, 0xc5, 0x8c, 0xa9, 0x82, 0xc2, 0x82, 0xaf, 0x82, 0xc4, 0x8e, 0x51, 0x82, 0xe8, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x49, 0x00, 0x83, 0x8b, 0x81, 0x5b, 0x83, 0x67, 0x33, 0x00, 0x83, 0x8b, 0x81, 0x5b, 0x83, 0x67, 0x32, 0x00, 0x8b, 0x43, 0x82, 0xc9, 0x82, 0xc8, 0x82, 0xe9, 0x83, 0x4a, 0x83, 0x65, 0x83, 0x53, 0x83, 0x8a, 0x83, 0x70, 0x83, 0x6c, 0x83, 0x8b, 0x82, 0xf0, 0x83, 0x5e, 0x83, 0x62, 0x83, 0x60, 0x81, 0x49, 0x0a, 0x82, 0xb2, 0x8a, 0xf3, 0x96, 0x5d, 0x82, 0xcc, 0x8a, 0x79, 0x8b, 0xc8, 0x82, 0xf0, 0x82, 0xa8, 0x91, 0x49, 0x82, 0xd1, 0x82, 0xb5, 0x82, 0xdc, 0x82, 0xb7, 0x81, 0x42],
									on: [0x50, 0x6c, 0x61, 0x79, 0x20, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x20, 0x62, 0x79, 0x20, 0x6a, 0x75, 0x62, 0x65, 0x61, 0x74, 0x20, 0x4c, 0x61, 0x62, 0x2e, 0x20, 0x45, 0x44, 0x49, 0x54, 0x21, 0x0a, 0x4c, 0x65, 0x74, 0x27, 0x73, 0x20, 0x65, 0x6e, 0x6a, 0x6f, 0x79, 0x20, 0x74, 0x68, 0x65, 0x20, 0x6e, 0x65, 0x77, 0x20, 0x6d, 0x75, 0x73, 0x69, 0x63, 0x2e, 0x20, 0x20, 0x20, 0x20, 0x00, 0x00, 0x91, 0xe5, 0x89, 0xef, 0x33, 0x00, 0x00, 0x00, 0x91, 0xe5, 0x89, 0xef, 0x32, 0x00, 0x00, 0x00, 0x46, 0x69, 0x6e, 0x64, 0x20, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x20, 0x74, 0x6f, 0x75, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x20, 0x68, 0x65, 0x72, 0x65, 0x2e, 0x20, 0x20, 0x20, 0x00, 0x00, 0x00, 0x00, 0x83, 0x58, 0x83, 0x52, 0x83, 0x41, 0x33, 0x00, 0x83, 0x58, 0x83, 0x52, 0x83, 0x41, 0x32, 0x00, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x20, 0x62, 0x79, 0x20, 0x47, 0x72, 0x61, 0x64, 0x65, 0x73, 0x2e, 0x20, 0x54, 0x68, 0x65, 0x20, 0x70, 0x72, 0x6f, 0x27, 0x73, 0x20, 0x75, 0x73, 0x65, 0x20, 0x74, 0x68, 0x69, 0x73, 0x0a, 0x74, 0x6f, 0x20, 0x69, 0x6d, 0x70, 0x72, 0x6f, 0x76, 0x65, 0x20, 0x74, 0x68, 0x65, 0x69, 0x72, 0x20, 0x73, 0x6b, 0x69, 0x6c, 0x6c, 0x73, 0x21, 0x00, 0x00, 0x00, 0x82, 0xa8, 0x82, 0xb7, 0x82, 0xb7, 0x82, 0xdf, 0x33, 0x00, 0x00, 0x00, 0x82, 0xa8, 0x82, 0xb7, 0x82, 0xb7, 0x82, 0xdf, 0x32, 0x00, 0x00, 0x00, 0x97, 0x4c, 0x96, 0xbc, 0x82, 0xc8, 0x8a, 0x79, 0x8b, 0xc8, 0x81, 0x41, 0x97, 0x56, 0x82, 0xd1, 0x82, 0xe2, 0x82, 0xb7, 0x82, 0xa2, 0x8a, 0x79, 0x8b, 0xc8, 0x82, 0xf0, 0x0a, 0x8f, 0x57, 0x82, 0xdf, 0x82, 0xc4, 0x82, 0xab, 0x82, 0xdc, 0x82, 0xb5, 0x82, 0xbd, 0x81, 0x42, 0x00, 0x00, 0x00, 0x83, 0x57, 0x83, 0x83, 0x83, 0x93, 0x83, 0x8b, 0x33, 0x00, 0x00, 0x00, 0x83, 0x57, 0x83, 0x83, 0x83, 0x93, 0x83, 0x8b, 0x32, 0x00, 0x00, 0x00, 0x48, 0x65, 0x72, 0x65, 0x20, 0x77, 0x65, 0x20, 0x63, 0x61, 0x6e, 0x20, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x20, 0x62, 0x79, 0x20, 0x47, 0x65, 0x6e, 0x72, 0x65, 0x2e, 0x0a, 0x57, 0x68, 0x69, 0x63, 0x68, 0x20, 0x6f, 0x6e, 0x65, 0x20, 0x61, 0x72, 0x65, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x69, 0x6e, 0x20, 0x74, 0x68, 0x65, 0x20, 0x6d, 0x6f, 0x6f, 0x64, 0x20, 0x66, 0x6f, 0x72, 0x3f, 0x00, 0x83, 0x8c, 0x83, 0x78, 0x83, 0x8b, 0x33, 0x00, 0x83, 0x8c, 0x83, 0x78, 0x83, 0x8b, 0x32, 0x00, 0x4c, 0x65, 0x74, 0x27, 0x73, 0x20, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x20, 0x62, 0x79, 0x20, 0x4c, 0x45, 0x56, 0x45, 0x4c, 0x21, 0x0a, 0x44, 0x6f, 0x6e, 0x27, 0x74, 0x20, 0x62, 0x65, 0x20, 0x61, 0x66, 0x72, 0x61, 0x69, 0x64, 0x20, 0x74, 0x6f, 0x20, 0x63, 0x68, 0x61, 0x6c, 0x6c, 0x65, 0x6e, 0x67, 0x65, 0x20, 0x79, 0x6f, 0x75, 0x72, 0x73, 0x65, 0x6c, 0x66, 0x21, 0x20, 0x00, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x96, 0xbc, 0x33, 0x00, 0x8a, 0x79, 0x8b, 0xc8, 0x96, 0xbc, 0x32, 0x00, 0x48, 0x65, 0x72, 0x65, 0x20, 0x77, 0x65, 0x20, 0x63, 0x61, 0x6e, 0x20, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x20, 0x62, 0x79, 0x20, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x2e, 0x0a, 0x47, 0x6f, 0x6f, 0x64, 0x20, 0x6c, 0x75, 0x63, 0x6b, 0x20, 0x77, 0x69, 0x74, 0x68, 0x20, 0x74, 0x68, 0x69, 0x73, 0x20, 0x6f, 0x6e, 0x65, 0x20, 0x6c, 0x6f, 0x6c, 0x2e, 0x20, 0x20, 0x00, 0x83, 0x8b, 0x81, 0x5b, 0x83, 0x67, 0x33, 0x00, 0x83, 0x8b, 0x81, 0x5b, 0x83, 0x67, 0x32, 0x00, 0x43, 0x68, 0x6f, 0x6f, 0x73, 0x65, 0x20, 0x74, 0x68, 0x65, 0x20, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x77, 0x61, 0x6e, 0x74, 0x21, 0x0a, 0x49, 0x20, 0x77, 0x69, 0x6c, 0x6c, 0x20, 0x74, 0x61, 0x6b, 0x65, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x74, 0x6f, 0x20, 0x69, 0x74, 0x2e, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20],
								},
							],
						},
					],
				},
				{
					appname: 'music_db.dll',
					version: 'music_db.dll',
					patches: [
						{
							name: 'Unlock all songs',
							patches: [{ offset: 0x1b8f, off: [0x74, 0x09], on: [0x90, 0x90] }],
						},
					],
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
					appname: 'jubeat.dll',
					version: '2020-09-16',
					patches: [
						{
							name: 'SELECT MUSIC Timer Lock',
							patches: [{ offset: 0xa0632, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Skip CATEGORY SELECT',
							patches: [{ offset: 0xb95f7, off: [0x04], on: [0x07] }],
						},
					],
				},
				{
					appname: 'jubeat.dll',
					version: '2020-07-27',
					patches: [
						{
							name: 'Disable Turorial',
							patches: [{ offset: 0xb766f, off: [0x0f, 0x85, 0x7f, 0x01, 0x00, 0x00], on: [0xe9, 0x80, 0x01, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'SELECT MUSIC Timer Lock',
							patches: [{ offset: 0xa0b92, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Skip CATEGORY SELECT',
							patches: [{ offset: 0xa0f17, off: [0x04], on: [0x07] }],
						},
					],
				},
				{
					appname: 'jubeat.dll',
					version: '2020-06-30',
					patches: [
						{
							name: 'SELECT MUSIC Timer Lock',
							patches: [{ offset: 0xa06e2, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Skip CATEGORY SELECT',
							patches: [{ offset: 0xa0a67, off: [0x04], on: [0x07] }],
						},
					],
				},
				{
					appname: 'jubeat.dll',
					version: '2020-06-11',
					patches: [
						{
							name: 'Disable Tutorial',
							patches: [{ offset: 0xb70ff, off: [0x0f, 0x85, 0x7f, 0x01, 0x00, 0x00], on: [0xe9, 0x80, 0x01, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'SELECT MUSIC Timer Lock',
							patches: [{ offset: 0xa0632, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Skip CATEGORY SELECT',
							patches: [{ offset: 0xa09b7, off: [0x04], on: [0x07] }],
						},
					],
				},
				{
					appname: 'jubeat.dll',
					version: '2020-02-19',
					patches: [
						{
							name: 'SELECT MUSIC Timer Lock',
							patches: [{ offset: 0xa0272, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Skip CATEGORY SELECT',
							patches: [{ offset: 0xa05f7, off: [0x04], on: [0x07] }],
						},
					],
				},
				{
					appname: 'jubeat.dll',
					version: '2019-09-03',
					patches: [
						{
							name: 'Disable Tutorial',
							patches: [{ offset: 0xc0047, off: [0x0f, 0x85, 0xd6, 0x01, 0x00, 0x00], on: [0xe9, 0xd7, 0x01, 0x00, 0x00, 0x90] }],
						},
						{
							name: 'SELECT MUSIC Timer Lock',
							patches: [{ offset: 0xa72e7, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Skip CATEGORY SELECT',
							patches: [{ offset: 0xa7663, off: [0x04], on: [0x07] }],
						},
					],
				},
				{
					appname: 'jubeat.dll',
					version: '2019-06-25',
					patches: [
						{
							name: 'SELECT MUSIC Timer Lock',
							patches: [{ offset: 0xa7227, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Online Matching Skip',
							patches: [{ offset: 0xbbd0b, off: [0x0f, 0x8d, 0x72, 0x01], on: [0xe9, 0x73, 0x01, 0x00] }],
						},
					],
				},
				{
					appname: 'jubeat.dll',
					version: '2018-11-27',
					patches: [
						// Ported by Cammy
						{
							name: 'Disable Tutorial',
							patches: [{ offset: 0xbe5b7, off: [0x0f, 0x85, 0xd6, 0x01, 0x00, 0x00], on: [0xe9, 0xd7, 0x01, 0x00, 0x00, 0x90] }],
						},
						// Ported by Cammy
						{
							name: 'SELECT MUSIC Timer Lock',
							patches: [{ offset: 0xa5672, off: [0x75], on: [0xeb] }],
						},
						{
							name: 'Skip CATEGORY SELECT',
							patches: [{ offset: 0xa59f5, off: [0x04], on: [0x07] }],
						},
					],
				},
				{
					appname: 'music_db.dll',
					version: 'music_db.dll',
					patches: [
						{
							name: 'Unlock all songs',
							patches: [{ offset: 0x2363, off: [0x74, 0x14], on: [0x90, 0x90] }],
						},
					],
				},
			],
		],
	},
]

export default jubeat
