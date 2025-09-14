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
 * @description get ERC20 transfers
 * @param params ERC20 transfers params
 * @param options query options
 * @returns ERC20 transfers
 */
export const useGetERC20Transfers = ({
	params,
}: {
	params: AssetTransfersWithMetadataParams;
}) => {
	return useQueries({
		queries: [
			{
				queryKey: ["erc20-transfers-in", params],
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
				queryKey: ["erc20-transfers-out", params],
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
			const inTransfers = results[0].data || [];
			const outTransfers = results[1].data || [];
			const sortedTransfers = [...inTransfers, ...outTransfers].sort((a, b) => {
				return (
					new Date(b.metadata.blockTimestamp).getTime() -
					new Date(a.metadata.blockTimestamp).getTime()
				);
			});
			return {
				data: sortedTransfers,
				isPending: results.some((result) => result.isPending),
			};
		},
	});
};
