import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { TokenMetadataResponse } from "alchemy-sdk";

import alchemy from "@/lib/alchemy";

const getTokenMetadata = async (tokenAddress: string) => {
	const tokenMetadata = await alchemy.core.getTokenMetadata(tokenAddress);
	return tokenMetadata;
};

// token logo..etc
export const useGetTokenMetadata = ({
	tokenAddress,
	options,
}: {
	tokenAddress: string;
	options?: UseQueryOptions<TokenMetadataResponse, Error>;
}) => {
	return useQuery({
		queryKey: ["tokenMetadata", tokenAddress],
		queryFn: () => getTokenMetadata(tokenAddress),
		staleTime: Infinity,
		...options,
	});
};
