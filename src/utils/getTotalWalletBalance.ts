import type { WalletBalance } from "@/types/WalletBalance";

export const getTotalWalletBalance = ({
	walletBalances,
}: {
	walletBalances?: WalletBalance[];
}) => {
	if (!walletBalances) {
		return 0;
	}

	const totalUsdValue = walletBalances.reduce((acc, token) => {
		return acc + Number(token.usdValue);
	}, 0);

	return totalUsdValue;
};
