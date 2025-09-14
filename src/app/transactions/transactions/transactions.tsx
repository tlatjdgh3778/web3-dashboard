"use client";

import type { AssetTransfersWithMetadataResult } from "alchemy-sdk";
// import { useAccount } from "wagmi";

import { DataTable } from "@/components/common/data-table/data-table";

import { columns } from "./columns";

export default function Transactions() {
	// const { address } = useAccount();

	// const { data: assetTransfers, isLoading } = useGetAssetTransfers({
	// 	params: {
	// 		toAddress: address as string,
	// 		category: [
	// 			AssetTransfersCategory.EXTERNAL,
	// 			AssetTransfersCategory.INTERNAL,
	// 			AssetTransfersCategory.ERC20,
	// 			AssetTransfersCategory.ERC721,
	// 			AssetTransfersCategory.ERC1155,
	// 		],
	// 		withMetadata: true,
	// 	},
	// });
	const assetTransfers = [
		{
			blockNum: "0x1429f4a",
			uniqueId:
				"0x449ee1983153e3d765c2e685926141aac5e433c3949923550858471ba23a9401:internal:0_2",
			hash: "0x449ee1983153e3d765c2e685926141aac5e433c3949923550858471ba23a9401",
			from: "0x5c7bcd6e7de5423a257d81b442095a1a6ced35c5",
			to: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			value: 0.18570368840881996,
			erc721TokenId: null,
			erc1155Metadata: null,
			tokenId: null,
			asset: "ETH",
			category: "internal",
			rawContract: {
				value: "0x293c0854d166907",
				address: null,
				decimal: "0x12",
			},
			metadata: {
				blockTimestamp: "2024-11-08T13:58:35.000Z",
			},
		},
		{
			blockNum: "0x1429f52",
			uniqueId:
				"0x94d2a9f9203ec026380e475abf8d6644f6293ae5147bebb63173879e9948738e:internal:0",
			hash: "0x94d2a9f9203ec026380e475abf8d6644f6293ae5147bebb63173879e9948738e",
			from: "0xb8901acb165ed027e32754e0ffe830802919727f",
			to: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			value: 0.005834198047936498,
			erc721TokenId: null,
			erc1155Metadata: null,
			tokenId: null,
			asset: "ETH",
			category: "internal",
			rawContract: {
				value: "0x14ba2c16324ff2",
				address: null,
				decimal: "0x12",
			},
			metadata: {
				blockTimestamp: "2024-11-08T14:00:11.000Z",
			},
		},
		{
			blockNum: "0x1429f57",
			uniqueId:
				"0x94ff6c6ec56d9dfc88fda777365f74c9518d407e0a684eafd5f7cdda849c1935:internal:0_2",
			hash: "0x94ff6c6ec56d9dfc88fda777365f74c9518d407e0a684eafd5f7cdda849c1935",
			from: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae",
			to: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			value: 9.066123972e-9,
			erc721TokenId: null,
			erc1155Metadata: null,
			tokenId: null,
			asset: "ETH",
			category: "internal",
			rawContract: {
				value: "0x21c6212c4",
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
				"0x9a6e46ce3d38f326e440db8c4765c2e5b85272a1ec706fb1fb3c21251b9e13ff:log:481",
			hash: "0x9a6e46ce3d38f326e440db8c4765c2e5b85272a1ec706fb1fb3c21251b9e13ff",
			from: "0x22f9dcf4647084d6c31b2765f6910cd85c178c18",
			to: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			value: 0.036353938,
			erc721TokenId: null,
			erc1155Metadata: null,
			tokenId: null,
			asset: "SOL",
			category: "erc20",
			rawContract: {
				value: "0x022ab792",
				address: "0xd31a59c85ae9d8edefec411d448f90841571b89c",
				decimal: "0x9",
			},
			metadata: {
				blockTimestamp: "2024-11-25T08:12:47.000Z",
			},
		},
		{
			blockNum: "0x15cc896",
			uniqueId:
				"0x8c871ac11d0f07bdf78509cbcd1d3e6bd4b93e3bd7bdc99047d358a40ecc4612:log:303",
			hash: "0x8c871ac11d0f07bdf78509cbcd1d3e6bd4b93e3bd7bdc99047d358a40ecc4612",
			from: "0x74de5d4fcbf63e00296fd95d33236b9794016631",
			to: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			value: 3.159343,
			erc721TokenId: null,
			erc1155Metadata: null,
			tokenId: null,
			asset: "USDC",
			category: "erc20",
			rawContract: {
				value: "0x30352f",
				address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
				decimal: "0x6",
			},
			metadata: {
				blockTimestamp: "2025-07-06T04:48:11.000Z",
			},
		},
		{
			blockNum: "0x15ccb45",
			uniqueId:
				"0xba7f767fd210ca584e1aeb681ce217ccb60d8865a6b47dbe4d39ef15615e8d49:log:141",
			hash: "0xba7f767fd210ca584e1aeb681ce217ccb60d8865a6b47dbe4d39ef15615e8d49",
			from: "0x74de5d4fcbf63e00296fd95d33236b9794016631",
			to: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			value: 0.2199840734632359,
			erc721TokenId: null,
			erc1155Metadata: null,
			tokenId: null,
			asset: "WAVAX",
			category: "erc20",
			rawContract: {
				value: "0x030d8a596b05053f",
				address: "0x85f138bfee4ef8e540890cfb48f620571d67eda3",
				decimal: "0x12",
			},
			metadata: {
				blockTimestamp: "2025-07-06T07:06:23.000Z",
			},
		},
		{
			blockNum: "0x15d8c9a",
			uniqueId:
				"0x3f3e075af1586e20a0280f4129e2b91bfa19e53c80fee155a2bdca147809f295:log:126",
			hash: "0x3f3e075af1586e20a0280f4129e2b91bfa19e53c80fee155a2bdca147809f295",
			from: "0x74de5d4fcbf63e00296fd95d33236b9794016631",
			to: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
			value: 1.485587,
			erc721TokenId: null,
			erc1155Metadata: null,
			tokenId: null,
			asset: "USDT",
			category: "erc20",
			rawContract: {
				value: "0x16ab13",
				address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
				decimal: "0x6",
			},
			metadata: {
				blockTimestamp: "2025-07-13T05:05:59.000Z",
			},
		},
	] as AssetTransfersWithMetadataResult[];

	return (
		<div className="mx-auto flex flex-col">
			<DataTable columns={columns} data={assetTransfers ?? []} />
		</div>
	);
}
