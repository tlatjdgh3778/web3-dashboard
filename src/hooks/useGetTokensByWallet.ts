import alchemy from "@/lib/alchemy";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import {
	BigNumber,
	Network,
	type GetTokensByWalletResponse,
} from "alchemy-sdk";
import { formatUnits } from "viem";

const SupportedNetworks = [
	Network.ETH_MAINNET,
	Network.OPT_MAINNET,
	Network.ARB_MAINNET,
	Network.BASE_MAINNET,
	Network.SOLANA_MAINNET,
];

function humanBalance(hexBalance: string, decimals = 18): string {
	const big = BigNumber.from(hexBalance);
	return formatUnits(big.toBigInt(), decimals);
}

export const useGetTokensByWallet = ({
	address,
	options,
}: {
	address: string;
	options?: UseQueryOptions<
		GetTokensByWalletResponse,
		Error,
		{
			tokens: GetTokensByWalletResponse["data"]["tokens"];
			networks: Network[];
		}
	>;
}) => {
	return useQuery({
		queryKey: ["tokens-by-wallet"],
		queryFn: () =>
			alchemy.portfolio.getTokensByWallet(
				[
					{
						address,
						networks: [...SupportedNetworks],
					},
				],
				true,
				true,
				true,
			),
		select: (data) => {
			return {
				tokens:
					data.data.tokens
						.filter(
							(token) =>
								token.tokenBalance !==
									"0x0000000000000000000000000000000000000000000000000000000000000000" &&
								token.tokenBalance !==
									"0x0000000000000000000000000000000000000000000000000000000000000001",
						)
						.map((token) => {
							if (!(token as any)?.tokenAddress) {
								return {
									...token,
									tokenMetadata: {
										decimals: 18,
										logo: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
										name: "Ethereum",
										symbol: "ETH",
									},
									tokenBalance: humanBalance(
										token.tokenBalance,
										token?.tokenMetadata?.decimals ?? 18,
									),
								};
							}
							return {
								...token,
								tokenBalance: humanBalance(
									token.tokenBalance,
									token?.tokenMetadata?.decimals ?? 18,
								),
							};
						}) || [],
				networks: [...new Set(data.data.tokens.map((token) => token.network))],
			};
		},
		enabled: !!address,
		...options,
	});
};
