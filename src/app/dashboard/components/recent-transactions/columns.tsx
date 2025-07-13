"use client";

import { DataTableColumnHeader } from "@/components/common/data-table/table-header";
import type { ColumnDef } from "@tanstack/react-table";

import { TransactionHash } from "./transaction-hash";

import FromAddress from "./from-address";
import ToAddress from "./to-address";
import Timestamp from "@/components/common/timestamp";
import type { AssetTransfersWithMetadataResult } from "alchemy-sdk";

export const columns: ColumnDef<AssetTransfersWithMetadataResult>[] = [
	{
		accessorKey: "hash",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Transaction Hash" />
		),
		cell: ({ row }) => <TransactionHash hash={row.original.hash ?? "N/A"} />,
		enableSorting: false,
	},
	// {
	// 	accessorKey: "method_label",
	// 	header: ({ column }) => (
	// 		<DataTableColumnHeader column={column} title="Method" />
	// 	),
	// 	cell: ({ row }) => <Method method={row.original.method_label ?? "N/A"} />,
	// 	enableSorting: false,
	// },
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
		accessorKey: "metadata.blockTimestamp",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Block Timestamp" />
		),
		cell: ({ row }) => (
			<Timestamp timestamp={row.original?.metadata.blockTimestamp} />
		),
		enableSorting: false,
	},
];
