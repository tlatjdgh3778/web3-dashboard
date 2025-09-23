"use client";

import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";

import { useGetWalletTotalBalance } from "../../hooks/useGetWalletTotalBalance";

export default function TotalPortfolioValue() {
	const { totalBalance, tokenPrices, isLoading } = useGetWalletTotalBalance();

	const totalChange24h = tokenPrices.reduce((acc, token) => {
		return acc + (token.usd_24h_change || 0) * Number(token.balance);
	}, 0);

	const changePercentage =
		totalBalance > 0 ? (totalChange24h / totalBalance) * 100 : 0;

	const isPositive = totalChange24h >= 0;

	if (isLoading) {
		return <TotalPortfolioValueSkeleton />;
	}

	return (
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
	);
}

function TotalPortfolioValueSkeleton() {
	return (
		<div className="text-center space-y-2">
			<div className="flex items-center justify-center gap-2">
				<Skeleton className="h-4 w-4" />
				<Skeleton className="h-4 w-40" />
			</div>
			<div className="space-y-1">
				<Skeleton className="h-10 w-40 mx-auto" />
				<Skeleton className="h-5 w-32 mx-auto" />
			</div>
		</div>
	);
}
