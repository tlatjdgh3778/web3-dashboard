"use client";

import type { AssetTransfersWithMetadataResult } from "alchemy-sdk";
import type { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/common/data-table/table-header";
import Timestamp from "@/components/common/timestamp";

import { TransactionHash } from "./transaction-hash";
import BlockNumber from "./block-number";
import FromAddress from "./from-address";
import ToAddress from "./to-address";
import Method from "./method";
import TokenFromMetadata from "./token-from-metadata";

export const columns: ColumnDef<AssetTransfersWithMetadataResult>[] = [
	{
		accessorKey: "hash",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Transaction Hash" />
		),
		cell: ({ row }) => <TransactionHash hash={row.original.hash ?? "N/A"} />,
		enableSorting: false,
		meta: {
			title: "Transaction Hash",
		},
	},
	{
		accessorKey: "uniqueId",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Method" />
		),
		cell: ({ row }) => <Method hash={row.original.hash} />,
		enableSorting: false,
		meta: {
			title: "Method",
		},
	},
	{
		accessorKey: "blockNum",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Block Number" />
		),
		cell: ({ row }) => (
			<BlockNumber block_number={row.original.blockNum as `0x${string}`} />
		),
		enableSorting: false,
		meta: {
			title: "Block Number",
		},
	},
	{
		accessorKey: "metadata.blockTimestamp",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Block Timestamp" />
		),
		cell: ({ row }) => (
			<Timestamp timestamp={row.original?.metadata.blockTimestamp} />
		),
		enableSorting: false,
		meta: {
			title: "Block Timestamp",
		},
	},
	{
		accessorKey: "from",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="From" />
		),
		cell: ({ row }) => (
			<FromAddress from_address={row.original?.from as string} />
		),
		enableSorting: false,
		meta: {
			title: "From",
		},
	},
	{
		accessorKey: "to",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="To" />
		),
		cell: ({ row }) => <ToAddress to_address={row.original?.to as string} />,
		enableSorting: false,
		meta: {
			title: "To",
		},
	},
	{
		accessorKey: "value",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Amount" />
		),
		cell: ({ row }) => {
			const value = row.original.value ?? 0;
			return (
				<div>
					{value.toFixed(2)} {row.original.asset}
				</div>
			);
		},
		enableSorting: false,
		meta: {
			title: "Amount",
		},
	},
	{
		accessorKey: "rawContract",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Token" />
		),
		cell: ({ row }) => {
			return (
				<TokenFromMetadata
					tokenAddress={row.original.rawContract.address || ""}
				/>
			);
		},
		enableSorting: false,
		meta: {
			title: "Token",
		},
	},
];
