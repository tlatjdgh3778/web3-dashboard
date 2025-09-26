"use client";

import type { AssetTransfersWithMetadataResult } from "alchemy-sdk";
import type { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/common/data-table/table-header";
import Timestamp from "@/components/common/timestamp";
import TransactionHash from "@/components/common/data-table-column/transaction-hash";
import BlockNumber from "@/components/common/data-table-column/block-number";
import Method from "@/components/common/data-table-column/method";
import Category from "@/components/common/data-table-column/category";
import FromAddress from "@/components/common/data-table-column/from-address";
import ToAddress from "@/components/common/data-table-column/to-address";
import TxFee from "@/components/common/data-table-column/tx-fee";

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
		accessorKey: "category",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Category" />
		),
		cell: ({ row }) => <Category category={row.original.category} />,
		enableSorting: false,
		meta: {
			title: "Category",
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
		accessorKey: "txFee",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Tx Fee" />
		),
		cell: ({ row }) => <TxFee hash={row.original.hash} />,
		enableSorting: false,
		meta: {
			title: "Tx Fee",
		},
	},
];
