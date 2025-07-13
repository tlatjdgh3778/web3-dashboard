import type { WalletBalance } from "@/types/WalletBalance";
import type { TokenPrice } from "@/types/TokenPrice";
import type { OwnedToken } from "alchemy-sdk";

export const getTokenPrices = ({
	walletBalances,
	tokenPriceData,
}: {
	walletBalances?: OwnedToken[];
	tokenPriceData?: TokenPrice;
}) => {
	if (!walletBalances || !tokenPriceData) {
		return [];
	}
	const tokenPrices = walletBalances.map((token) => {
		const tokenPrice =
			tokenPriceData[
				token.symbol?.toLocaleLowerCase() as keyof typeof tokenPriceData
			];
		return {
			usdValue: tokenPrice?.usd * Number(token.balance) || 0,
			balance: token.balance,
			symbol: token.symbol,
			name: token.name,
			logo: token.logo,
			usd_24h_change: tokenPrice?.usd_24h_change || 0,
			usd_24h_vol: tokenPrice?.usd_24h_vol || 0,
			usd_market_cap: tokenPrice?.usd_market_cap || 0,
		};
	});
	return tokenPrices as WalletBalance[];
};
