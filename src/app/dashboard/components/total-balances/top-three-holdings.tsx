"use client";

import { useAccount } from "wagmi";

import { getTokenPrices } from "@/utils/getTokenPrices";
import { useGetTotalBalances } from "@/hooks/useGetTotalBalances";
import TokenAvatar from "@/components/common/token-avatar";
import { getTotalWalletBalance } from "@/utils/getTotalWalletBalance";
import { Skeleton } from "@/components/ui/skeleton";

import { useGetTokenPricesFromWalletBalances } from "../../hooks/useGetTokenPricesFromWalletBalances";

export default function TopThreeHoldings() {
	const { address } = useAccount();

	const { data: walletBalances, isLoading } = useGetTotalBalances({
		address: address as string,
	});
	const { tokenPriceData, isTokenQuotesLoading } =
		useGetTokenPricesFromWalletBalances({
			walletBalances,
		});

	const tokenPrices = getTokenPrices({
		walletBalances,
		tokenPriceData,
	});

	const totalBalance = getTotalWalletBalance({ walletBalances: tokenPrices });

	const top3Holdings = tokenPrices
		.sort((a, b) => (b.usdValue || 0) - (a.usdValue || 0))
		.slice(0, 3);

	if (isLoading || isTokenQuotesLoading) {
		return <TopThreeHoldingsSkeleton />;
	}

	return (
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
	);
}

function TopThreeHoldingsSkeleton() {
	return (
		<div className="space-y-2">
			<Skeleton className="h-5 w-32" />
			<div className="space-y-1">
				{Array.from({ length: 3 }).map((_, i) => (
					<div
						key={`skeleton-${i as number}`}
						className="flex items-center justify-between py-1"
					>
						<div className="flex items-center gap-2">
							<Skeleton className="h-8 w-8 rounded-full" />
							<Skeleton className="h-5 w-16" />
						</div>
						<div className="text-right">
							<Skeleton className="h-5 w-20" />
							<Skeleton className="h-4 w-12" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
