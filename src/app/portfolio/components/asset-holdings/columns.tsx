import type { GetTokensByWalletResponse } from "alchemy-sdk";
import type { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/common/data-table/table-header";

import Token from "./token";
import Balance from "./balance";
import Price24h from "./24h-price";

export const columns: ColumnDef<
	GetTokensByWalletResponse["data"]["tokens"][number] & {
		price_change_percentage_24h: number;
		current_price: number;
	}
>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Token" />
		),
		cell: ({ row }) => <Token token={row.original.tokenMetadata} />,
		enableSorting: false,
	},
	{
		accessorKey: "price_change_percentage_24h",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="24h Price Change" />
		),
		cell: ({ row }) => (
			<Price24h
				change={row.original.price_change_percentage_24h}
				price={row.original.current_price}
			/>
		),
		enableSorting: false,
	},
	{
		accessorKey: "tokenBalance",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Balance" />
		),
		cell: ({ row }) => (
			<Balance
				balance={row.original.tokenBalance}
				price={row.original.tokenPrices}
				symbol={row.original.tokenMetadata?.symbol || ""}
			/>
		),
		enableSorting: false,
	},
];
