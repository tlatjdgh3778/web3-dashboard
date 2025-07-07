import type { WalletHistoryResponse } from "@/types/WalletHistory";
import { useQuery } from "@tanstack/react-query";

const MORALIS_API_KEY = process.env.NEXT_PUBLIC_MORALIS_API_KEY;

async function fetchWalletHistory(
	address: string,
): Promise<WalletHistoryResponse> {
	const res = await fetch(
		`https://deep-index.moralis.io/api/v2.2/wallets/${address}/history`,
		{
			headers: {
				"X-API-Key": MORALIS_API_KEY as string,
			},
		},
	);

	if (!res.ok) {
		throw new Error("Failed to fetch wallet history");
	}

	return res.json();
}

export function useGetWalletHistory(address: string) {
	return useQuery({
		queryKey: ["walletHistory", address],
		queryFn: () => fetchWalletHistory(address),
		enabled: !!address,
	});
}
