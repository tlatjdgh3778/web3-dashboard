"use client";

import { AssetTransfersCategory } from "alchemy-sdk";
import { useAccount } from "wagmi";

import { DataTable } from "@/components/common/data-table/data-table";
import TableLoadingSkeleton from "@/components/common/data-table/table-loading-skeleton";
import { useGetERC20Transactions } from "@/hooks/useGetERC20Transactions";

import { columns } from "./columns";

export default function Erc20() {
	const { address } = useAccount();

	const { data: erc20transfers, isPending } = useGetERC20Transactions({
		params: {
			toAddress: address as string,
			fromAddress: address as string,
			withMetadata: true,
			category: [AssetTransfersCategory.ERC20],
		},
	});

	if (isPending) {
		return <TableLoadingSkeleton />;
	}

	return (
		<div className="mx-auto flex flex-col">
			<DataTable columns={columns} data={erc20transfers ?? []} />
		</div>
	);
}
