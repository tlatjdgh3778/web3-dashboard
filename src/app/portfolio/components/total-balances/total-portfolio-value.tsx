"use client";

import { TrendingDown, TrendingUp } from "lucide-react";

import { useGetWalletTotalBalance } from "@/hooks/useGetWalletTotalBalance";
import { useGet7dTokenData } from "../../hooks/useGet7dTokenData";
import { Skeleton } from "@/components/ui/skeleton";
import type { OwnedToken } from "alchemy-sdk";
import type { WalletBalance } from "@/types/WalletBalance";

function SevenDaysChange({
	totalBalance,
	walletBalances,
	tokenPrices,
}: {
	totalBalance: number;
	walletBalances: OwnedToken[];
	tokenPrices: WalletBalance[];
}) {
	const { changePercentage7d, isPositive7d, isPending } = useGet7dTokenData({
		totalBalance,
		walletBalances,
		tokenPrices,
	});

	if (isPending) {
		return <SevenDaysChangeSkeleton />;
	}

	return (
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
					{changePercentage7d}%
				</span>
			</div>
		</div>
	);
}

function TotalValue({
	totalBalance,
	isPositive,
	totalChange24h,
	changePercentage,
}: {
	totalBalance: number;
	isPositive: boolean;
	totalChange24h: number;
	changePercentage: number;
}) {
	return (
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
	);
}

export default function TotalPortfolioValue() {
	const { totalBalance, tokenPrices, walletBalances, isLoading } =
		useGetWalletTotalBalance();

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
		<div className="space-y-6 flex items-center justify-between">
			<TotalValue
				totalBalance={totalBalance}
				isPositive={isPositive}
				totalChange24h={totalChange24h}
				changePercentage={changePercentage}
			/>
			<SevenDaysChange
				totalBalance={totalBalance}
				walletBalances={walletBalances}
				tokenPrices={tokenPrices}
			/>
		</div>
	);
}

function TotalPortfolioValueSkeleton() {
	return (
		<div className="space-y-6 flex items-center justify-between">
			{/* TotalValue 스켈레톤 */}
			<div className="space-y-2 flex flex-col items-start">
				<div className="flex items-center justify-center gap-2">
					<Skeleton className="h-4 w-40" />
				</div>
				<div className="space-y-1">
					<Skeleton className="h-10 w-48" />
					<Skeleton className="h-5 w-36" />
				</div>
			</div>

			{/* SevenDaysChange 스켈레톤 */}
			<div className="space-y-2 flex flex-col items-start">
				<div className="flex items-center justify-center gap-2">
					<Skeleton className="h-4 w-24" />
				</div>
				<div className="space-y-1">
					<Skeleton className="h-6 w-20" />
				</div>
			</div>
		</div>
	);
}

function SevenDaysChangeSkeleton() {
	return (
		<div className="space-y-2 flex flex-col items-start">
			<div className="flex items-center justify-center gap-2">
				<Skeleton className="h-4 w-24" />
			</div>
			<div className="space-y-1">
				<Skeleton className="h-6 w-20" />
			</div>
		</div>
	);
}
