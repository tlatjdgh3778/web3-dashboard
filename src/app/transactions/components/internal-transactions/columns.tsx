"use client";

import type { AssetTransfersWithMetadataResult } from "alchemy-sdk";
import type { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/common/data-table/table-header";
import Timestamp from "@/components/common/timestamp";
import TransactionHash from "@/components/common/data-table-column/transaction-hash";
import Method from "@/components/common/data-table-column/method";
import BlockNumber from "@/components/common/data-table-column/block-number";
import FromAddress from "@/components/common/data-table-column/from-address";
import ToAddress from "@/components/common/data-table-column/to-address";

export const columns: ColumnDef<AssetTransfersWithMetadataResult>[] = [
	{
		accessorKey: "hash",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Parent Transaction Hash" />
		),
		cell: ({ row }) => <TransactionHash hash={row.original.hash ?? "N/A"} />,
		enableSorting: false,
		meta: {
			title: "Parent Transaction Hash",
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
];
