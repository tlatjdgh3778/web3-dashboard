import { useQueries } from "@tanstack/react-query";
import { Utils } from "alchemy-sdk";
import type { GetTokensForOwnerResponse, OwnedToken } from "alchemy-sdk";

import alchemy from "@/lib/alchemy";

/**
 * @description get native token balance of a wallet
 * @param address wallet address
 * @returns native token balance
 */
async function fetchBalance(address: string) {
	const response = await alchemy.core.getBalance(address);

	return response;
}

/**
 * @description get erc20 token balances of a wallet
 * @param address wallet address
 * @returns token balances
 */
async function fetchTokensForOwner(address: string) {
	const response = await alchemy.core.getTokensForOwner(address);
	return response;
}

export const useGetTotalBalances = ({ address }: { address: string }) => {
	return useQueries({
		queries: [
			{
				queryKey: ["balance", address],
				queryFn: () => fetchBalance(address),
				staleTime: 5 * 60 * 1000,
				select: (data) => {
					return Utils.formatEther(data as unknown as `0x${string}`);
				},
			},
			{
				queryKey: ["tokenBalances", address],
				queryFn: () => fetchTokensForOwner(address),
				staleTime: 5 * 60 * 1000,
				select: (data) => {
					const tokens = data as GetTokensForOwnerResponse;
					return tokens.tokens;
				},
			},
		],
		combine: (data) => {
			const balance = data[0];
			const tokens = data[1];

			const nativeBalance = {
				name: "Ether",
				symbol: "ETH",
				logo: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
				balance: balance.data,
				rawBalance: Utils.parseEther(balance.data as unknown as `0x${string}`)
					._hex,
				contractAddress: "0x0000000000000000000000000000000000000000",
				decimals: 18,
			} as OwnedToken;

			const tokenBalances = [...(tokens?.data ?? []), nativeBalance];

			const isLoading = data.some((item) => item.isLoading);

			return { data: tokenBalances, isLoading };
		},
	});
};
