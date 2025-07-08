"use client";

import { DataTableColumnHeader } from "@/components/common/data-table/table-header";
import type { WalletHistory } from "@/types/WalletHistory";
import type { ColumnDef } from "@tanstack/react-table";

import { TransactionHash } from "./transaction-hash";
import Method from "./method";
import FromAddress from "./from-address";
import ToAddress from "./to-address";
import Timestamp from "@/components/common/timestamp";

export const columns: ColumnDef<WalletHistory>[] = [
	{
		accessorKey: "hash",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Transaction Hash" />
		),
		cell: ({ row }) => <TransactionHash hash={row.original.hash ?? "N/A"} />,
		enableSorting: false,
	},
	{
		accessorKey: "method_label",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Method" />
		),
		cell: ({ row }) => <Method method={row.original.method_label ?? "N/A"} />,
		enableSorting: false,
	},
	{
		accessorKey: "from_address",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="From" />
		),
		cell: ({ row }) => (
			<FromAddress
				from_address={row.original?.from_address as string}
				from_address_label={row.original?.from_address_label ?? undefined}
			/>
		),
		enableSorting: false,
	},
	{
		accessorKey: "to_address",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="To" />
		),
		cell: ({ row }) => (
			<ToAddress
				to_address={row.original?.to_address as string}
				to_address_label={row.original?.to_address_label ?? undefined}
			/>
		),
		enableSorting: false,
	},
	{
		accessorKey: "block_timestamp",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Block Timestamp" />
		),
		cell: ({ row }) => <Timestamp timestamp={row.original?.block_timestamp} />,
		enableSorting: false,
	},
];
