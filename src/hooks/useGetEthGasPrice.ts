import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

interface EthGasPrice {
	SafeGasPrice: number;
	ProposeGasPrice: number;
	FastGasPrice: number;
}

export default function useGetEthGasPrice(): UseQueryResult<
	EthGasPrice,
	Error
> {
	const API_KEY = process.env.NEXT_PUBLIC_ETHSCAN_API_KEY;

	return useQuery({
		queryKey: ["ethGasPrice"],
		queryFn: async () => {
			const response = await fetch(
				`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${API_KEY}`,
			);
			const data = await response.json();
			return data.result;
		},
		refetchInterval: 60 * 1000 * 30,
	});
}
