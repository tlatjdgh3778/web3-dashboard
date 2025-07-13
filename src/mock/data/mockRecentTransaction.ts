import {
	AssetTransfersCategory,
	type AssetTransfersWithMetadataResult,
} from "alchemy-sdk";

export const mockRecentTransaction: AssetTransfersWithMetadataResult[] = [
	{
		blockNum: "0x1429f57",
		uniqueId:
			"0x94ff6c6ec56d9dfc88fda777365f74c9518d407e0a684eafd5f7cdda849c1935:external",
		hash: "0x94ff6c6ec56d9dfc88fda777365f74c9518d407e0a684eafd5f7cdda849c1935",
		from: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		to: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae",
		value: 0.17908904595675643,
		erc721TokenId: null,
		erc1155Metadata: null,
		tokenId: null,
		asset: "ETH",
		category: AssetTransfersCategory.EXTERNAL,
		rawContract: {
			value: "0x27c4089d76a83b0",
			address: null,
			decimal: "0x12",
		},
		metadata: {
			blockTimestamp: "2024-11-08T14:01:11.000Z",
		},
	},
	{
		blockNum: "0x144748e",
		uniqueId:
			"0x9a6e46ce3d38f326e440db8c4765c2e5b85272a1ec706fb1fb3c21251b9e13ff:external",
		hash: "0x9a6e46ce3d38f326e440db8c4765c2e5b85272a1ec706fb1fb3c21251b9e13ff",
		from: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		to: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
		value: 0.003,
		erc721TokenId: null,
		erc1155Metadata: null,
		tokenId: null,
		asset: "ETH",
		category: AssetTransfersCategory.EXTERNAL,
		rawContract: {
			value: "0xaa87bee538000",
			address: null,
			decimal: "0x12",
		},
		metadata: {
			blockTimestamp: "2024-11-25T08:12:47.000Z",
		},
	},
	{
		blockNum: "0x155691d",
		uniqueId:
			"0x201cba16ac33bd65bd07b9e21ee24f2d24896d039100f3c1cbfddc23bdcc3098:external",
		hash: "0x201cba16ac33bd65bd07b9e21ee24f2d24896d039100f3c1cbfddc23bdcc3098",
		from: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		to: "0x5db535a912c1d034013fdb2ff17e1a601ee3654b",
		value: 0.001,
		erc721TokenId: null,
		erc1155Metadata: null,
		tokenId: null,
		asset: "ETH",
		category: AssetTransfersCategory.EXTERNAL,
		rawContract: {
			value: "0x38d7ea4c68000",
			address: null,
			decimal: "0x12",
		},
		metadata: {
			blockTimestamp: "2025-04-29T12:21:59.000Z",
		},
	},
	{
		blockNum: "0x15cc896",
		uniqueId:
			"0x8c871ac11d0f07bdf78509cbcd1d3e6bd4b93e3bd7bdc99047d358a40ecc4612:external",
		hash: "0x8c871ac11d0f07bdf78509cbcd1d3e6bd4b93e3bd7bdc99047d358a40ecc4612",
		from: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		to: "0x881d40237659c251811cec9c364ef91dc08d300c",
		value: 0.001267622751212565,
		erc721TokenId: null,
		erc1155Metadata: null,
		tokenId: null,
		asset: "ETH",
		category: AssetTransfersCategory.EXTERNAL,
		rawContract: {
			value: "0x480e56bcb9415",
			address: null,
			decimal: "0x12",
		},
		metadata: {
			blockTimestamp: "2025-07-06T04:48:11.000Z",
		},
	},
	{
		blockNum: "0x15ccb45",
		uniqueId:
			"0xba7f767fd210ca584e1aeb681ce217ccb60d8865a6b47dbe4d39ef15615e8d49:log:131",
		hash: "0xba7f767fd210ca584e1aeb681ce217ccb60d8865a6b47dbe4d39ef15615e8d49",
		from: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		to: "0x74de5d4fcbf63e00296fd95d33236b9794016631",
		value: 0.027353938,
		erc721TokenId: null,
		erc1155Metadata: null,
		tokenId: null,
		asset: "SOL",
		category: AssetTransfersCategory.ERC20,
		rawContract: {
			value: "0x01a16352",
			address: "0xd31a59c85ae9d8edefec411d448f90841571b89c",
			decimal: "0x9",
		},
		metadata: {
			blockTimestamp: "2025-07-06T07:06:23.000Z",
		},
	},
	{
		blockNum: "0x15d8c9a",
		uniqueId:
			"0x3f3e075af1586e20a0280f4129e2b91bfa19e53c80fee155a2bdca147809f295:log:120",
		hash: "0x3f3e075af1586e20a0280f4129e2b91bfa19e53c80fee155a2bdca147809f295",
		from: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		to: "0x74de5d4fcbf63e00296fd95d33236b9794016631",
		value: 1.5,
		erc721TokenId: null,
		erc1155Metadata: null,
		tokenId: null,
		asset: "USDC",
		category: AssetTransfersCategory.ERC20,
		rawContract: {
			value: "0x16e360",
			address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
			decimal: "0x6",
		},
		metadata: {
			blockTimestamp: "2025-07-13T05:05:59.000Z",
		},
	},
];
