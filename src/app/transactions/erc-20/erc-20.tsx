"use client";

import type { AssetTransfersWithMetadataResult } from "alchemy-sdk";
import { DataTable } from "@/components/common/data-table/data-table";

import { columns } from "./columns";

export default function Erc20() {
	// const { address } = useAccount();

	// const { data: erc20transfers, isPending } = useGetERC20Transfers({
	// 	params: {
	// 		toAddress: address as string,
	// 		fromAddress: address as string,
	// 		withMetadata: true,
	// 		category: [AssetTransfersCategory.ERC20],
	// 	},
	// });

	const erc20transfers = [
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
			category: "erc20",
			rawContract: {
				value: "0x16e360",
				address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
				decimal: "0x6",
			},
			metadata: {
				blockTimestamp: "2025-07-13T05:05:59.000Z",
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
			category: "erc20",
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
	] as AssetTransfersWithMetadataResult[];

	// if (isPending) {
	// 	return <div>Loading...</div>;
	// }
	return (
		<div className="mx-auto flex flex-col">
			<DataTable columns={columns} data={erc20transfers ?? []} />
		</div>
	);
}
