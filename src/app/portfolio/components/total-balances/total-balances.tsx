import { TrendingDown, TrendingUp } from "lucide-react";
import type { OwnedToken } from "alchemy-sdk";

import { Skeleton } from "@/components/ui/skeleton";
import { mockTokenPrice } from "@/mock/data/mockTokenPrice";
import { getTokenPrices } from "@/utils/getTokenPrices";
import { getTotalWalletBalance } from "@/utils/getTotalWalletBalance";
import { mockTokenMarketData7d } from "@/mock/data/mockTokenMarketData";

export default function TotalBalances({
	walletBalances,
	isLoading,
}: {
	walletBalances: OwnedToken[] | undefined;
	isLoading: boolean;
}) {
	if (isLoading) {
		return (
			<div className="space-y-4">
				<Skeleton className="h-12 w-full" />
				<div className="grid grid-cols-2 gap-4">
					<Skeleton className="h-16 w-full" />
					<Skeleton className="h-16 w-full" />
				</div>
			</div>
		);
	}

	if (!walletBalances) {
		return <div>No data</div>;
	}

	const tokenPriceData = mockTokenPrice;

	/**
	 * Process the data to get the token prices
	 */
	const tokenPrices = getTokenPrices({
		walletBalances,
		tokenPriceData,
	});

	const tokenMarketData7d = mockTokenMarketData7d;

	/**
	 * Calculate the total change in 7 days
	 */
	const totalChange7d = tokenPrices.reduce((acc, token) => {
		const marketData = tokenMarketData7d.find(
			(data) => data.symbol === token.symbol?.toLowerCase(),
		);
		const change7dPercent =
			marketData?.price_change_percentage_7d_in_currency || 0;
		return (
			acc +
			(change7dPercent / 100) * Number(token.balance) * (token.usdValue || 0)
		);
	}, 0);

	/**
	 * Calculate the total balance
	 */
	const totalBalance = getTotalWalletBalance({ walletBalances: tokenPrices });

	/**
	 * Calculate the 7d change percentage
	 */
	const changePercentage7d =
		totalBalance > 0 ? (totalChange7d / totalBalance) * 100 : 0;
	const isPositive7d = totalChange7d >= 0;

	/**
	 * Calculate the total change in 24 hours
	 */
	const totalChange24h = tokenPrices.reduce((acc, token) => {
		return acc + (token.usd_24h_change || 0) * Number(token.balance);
	}, 0);

	/**
	 * Calculate the change percentage
	 */
	const changePercentage =
		totalBalance > 0 ? (totalChange24h / totalBalance) * 100 : 0;
	const isPositive = totalChange24h >= 0;

	return (
		<div className="space-y-6 flex items-center justify-between">
			{/* main balance */}
			<div className="space-y-2 flex flex-col items-start">
				<div className="flex items-center justify-center gap-2 text-muted-foreground">
					<span className="text-sm font-medium">Total Portfolio Value</span>
				</div>
				<div className="space-y-1">
					<h1 className="text-4xl font-bold text-foreground">
						$
						{totalBalance.toLocaleString("en-US", {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}
					</h1>
					<div
						className={`flex items-center justify-center gap-1 text-sm ${
							isPositive
								? "text-green-600 dark:text-green-400"
								: "text-red-600 dark:text-red-400"
						}`}
					>
						{isPositive ? (
							<TrendingUp className="h-4 w-4" />
						) : (
							<TrendingDown className="h-4 w-4" />
						)}
						<span className="font-bold">
							{isPositive ? "+" : ""}${totalChange24h.toFixed(2)} (
							{changePercentage.toFixed(2)}%)
						</span>
						<span className="text-muted-foreground">24h</span>
					</div>
				</div>
			</div>
			<div className="space-y-2 flex flex-col items-start">
				<div className="flex items-center justify-center gap-2 text-muted-foreground">
					<span className="text-sm font-medium">7d Change</span>
				</div>
				<div className="space-y-1">
					<span
						className={`font-medium text-foreground ${
							isPositive7d
								? "text-green-600 dark:text-green-400"
								: "text-red-600 dark:text-red-400"
						}`}
					>
						{isPositive7d ? "+" : "-"}
						{changePercentage7d.toFixed(1)}%
					</span>
				</div>
			</div>
		</div>
	);
}
