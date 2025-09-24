import type { OwnedToken } from "alchemy-sdk";

import { useGetTokenMarketData } from "@/hooks/useGetTokenMarketData";
import type { TokenMarketData } from "@/types/TokenMarketData";
import type { WalletBalance } from "@/types/WalletBalance";
import { PriceChangePercentage } from "@/types/PriceChangePercentage";

export const useGet7dTokenData = ({
	totalBalance,
	tokenPrices,
	walletBalances,
}: {
	totalBalance: number;
	tokenPrices: WalletBalance[];
	walletBalances: OwnedToken[];
}) => {
	const symbols = walletBalances
		?.map((token) => token.symbol)
		.filter(Boolean) as string[];

	const { data: tokenMarketData7d, isPending } = useGetTokenMarketData({
		symbols,
		time: PriceChangePercentage.ONE_WEEK,
	});

	const totalChange7d = tokenPrices.reduce((acc, token) => {
		const marketData = tokenMarketData7d?.find(
			(data: TokenMarketData) => data.symbol === token.symbol?.toLowerCase(),
		);

		const change7dPercent =
			marketData?.price_change_percentage_7d_in_currency || 0;

		const tokenChange =
			(change7dPercent / 100) * Number(token.balance) * (token.usdValue || 0);

		return acc + tokenChange;
	}, 0);

	const changePercentage7d =
		totalBalance > 0 ? (totalChange7d / totalBalance) * 100 : 0;
	const isPositive7d = totalChange7d >= 0;

	const formattedPercentage =
		Math.abs(changePercentage7d) < 0.1
			? Math.abs(changePercentage7d).toFixed(2)
			: Math.abs(changePercentage7d).toFixed(1);

	return {
		changePercentage7d: formattedPercentage,
		isPositive7d,
		isPending,
	};
};
