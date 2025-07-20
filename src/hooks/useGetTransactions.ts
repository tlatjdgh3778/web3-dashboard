import alchemy from "@/lib/alchemy";
import {
	AssetTransfersCategory,
	type AssetTransfersWithMetadataParams,
	type AssetTransfersWithMetadataResult,
} from "alchemy-sdk";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

async function fetchTransactions(params: AssetTransfersWithMetadataParams) {
	const response = await alchemy.core.getAssetTransfers({
		...params,
		category: [
			AssetTransfersCategory.EXTERNAL,
			AssetTransfersCategory.INTERNAL,
			AssetTransfersCategory.ERC20,
			AssetTransfersCategory.ERC721,
			AssetTransfersCategory.ERC1155,
			AssetTransfersCategory.SPECIALNFT,
		],
		withMetadata: true,
	});

	return response.transfers;
}

export function useGetTransactions({
	params,
	options,
}: {
	params: AssetTransfersWithMetadataParams;
	options?: UseQueryOptions<AssetTransfersWithMetadataResult[], Error>;
}) {
	return useQuery({
		queryKey: ["sent-transfers", params],
		queryFn: async () => fetchTransactions(params),
		select: (data) => {
			const transfers = data as AssetTransfersWithMetadataResult[];

			transfers.sort((a, b) => {
				const blockDiff = Number(b.blockNum) - Number(a.blockNum);
				if (blockDiff !== 0) return blockDiff;
				return 0;
			});

			return transfers;
		},
		...options,
	});
}
