"use client";

import { useAccount } from "wagmi";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AssetTransfersCategory } from "alchemy-sdk";

import { DataTable } from "@/components/common/data-table/data-table";
import { Button } from "@/components/ui/button";
import { useGetRecentTransactions } from "@/hooks/useGetRecentTransactions";
import TableLoadingSkeleton from "@/components/common/data-table/table-loading-skeleton";

import { columns } from "./columns";

export default function RecentTransactions() {
	const { address } = useAccount();

	const { data: assetTransfers, isPending } = useGetRecentTransactions({
		params: {
			toAddress: address as string,
			fromAddress: address as string,
			withMetadata: true,
			category: [
				AssetTransfersCategory.EXTERNAL,
				AssetTransfersCategory.INTERNAL,
				AssetTransfersCategory.ERC20,
				AssetTransfersCategory.ERC721,
				AssetTransfersCategory.ERC1155,
			],
		},
	});

	if (isPending) {
		return <TableLoadingSkeleton />;
	}

	return (
		<div className="mx-auto flex flex-col">
			<DataTable columns={columns} data={assetTransfers ?? []} />

			<div className="mt-4 flex justify-end">
				<Link href="/transactions" passHref>
					<Button
						variant="outline"
						size="sm"
						className="flex items-center gap-1 cursor-pointer"
					>
						View All Transactions
						<ArrowRight className="h-4 w-4" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
