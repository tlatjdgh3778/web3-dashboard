import alchemy from "@/lib/alchemy";
import {
	type AssetTransfersWithMetadataResponse,
	type AssetTransfersWithMetadataParams,
	SortingOrder,
	AssetTransfersCategory,
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
 * @description get asset transfers
 * @param params asset transfers params
 * @param options query options
 * @returns asset transfers
 */
export const useGetRecentTransactions = ({
	params,
}: {
	params?: AssetTransfersWithMetadataParams;
}) => {
	return useQueries({
		queries: [
			{
				queryKey: ["asset-transfers-in", params],
				queryFn: () =>
					fetchAssetTransfers({
						params: {
							...params,
							toAddress: params?.toAddress,
							fromAddress: undefined,
							withMetadata: true,
							order: SortingOrder.DESCENDING,
							category: [
								AssetTransfersCategory.EXTERNAL,
								AssetTransfersCategory.INTERNAL,
								AssetTransfersCategory.ERC20,
								AssetTransfersCategory.ERC721,
								AssetTransfersCategory.ERC1155,
							],
						},
					}),
				select: (data: AssetTransfersWithMetadataResponse) => {
					return data.transfers;
				},
			},
			{
				queryKey: ["asset-transfers-out", params],
				queryFn: () =>
					fetchAssetTransfers({
						params: {
							...params,
							fromAddress: params?.fromAddress,
							toAddress: undefined,
							withMetadata: true,
							order: SortingOrder.DESCENDING,
							category: [
								AssetTransfersCategory.EXTERNAL,
								AssetTransfersCategory.INTERNAL,
								AssetTransfersCategory.ERC20,
								AssetTransfersCategory.ERC721,
								AssetTransfersCategory.ERC1155,
							],
						},
					}),
				select: (data: AssetTransfersWithMetadataResponse) => {
					return data.transfers;
				},
			},
		],
		combine: (results) => {
			const inTransfers = results[0].data || [];
			const outTransfers = results[1].data || [];
			const sortedTransfers = [...inTransfers, ...outTransfers].sort((a, b) => {
				return (
					new Date(b.metadata.blockTimestamp).getTime() -
					new Date(a.metadata.blockTimestamp).getTime()
				);
			});
			return {
				data: sortedTransfers.slice(0, 5),
				isPending: results.some((result) => result.isPending),
			};
		},
	});
};
