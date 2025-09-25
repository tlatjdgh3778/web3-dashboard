import type { OwnedToken } from "alchemy-sdk";

import { useGetTokenPrice } from "@/hooks/useGetTokenPrice";

export const useGetTokenPricesFromWalletBalances = ({
	walletBalances,
}: {
	walletBalances: OwnedToken[];
}) => {
	const symbols = walletBalances
		?.map((token) => token.symbol?.toLowerCase())
		.filter(Boolean) as string[];

	const { data: tokenPriceData, isLoading: isTokenQuotesLoading } =
		useGetTokenPrice({
			symbols,
		});

	return {
		tokenPriceData,
		isTokenQuotesLoading,
	};
};
