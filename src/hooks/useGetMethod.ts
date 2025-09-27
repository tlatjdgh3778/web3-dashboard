import alchemy from "@/lib/alchemy";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { TransactionResponse } from "alchemy-sdk";

async function fetchMethod(hash: string) {
	const response = await alchemy.transact.getTransaction(hash);
	return response;
}

const methodMap: Record<string, string> = {
	"0xa9059cbb": "transfer",
	"0x095ea7b3": "approve",
	"0x23b872dd": "transferFrom",
	"0x5f575529": "zap",
	"0x1249c58b": "mint",
	"0x42966c68": "burn",
};

function getTxTypeFromInput(input: string | undefined): string {
	if (!input || input === "0x") return "Transfer (ETH)";
	const selector = input.slice(0, 10).toLowerCase();
	return methodMap[selector] || "Contract Interaction";
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
