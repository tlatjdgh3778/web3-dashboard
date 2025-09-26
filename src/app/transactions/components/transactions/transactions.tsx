"use client";

import { useAccount } from "wagmi";
import { AssetTransfersCategory } from "alchemy-sdk";

import { DataTable } from "@/components/common/data-table/data-table";

import { columns } from "./columns";
import { useGetTransactions } from "@/hooks/useGetTransactions";
import TableLoadingSkeleton from "@/components/common/data-table/table-loading-skeleton";

export default function Transactions() {
	const { address } = useAccount();

	const { data: transactions, isLoading } = useGetTransactions({
		params: {
			toAddress: address as string,
			category: [
				AssetTransfersCategory.EXTERNAL,
				AssetTransfersCategory.INTERNAL,
				AssetTransfersCategory.ERC20,
				AssetTransfersCategory.ERC721,
				AssetTransfersCategory.ERC1155,
			],
			withMetadata: true,
		},
	});

	if (isLoading) {
		return <TableLoadingSkeleton />;
	}

	return (
		<div className="mx-auto flex flex-col">
			<DataTable columns={columns} data={transactions ?? []} />
		</div>
	);
}
