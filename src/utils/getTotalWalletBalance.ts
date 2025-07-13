import type { WalletBalance } from "@/types/WalletBalance";

export const getTotalWalletBalance = ({
	walletBalances,
}: {
	walletBalances?: WalletBalance[];
}) => {
	if (!walletBalances) {
		return 0;
	}

	const totalBalance = walletBalances.reduce((acc, token) => {
		return acc + Number(token.balance);
	}, 0);

	return totalBalance;
};
