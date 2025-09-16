"use client";

import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

import TokenAvatar from "@/components/common/token-avatar";
import { getTotalWalletBalance } from "@/utils/getTotalWalletBalance";
import { getTokenPrices } from "@/utils/getTokenPrices";

import { useGetTotalBalances } from "@/hooks/useGetTotalBalances";
import { useGetTokenPrice } from "@/hooks/useGetTokenPrice";
import { useAccount } from "wagmi";
// import { useGetTokenPrice } from "@/hooks/useGetTokenPrice";

export function TotalBalances() {
	const { address } = useAccount();

	const { data: walletBalances, isLoading } = useGetTotalBalances({
		address: address as string,
	});

	console.log(`isLoading`, isLoading);

	const symbols = walletBalances
		?.map((token) => token.symbol)
		.filter(Boolean) as string[];

	const { data: tokenPriceData, isLoading: isTokenQuotesLoading } =
		useGetTokenPrice({
			symbols,
		});

	console.log(`isTokenQuotesLoading`, isTokenQuotesLoading);
	// const tokenPriceData = mockTokenPrice;

	if (!walletBalances) {
		return <div>No data</div>;
	}

	/**
	 * Process the data to get the token prices
	 */
	const tokenPrices = getTokenPrices({
		walletBalances,
		tokenPriceData,
	});

	/**
	 * Calculate the total balance
	 */
	const totalBalance = getTotalWalletBalance({ walletBalances: tokenPrices });

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

	/**
	 * Get the top 3 holdings
	 */
	const top3Holdings = tokenPrices
		.sort((a, b) => (b.usdValue || 0) - (a.usdValue || 0))
		.slice(0, 3);

	return (
		<div className="space-y-6">
			{/* main balance */}
			<div className="text-center space-y-2">
				<div className="flex items-center justify-center gap-2 text-muted-foreground">
					<DollarSign className="h-4 w-4" />
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
						<span>
							{isPositive ? "+" : ""}${totalChange24h.toFixed(2)} (
							{changePercentage.toFixed(2)}%)
						</span>
						<span className="text-muted-foreground">24h</span>
					</div>
				</div>
			</div>

			{/* token list preview */}
			<div className="space-y-2">
				<div className="text-sm font-medium text-muted-foreground">
					Top 3 Holdings
				</div>
				<div className="space-y-1">
					{top3Holdings.map((token) => (
						<div
							key={token.symbol}
							className="flex items-center justify-between py-1"
						>
							<div className="flex items-center gap-2">
								<TokenAvatar src={token.logo || ""} />
								<span className="text-sm font-medium">{token.symbol}</span>
							</div>
							<div className="text-right">
								<div className="text-sm font-medium">
									${token.usdValue?.toFixed(2) || 0}
								</div>
								<div className="text-xs text-muted-foreground">
									{((token.usdValue / totalBalance) * 100).toFixed(2) || 0}%
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default function TotalBalancesClient() {
	return <TotalBalances />;
}
