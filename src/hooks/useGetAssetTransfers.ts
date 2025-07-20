import alchemy from "@/lib/alchemy";
import type {
	AssetTransfersWithMetadataResponse,
	AssetTransfersWithMetadataResult,
	AssetTransfersWithMetadataParams,
} from "alchemy-sdk";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

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
export const useGetAssetTransfers = ({
	params,
	options,
}: {
	params: AssetTransfersWithMetadataParams;
	options?: UseQueryOptions<
		AssetTransfersWithMetadataResponse,
		Error,
		AssetTransfersWithMetadataResult[]
	>;
}) => {
	return useQuery({
		queryKey: ["asset-transfers", params],
		queryFn: () => fetchAssetTransfers({ params }),
		select: (data) => {
			return data.transfers;
		},
		...options,
	});
};
