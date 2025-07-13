// import { DataTable } from "@/components/common/data-table/data-table";

// import { AssetTransfersCategory } from "alchemy-sdk";
import { DataTable } from "@/components/common/data-table/data-table";
// import { useAccount } from "wagmi";

// import { useGetAssetTransfers } from "@/hooks/useGetAssetTransfers";
import { mockRecentTransaction } from "@/mock/data/mockRecentTransaction";

import { columns } from "./columns";

// import { columns } from "./columns";

export default function RecentTransactions() {
	// const { address } = useAccount();
	// const data = mockWalletHistory.result ?? [];

	// const { data: assetTransfers, isLoading } = useGetAssetTransfers({
	// 	params: {
	// 		fromAddress: address as string,
	// 		category: [
	// 			AssetTransfersCategory.EXTERNAL,
	// 			AssetTransfersCategory.INTERNAL,
	// 			AssetTransfersCategory.ERC20,
	// 			AssetTransfersCategory.ERC721,
	// 			AssetTransfersCategory.ERC1155,
	// 		],
	// 		withMetadata: true,
	// 		maxCount: 5,
	// 	},
	// });
	const recentTransaction = mockRecentTransaction;

	// console.log(isLoading);
	return (
		<div className="mx-auto">
			<DataTable columns={columns} data={recentTransaction} />
		</div>
	);
}
