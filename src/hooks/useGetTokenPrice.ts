import { useQuery } from "@tanstack/react-query";

/**
 * @description get token price
 * @param symbols token symbols
 * @returns token price
 */
const getTokenPrice = async ({ symbols }: { symbols: string[] }) => {
	const response = await fetch(
		`https://api.coingecko.com/api/v3/simple/price?include_tokens=true&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&vs_currencies=usd&symbols=${symbols.join(",")}`,
		{
			headers: {
				"x-cg-demo-api-key": process.env
					.NEXT_PUBLIC_COINGECKO_API_KEY as string,
			},
		},
	);
	const data = await response.json();
	return data;
};

export const useGetTokenPrice = ({ symbols }: { symbols: string[] }) => {
	return useQuery({
		queryKey: ["token-quotes", symbols],
		queryFn: () => getTokenPrice({ symbols }),
		select: (data) => {
			return data;
		},
	});
};
