"use client";

import type { AssetTransfersWithMetadataResult } from "alchemy-sdk";
import { DataTable } from "@/components/common/data-table/data-table";

import { columns } from "./columns";

export default function InternalTransactions() {
	// const { address } = useAccount();

	// const { data: assetTransfers, isLoading } = useGetAssetTransfers({
	// 	params: {
	// 		toAddress: address as string,
	// 		category: [AssetTransfersCategory.INTERNAL],
	// 		withMetadata: true,
	// 		order: SortingOrder.DESCENDING,
	// 	},
	// });

	const internalTransactions = [
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
	] as AssetTransfersWithMetadataResult[];

	return (
		<div className="mx-auto flex flex-col">
			<DataTable columns={columns} data={internalTransactions ?? []} />
		</div>
	);
}
