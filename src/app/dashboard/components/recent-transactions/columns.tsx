"use client";

import { DataTableColumnHeader } from "@/components/common/data-table/table-header";
import type { WalletHistory } from "@/types/WalletHistory";
import type { ColumnDef } from "@tanstack/react-table";
import { TransactionHash } from "./transaction-hash";

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
		enableSorting: false,
	},
	{
		accessorKey: "from_address",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="From" />
		),
		enableSorting: false,
	},
	{
		accessorKey: "to_address",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="To" />
		),
		enableSorting: false,
	},
];
