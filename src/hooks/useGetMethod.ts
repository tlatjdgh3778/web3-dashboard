import alchemy from "@/lib/alchemy";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { TransactionResponse } from "alchemy-sdk";

async function fetchMethod(hash: string) {
	const response = await alchemy.transact.getTransaction(hash);
	return response;
}

const methodMap: Record<string, string> = {
	"0xa9059cbb": "Transfer",
	"0x095ea7b3": "Approve",
	"0x23b872dd": "Transfer From",
	"0x5f575529": "Swap",
	"0x1249c58b": "Mint",
	"0x42966c68": "Burn",
};

function getTxTypeFromInput(input: string | undefined): string {
	if (!input || input === "0x") return "Transfer (ETH)";
	const selector = input.slice(0, 10).toLowerCase();
	return methodMap[selector] || input.slice(0, 10);
}

export const useGetTransactionMethod = ({
	hash,
	options,
}: {
	hash: string;
	options?: UseQueryOptions<TransactionResponse | null, Error, string | null>;
}) => {
	return useQuery({
		queryKey: ["transaction", hash],
		queryFn: () => fetchMethod(hash),
		select: (data) => {
			if (!data) return null;
			return getTxTypeFromInput(data.data);
		},
		enabled: !!hash,
		...options,
	});
};
