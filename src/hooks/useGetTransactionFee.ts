import alchemy from "@/lib/alchemy";
import {
	type UseSuspenseQueryOptions,
	useSuspenseQuery,
} from "@tanstack/react-query";
import type { BigNumber, TransactionReceipt } from "alchemy-sdk";

async function fetchTransactionReceipt(hash: string) {
	const response = await alchemy.core.getTransactionReceipt(hash);
	return response;
}

export function useGetTransactionFee({
	hash,
	option,
}: {
	hash: string;
	option?: UseSuspenseQueryOptions<
		TransactionReceipt | null,
		Error,
		{ txFeeWei: BigNumber; txFeeEth: number } | null
	>;
}) {
	return useSuspenseQuery({
		queryKey: ["transaction-fee", hash],
		queryFn: () => fetchTransactionReceipt(hash),
		select: (data) => {
			if (!data) return null;
			const gasUsed = data.gasUsed;
			const gasPrice = data.effectiveGasPrice;

			const txFeeWei = gasUsed.mul(gasPrice);
			const txFeeEth = Number(txFeeWei) / 1e18;

			return {
				txFeeWei,
				txFeeEth,
			};
		},
		...option,
	});
}
