import { Badge } from "@/components/ui/badge";
// import { useGetTransactionMethod } from "@/hooks/useGetMethod";
import { mockTransaction } from "@/mock/data/mockTransaction";

export default function Method({ hash }: { hash: string }) {
	// const { data: transaction } = useGetTransactionMethod({ hash: method });

	// console.log(transaction);
	// const transaction = mockTransaction;
	const transaction = mockTransaction[hash as keyof typeof mockTransaction];

	const methodMap: Record<string, string> = {
		"0xa9059cbb": "Transfer",
		"0x095ea7b3": "Approve",
		"0x23b872dd": "Transfer From",
		"0x5f575529": "Swap",
		"0x1249c58b": "Mint",
		"0x42966c68": "Burn",
	};

	function getTxTypeFromInput(input: string | undefined): string {
		if (!input || input === "0x") return "Transfer";
		const selector = input.slice(0, 10).toLowerCase();
		return methodMap[selector] || selector;
	}

	// console.log(getTxTypeFromInput(transaction.input));
	return (
		<Badge variant="outline">{getTxTypeFromInput(transaction.input)}</Badge>
	);
}
