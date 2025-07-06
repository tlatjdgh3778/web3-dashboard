import type { ERC20TokenResponse } from "@/types/ERC20Token";
import { useQuery } from "@tanstack/react-query";

const MORALIS_API_KEY = process.env.NEXT_PUBLIC_MORALIS_API_KEY;

async function fetchERC20Tokens(address: string): Promise<ERC20TokenResponse> {
	const res = await fetch(
		`https://deep-index.moralis.io/api/v2.2/${address}/erc20`,
		{
			headers: {
				"X-API-Key": MORALIS_API_KEY as string,
			},
		},
	);

	if (!res.ok) {
		throw new Error("Failed to fetch ERC20 balances");
	}

	return res.json();
}

export function useGetERC20Tokens(address: string) {
	return useQuery({
		queryKey: ["erc20Tokens", address],
		queryFn: () => fetchERC20Tokens(address),
		enabled: !!address,
	});
}
