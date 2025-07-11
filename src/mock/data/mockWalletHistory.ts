import type { WalletHistoryResponse } from "@/types/WalletHistory";

export const mockWalletHistory: WalletHistoryResponse = {
	cursor: undefined,
	page_size: 8,
	limit: "100",
	result: [
		{
			hash: "0xba7f767fd210ca584e1aeb681ce217ccb60d8865a6b47dbe4d39ef15615e8d49",
			nonce: "5",
			transaction_index: "42",
			from_address_entity: undefined,
			from_address_entity_logo: undefined,
			from_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			from_address_label: undefined,
			to_address_entity: "MetaMask",
			to_address_entity_logo:
				"https://entities-logos.s3.us-east-1.amazonaws.com/metamask.png",
			to_address: "0x881d40237659c251811cec9c364ef91dc08d300c",
			to_address_label: "Metamask: Swap Router",
			value: "0",
			gas: "364735",
			gas_price: "1315205938",
			receipt_cumulative_gas_used: "4155865",
			receipt_gas_used: "291014",
			receipt_contract_address: undefined,
			receipt_status: "1",
			block_timestamp: "2025-07-06T07:06:23.000Z",
			block_number: "22858565",
			block_hash:
				"0x50add3197aad1c0c7e6b73219d013cfdc6d2d86f3b5258cd902d1f8bb52143c0",
			transaction_fee: "0.000382743340841132",
			method_label: "swap",
			nft_transfers: [],
			erc20_transfers: [
				{
					token_name: "Wrapped SOL",
					token_symbol: "SOL",
					token_logo:
						"https://logo.moralis.io/0x1_0xd31a59c85ae9d8edefec411d448f90841571b89c_25becbb3aca508f3066ee08671404aff.png",
					token_decimals: "9",
					from_address_entity: undefined,
					from_address_entity_logo: undefined,
					from_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
					from_address_label: undefined,
					to_address_entity: "MetaMask",
					to_address_entity_logo:
						"https://entities-logos.s3.us-east-1.amazonaws.com/metamask.png",
					to_address: "0x74de5d4fcbf63e00296fd95d33236b9794016631",
					to_address_label: "MetaMask: Spender",
					address: "0xd31a59c85ae9d8edefec411d448f90841571b89c",
					log_index: 131,
					value: "27353938",
					possible_spam: false,
					verified_contract: true,
					security_score: 89,
					direction: "send",
					value_formatted: "0.027353938",
				},
				{
					token_name: "Wrapped AVAX",
					token_symbol: "WAVAX",
					token_logo:
						"https://logo.moralis.io/0x1_0x85f138bfee4ef8e540890cfb48f620571d67eda3_019e5de8fe4637bf1a318987fb150d5e.png",
					token_decimals: "18",
					from_address_entity: "MetaMask",
					from_address_entity_logo:
						"https://entities-logos.s3.us-east-1.amazonaws.com/metamask.png",
					from_address: "0x74de5d4fcbf63e00296fd95d33236b9794016631",
					from_address_label: "MetaMask: Spender",
					to_address_entity: undefined,
					to_address_entity_logo: undefined,
					to_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
					to_address_label: undefined,
					address: "0x85f138bfee4ef8e540890cfb48f620571d67eda3",
					log_index: 141,
					value: "219984073463235903",
					possible_spam: false,
					verified_contract: true,
					security_score: undefined,
					direction: "receive",
					value_formatted: "0.2199840734632359",
				},
			],
			native_transfers: [],
			summary: "Swapped 0.02735 SOL for 0.2199 WAVAX",
			possible_spam: false,
			category: "token swap",
		},
		{
			hash: "0xb6d206703c0484adfc9c1e0ed7bef57de42598aa0a4984680969ffd1cd9511f5",
			nonce: "4",
			transaction_index: "41",
			from_address_entity: undefined,
			from_address_entity_logo: undefined,
			from_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			from_address_label: undefined,
			to_address_entity: "Wormhole",
			to_address_entity_logo:
				"https://entities-logos.s3.us-east-1.amazonaws.com/wormhole.png",
			to_address: "0xd31a59c85ae9d8edefec411d448f90841571b89c",
			to_address_label: "Wormhole: SOL Token",
			value: "0",
			gas: "62691",
			gas_price: "1315205938",
			receipt_cumulative_gas_used: "3864851",
			receipt_gas_used: "61863",
			receipt_contract_address: undefined,
			receipt_status: "1",
			block_timestamp: "2025-07-06T07:06:23.000Z",
			block_number: "22858565",
			block_hash:
				"0x50add3197aad1c0c7e6b73219d013cfdc6d2d86f3b5258cd902d1f8bb52143c0",
			transaction_fee: "0.000081362584942494",
			method_label: "approve",
			nft_transfers: [],
			erc20_transfers: [],
			native_transfers: [],
			contract_interactions: {
				approvals: [
					{
						value:
							"115792089237316195423570985008687907853269984665640564039457584007913129639935",
						value_formatted: "1.157920892373162e+68",
						token: {
							address: "0xd31a59c85ae9d8edefec411d448f90841571b89c",
							address_label: "Wormhole: SOL Token",
							token_name: "Wrapped SOL",
							token_logo: "",
							token_symbol: "SOL",
						},
						spender: {
							address: "0x881d40237659c251811cec9c364ef91dc08d300c",
							address_label: "Metamask: Swap Router",
							entity: "MetaMask",
							entity_logo:
								"https://entities-logos.s3.us-east-1.amazonaws.com/metamask.png",
						},
					},
				],
			},
			summary: "Approved unlimited SOL",
			possible_spam: false,
			category: "approve",
		},
		{
			hash: "0x8c871ac11d0f07bdf78509cbcd1d3e6bd4b93e3bd7bdc99047d358a40ecc4612",
			nonce: "3",
			transaction_index: "28",
			from_address_entity: undefined,
			from_address_entity_logo: undefined,
			from_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			from_address_label: undefined,
			to_address_entity: "MetaMask",
			to_address_entity_logo:
				"https://entities-logos.s3.us-east-1.amazonaws.com/metamask.png",
			to_address: "0x881d40237659c251811cec9c364ef91dc08d300c",
			to_address_label: "Metamask: Swap Router",
			value: "1267622751212565",
			gas: "230195",
			gas_price: "1265733856",
			receipt_cumulative_gas_used: "29116803",
			receipt_gas_used: "200733",
			receipt_contract_address: undefined,
			receipt_status: "1",
			block_timestamp: "2025-07-06T04:48:11.000Z",
			block_number: "22857878",
			block_hash:
				"0x2a7ef45ec1280e029b7dc50269a2764cb9468b62f51b2e920ca410af00bf5814",
			transaction_fee: "0.000254074554116448",
			method_label: "swap",
			nft_transfers: [],
			erc20_transfers: [
				{
					token_name: "USD Coin",
					token_symbol: "USDC",
					token_logo:
						"https://logo.moralis.io/0x1_0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48_7f342f7e169e45d4948987ccb93c62a8.png",
					token_decimals: "6",
					from_address_entity: "MetaMask",
					from_address_entity_logo:
						"https://entities-logos.s3.us-east-1.amazonaws.com/metamask.png",
					from_address: "0x74de5d4fcbf63e00296fd95d33236b9794016631",
					from_address_label: "MetaMask: Spender",
					to_address_entity: undefined,
					to_address_entity_logo: undefined,
					to_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
					to_address_label: undefined,
					address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
					log_index: 303,
					value: "3159343",
					possible_spam: false,
					verified_contract: true,
					security_score: 93,
					direction: "receive",
					value_formatted: "3.159343",
				},
			],
			native_transfers: [
				{
					from_address_entity: undefined,
					from_address_entity_logo: undefined,
					from_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
					from_address_label: undefined,
					to_address_entity: "MetaMask",
					to_address_entity_logo:
						"https://entities-logos.s3.us-east-1.amazonaws.com/metamask.png",
					to_address: "0x881d40237659c251811cec9c364ef91dc08d300c",
					to_address_label: "Metamask: Swap Router",
					value: "1267622751212565",
					value_formatted: "0.001267622751212565",
					direction: "send",
					internal_transaction: false,
					token_symbol: "ETH",
					token_logo: "https://cdn.moralis.io/eth/0x.png",
				},
			],
			summary: "Swapped 0.001267 ETH for 3.15 USDC",
			possible_spam: false,
			category: "token swap",
		},
		{
			hash: "0x201cba16ac33bd65bd07b9e21ee24f2d24896d039100f3c1cbfddc23bdcc3098",
			nonce: "2",
			transaction_index: "56",
			from_address_entity: undefined,
			from_address_entity_logo: undefined,
			from_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			from_address_label: undefined,
			to_address_entity: undefined,
			to_address_entity_logo: undefined,
			to_address: "0x5db535a912c1d034013fdb2ff17e1a601ee3654b",
			to_address_label: undefined,
			value: "1000000000000000",
			gas: "21000",
			gas_price: "1386526651",
			receipt_cumulative_gas_used: "6238590",
			receipt_gas_used: "21000",
			receipt_contract_address: undefined,
			receipt_status: "1",
			block_timestamp: "2025-04-29T12:21:59.000Z",
			block_number: "22374685",
			block_hash:
				"0x25b77e727f7ac1f3d0c5959823c3f75a83d1c0d591f5ba939871a869f1868ddf",
			transaction_fee: "0.000029117059671",
			method_label: undefined,
			nft_transfers: [],
			erc20_transfers: [],
			native_transfers: [
				{
					from_address_entity: undefined,
					from_address_entity_logo: undefined,
					from_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
					from_address_label: undefined,
					to_address_entity: undefined,
					to_address_entity_logo: undefined,
					to_address: "0x5db535a912c1d034013fdb2ff17e1a601ee3654b",
					to_address_label: undefined,
					value: "1000000000000000",
					value_formatted: "0.001",
					direction: "send",
					internal_transaction: false,
					token_symbol: "ETH",
					token_logo: "https://cdn.moralis.io/eth/0x.png",
				},
			],
			summary: "Sent 0.001 ETH to 0x5d...654b",
			possible_spam: false,
			category: "send",
		},
		{
			hash: "0x9a6e46ce3d38f326e440db8c4765c2e5b85272a1ec706fb1fb3c21251b9e13ff",
			nonce: "1",
			transaction_index: "191",
			from_address_entity: undefined,
			from_address_entity_logo: undefined,
			from_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			from_address_label: undefined,
			to_address_entity: "0x",
			to_address_entity_logo:
				"https://entities-logos.s3.us-east-1.amazonaws.com/0x.png",
			to_address: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
			to_address_label: "0x: Exchange Proxy",
			value: "3000000000000000",
			gas: "346527",
			gas_price: "6576180720",
			receipt_cumulative_gas_used: "19934883",
			receipt_gas_used: "266559",
			receipt_contract_address: undefined,
			receipt_status: "1",
			block_timestamp: "2024-11-25T08:12:47.000Z",
			block_number: "21263502",
			block_hash:
				"0xebe0d096b5ebb4193af3e1a898152064430eb82441a936cb4a447b006c60105b",
			transaction_fee: "0.00175294015654248",
			method_label: "transformERC20",
			nft_transfers: [],
			erc20_transfers: [
				{
					token_name: "Wrapped SOL",
					token_symbol: "SOL",
					token_logo:
						"https://logo.moralis.io/0x1_0xd31a59c85ae9d8edefec411d448f90841571b89c_25becbb3aca508f3066ee08671404aff.png",
					token_decimals: "9",
					from_address_entity: "0x",
					from_address_entity_logo:
						"https://entities-logos.s3.us-east-1.amazonaws.com/0x.png",
					from_address: "0x22f9dcf4647084d6c31b2765f6910cd85c178c18",
					from_address_label: "0x: Exchange Proxy Flash Wallet",
					to_address_entity: undefined,
					to_address_entity_logo: undefined,
					to_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
					to_address_label: undefined,
					address: "0xd31a59c85ae9d8edefec411d448f90841571b89c",
					log_index: 481,
					value: "36353938",
					possible_spam: false,
					verified_contract: true,
					security_score: 89,
					direction: "receive",
					value_formatted: "0.036353938",
				},
			],
			native_transfers: [
				{
					from_address_entity: undefined,
					from_address_entity_logo: undefined,
					from_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
					from_address_label: undefined,
					to_address_entity: "0x",
					to_address_entity_logo:
						"https://entities-logos.s3.us-east-1.amazonaws.com/0x.png",
					to_address: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
					to_address_label: "0x: Exchange Proxy",
					value: "3000000000000000",
					value_formatted: "0.003",
					direction: "send",
					internal_transaction: false,
					token_symbol: "ETH",
					token_logo: "https://cdn.moralis.io/eth/0x.png",
				},
			],
			summary: "Swapped 0.003 ETH for 0.03635 SOL",
			possible_spam: false,
			category: "token swap",
		},
		{
			hash: "0x94ff6c6ec56d9dfc88fda777365f74c9518d407e0a684eafd5f7cdda849c1935",
			nonce: "0",
			transaction_index: "88",
			from_address_entity: undefined,
			from_address_entity_logo: undefined,
			from_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			from_address_label: undefined,
			to_address_entity: "LiFi",
			to_address_entity_logo: undefined,
			to_address: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae",
			to_address_label: "LiFi: LiFi Diamond",
			value: "179089045956756400",
			gas: "309075",
			gas_price: "17662122392",
			receipt_cumulative_gas_used: "6546956",
			receipt_gas_used: "237750",
			receipt_contract_address: undefined,
			receipt_status: "1",
			block_timestamp: "2024-11-08T14:01:11.000Z",
			block_number: "21143383",
			block_hash:
				"0x4d72a0cc0e426686ebfcfcb16a566200bbe1c5d42d4926db1fa92d48a198f212",
			transaction_fee: "0.004199169598698",
			method_label: undefined,
			nft_transfers: [],
			erc20_transfers: [],
			native_transfers: [
				{
					from_address_entity: "LiFi",
					from_address_entity_logo: undefined,
					from_address: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae",
					from_address_label: "LiFi: LiFi Diamond",
					to_address_entity: undefined,
					to_address_entity_logo: undefined,
					to_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
					to_address_label: undefined,
					value: "9066123972",
					value_formatted: "9.066123972e-9",
					direction: "receive",
					internal_transaction: true,
					token_symbol: "ETH",
					token_logo: "https://cdn.moralis.io/eth/0x.png",
				},
				{
					from_address_entity: undefined,
					from_address_entity_logo: undefined,
					from_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
					from_address_label: undefined,
					to_address_entity: "LiFi",
					to_address_entity_logo: undefined,
					to_address: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae",
					to_address_label: "LiFi: LiFi Diamond",
					value: "179089045956756400",
					value_formatted: "0.17908904595675643",
					direction: "send",
					internal_transaction: false,
					token_symbol: "ETH",
					token_logo: "https://cdn.moralis.io/eth/0x.png",
				},
			],
			summary: "Swapped 0.179 ETH for 0.0000000091 ETH",
			possible_spam: false,
			category: "token swap",
		},
		{
			hash: "0x94d2a9f9203ec026380e475abf8d6644f6293ae5147bebb63173879e9948738e",
			nonce: "1122279",
			transaction_index: "187",
			from_address_entity: "Hop Protocol",
			from_address_entity_logo:
				"https://entities-logos.s3.us-east-1.amazonaws.com/hop_protocol.png",
			from_address: "0x710bda329b2a6224e4b44833de30f38e7f81d564",
			from_address_label: "Hop Protocol: ETH Bonder",
			to_address_entity: "Hop Protocol",
			to_address_entity_logo:
				"https://entities-logos.s3.us-east-1.amazonaws.com/hop_protocol.png",
			to_address: "0xb8901acb165ed027e32754e0ffe830802919727f",
			to_address_label: "Hop Protocol: Ethereum Bridge",
			value: "0",
			gas: "500000",
			gas_price: "17151498546",
			receipt_cumulative_gas_used: "17601744",
			receipt_gas_used: "115447",
			receipt_contract_address: undefined,
			receipt_status: "1",
			block_timestamp: "2024-11-08T14:00:11.000Z",
			block_number: "21143378",
			block_hash:
				"0xd6665713c5728f5f37aa59584b6429b4325b3cc2151eec4fa99d47ea009973d9",
			transaction_fee: "0.001980089052640062",
			method_label: "bondWithdrawal",
			nft_transfers: [],
			erc20_transfers: [],
			native_transfers: [
				{
					from_address_entity: "Hop Protocol",
					from_address_entity_logo:
						"https://entities-logos.s3.us-east-1.amazonaws.com/hop_protocol.png",
					from_address: "0xb8901acb165ed027e32754e0ffe830802919727f",
					from_address_label: "Hop Protocol: Ethereum Bridge",
					to_address_entity: undefined,
					to_address_entity_logo: undefined,
					to_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
					to_address_label: undefined,
					value: "5834198047936498",
					value_formatted: "0.005834198047936498",
					direction: "receive",
					internal_transaction: true,
					token_symbol: "ETH",
					token_logo: "https://cdn.moralis.io/eth/0x.png",
				},
			],
			summary: "Received 0.005834 ETH from Hop Protocol: Ethereum Bridge",
			possible_spam: false,
			category: "receive",
		},
		{
			hash: "0x449ee1983153e3d765c2e685926141aac5e433c3949923550858471ba23a9401",
			nonce: "231394",
			transaction_index: "17",
			from_address_entity: "Across Protocol",
			from_address_entity_logo: undefined,
			from_address: "0x15652636f3898f550b257b89926d5566821c32e1",
			from_address_label: "Across Protocol: Relayer",
			to_address_entity: "Across Protocol",
			to_address_entity_logo: undefined,
			to_address: "0x5c7bcd6e7de5423a257d81b442095a1a6ced35c5",
			to_address_label: "Across Protocol: Ethereum Spoke Pool",
			value: "0",
			gas: "250000",
			gas_price: "21479021969",
			receipt_cumulative_gas_used: "2168246",
			receipt_gas_used: "133715",
			receipt_contract_address: undefined,
			receipt_status: "1",
			block_timestamp: "2024-11-08T13:58:35.000Z",
			block_number: "21143370",
			block_hash:
				"0x8aac8e39e60e23774fa2c8297249207cd8fc830a57767cba7079a60a5065aa93",
			transaction_fee: "0.002872067422584835",
			method_label: undefined,
			nft_transfers: [],
			erc20_transfers: [],
			native_transfers: [
				{
					from_address_entity: "Across Protocol",
					from_address_entity_logo: undefined,
					from_address: "0x5c7bcd6e7de5423a257d81b442095a1a6ced35c5",
					from_address_label: "Across Protocol: Ethereum Spoke Pool",
					to_address_entity: undefined,
					to_address_entity_logo: undefined,
					to_address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
					to_address_label: undefined,
					value: "185703688408819975",
					value_formatted: "0.18570368840881996",
					direction: "receive",
					internal_transaction: true,
					token_symbol: "ETH",
					token_logo: "https://cdn.moralis.io/eth/0x.png",
				},
			],
			summary: "Received 0.1857 ETH from Across Protocol: Ethereum Spoke Pool",
			possible_spam: false,
			category: "receive",
		},
	],
	page: 0,
};
