import { useQuery } from "@tanstack/react-query";

import { PriceChangePercentage } from "@/types/PriceChangePercentage";

/**
 * @description get token market data
 * @param symbols token symbols
 * @returns token market data
 */
const getTokenMarketData = async ({
	symbols,
	time = PriceChangePercentage.ONE_DAY,
}: {
	symbols: string[];
	time?: PriceChangePercentage;
}) => {
	const response = await fetch(
		`https://pro-api.coingecko.com/api/v3/coins/markets?include_tokens=true&vs_currency=usd&symbols=${symbols.join(",")}&sparkline=true&price_change_percentage=${time}`,
		{
			cache: "force-cache",
			headers: {
				"x-cg-demo-api-key": process.env
					.NEXT_PUBLIC_COINGECKO_API_KEY as string,
			},
		},
	);
	const data = await response.json();
	return data;
};

export const useGetTokenMarketData = ({
	symbols,
	time = PriceChangePercentage.ONE_DAY,
}: {
	symbols: string[];
	time?: PriceChangePercentage;
}) => {
	return useQuery({
		queryKey: ["token-market-data", symbols, time],
		queryFn: () => getTokenMarketData({ symbols, time }),
		select: (data) => {
			return data;
		},
	});
};
