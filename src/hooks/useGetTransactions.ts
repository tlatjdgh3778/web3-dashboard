import alchemy from "@/lib/alchemy";
import {
	AssetTransfersCategory,
	type AssetTransfersWithMetadataResult,
} from "alchemy-sdk";
import { useQuery } from "@tanstack/react-query";

async function fetchTransactions(address: string) {
	const response = await alchemy.core.getAssetTransfers({
		fromAddress: address,
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

export function useGetTransactions(address: string) {
	return useQuery({
		queryKey: ["sent-transfers", address],
		queryFn: async () => fetchTransactions(address),
		select: (data) => {
			const transfers = data as AssetTransfersWithMetadataResult[];

			transfers.sort((a, b) => {
				const blockDiff = Number(b.blockNum) - Number(a.blockNum);
				if (blockDiff !== 0) return blockDiff;
				return 0;
			});

			return transfers;
		},
	});
}
