"use client";

import type { AssetTransfersWithMetadataResult } from "alchemy-sdk";
import type { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/common/data-table/table-header";
import Timestamp from "@/components/common/timestamp";

import { TransactionHash } from "./transaction-hash";
import FromAddress from "./from-address";
import ToAddress from "./to-address";
import BlockNumber from "./block-number";
import TxFee from "./tx-fee";
import Category from "./category";

export const columns: ColumnDef<AssetTransfersWithMetadataResult>[] = [
	{
		accessorKey: "hash",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Transaction Hash" />
		),
		cell: ({ row }) => <TransactionHash hash={row.original.hash ?? "N/A"} />,
		enableSorting: false,
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
	},
	{
		accessorKey: "category",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Category" />
		),
		cell: ({ row }) => <Category category={row.original.category} />,
		enableSorting: false,
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
	},
	{
		accessorKey: "to",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="To" />
		),
		cell: ({ row }) => <ToAddress to_address={row.original?.to as string} />,
		enableSorting: false,
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
	},
	{
		accessorKey: "txFee",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Tx Fee" />
		),
		cell: ({ row }) => <TxFee hash={row.original.hash} />,
		enableSorting: false,
	},
];
