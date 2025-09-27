"use client";

import { useAccount } from "wagmi";
import { AssetTransfersCategory } from "alchemy-sdk";

import { DataTable } from "@/components/common/data-table/data-table";
import TableLoadingSkeleton from "@/components/common/data-table/table-loading-skeleton";
import { useGetTransactions } from "@/hooks/useGetTransactions";

import { columns } from "./columns";

export default function InternalTransactions() {
	const { address } = useAccount();

	const { data: assetTransfers, isLoading } = useGetTransactions({
		params: {
			toAddress: address as string,
			category: [AssetTransfersCategory.INTERNAL],
			withMetadata: true,
		},
	});

	if (isLoading) {
		return <TableLoadingSkeleton />;
	}

	return (
		<div className="mx-auto flex flex-col">
			<DataTable columns={columns} data={assetTransfers ?? []} />
		</div>
	);
}
