import alchemy from "@/lib/alchemy";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { Utils, type BigNumber } from "alchemy-sdk";

async function fetchBalance(address: string) {
	const response = await alchemy.core.getBalance(address);

	return response;
}

/**
 * @description get balance
 * @param address wallet address
 * @param options query options
 * @returns token balances
 */
export const useGetBalance = ({
	address,
	options,
}: {
	address: string;
	options?: UseQueryOptions<BigNumber, Error, string>;
}) => {
	return useQuery({
		queryKey: ["balance", address],
		queryFn: () => fetchBalance(address),
		staleTime: 5 * 60 * 1000,
		select: (data) => {
			return Utils.formatEther(data._hex);
		},
		...options,
	});
};
