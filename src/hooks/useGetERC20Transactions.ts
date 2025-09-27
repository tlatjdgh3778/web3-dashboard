import alchemy from "@/lib/alchemy";
import {
	type AssetTransfersWithMetadataResponse,
	type AssetTransfersWithMetadataParams,
	AssetTransfersCategory,
	SortingOrder,
} from "alchemy-sdk";
import { useQueries } from "@tanstack/react-query";

async function fetchAssetTransfers({
	params,
}: {
	params: AssetTransfersWithMetadataParams;
}) {
	const response = await alchemy.core.getAssetTransfers(params);

	return response;
}

/**
 * @description get ERC20 transactions
 * @param params ERC20 transactions params
 * @param options query options
 * @returns ERC20 transactions
 */
export const useGetERC20Transactions = ({
	params,
}: {
	params: AssetTransfersWithMetadataParams;
}) => {
	return useQueries({
		queries: [
			{
				queryKey: ["erc20-transactions-in", params],
				queryFn: () =>
					fetchAssetTransfers({
						params: {
							...params,
							category: [AssetTransfersCategory.ERC20],
							toAddress: params.toAddress,
							fromAddress: undefined,
							withMetadata: true,
							order: SortingOrder.DESCENDING,
						},
					}),
				select: (data: AssetTransfersWithMetadataResponse) => {
					return data.transfers;
				},
			},
			{
				queryKey: ["erc20-transactions-out", params],
				queryFn: () =>
					fetchAssetTransfers({
						params: {
							...params,
							category: [AssetTransfersCategory.ERC20],
							fromAddress: params.fromAddress,
							toAddress: undefined,
							withMetadata: true,
							order: SortingOrder.DESCENDING,
						},
					}),
				select: (data: AssetTransfersWithMetadataResponse) => {
					return data.transfers;
				},
			},
		],
		combine: (results) => {
			const inTransactions = results[0].data || [];
			const outTransactions = results[1].data || [];
			const sortedTransactions = [...inTransactions, ...outTransactions].sort(
				(a, b) => {
					return (
						new Date(b.metadata.blockTimestamp).getTime() -
						new Date(a.metadata.blockTimestamp).getTime()
					);
				},
			);
			return {
				data: sortedTransactions,
				isPending: results.some((result) => result.isPending),
			};
		},
	});
};
