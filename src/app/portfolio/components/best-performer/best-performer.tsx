import type { OwnedToken } from "alchemy-sdk";
import { TrendingDown, TrendingUp } from "lucide-react";

import TokenAvatar from "@/components/common/token-avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { mockTokenMarketData7d } from "@/mock/data/mockTokenMarketData";

export default function BestPerformer({
	walletBalances,
	isLoading,
}: {
	walletBalances: OwnedToken[] | undefined;
	isLoading: boolean;
}) {
	const symbols = walletBalances
		?.map((token) => token.symbol)
		.filter(Boolean) as string[];

	console.log(symbols);

	if (isLoading) {
		return (
			<div className="space-y-4">
				<Skeleton className="h-12 w-full" />
				<div className="grid grid-cols-2 gap-4">
					<Skeleton className="h-16 w-full" />
				</div>
			</div>
		);
	}

	// const { data: tokenMarketData7d } = useGetTokenMarketData({
	// 	symbols
	// });

	const tokenMarketData7d = mockTokenMarketData7d;

	const bestPerformer = tokenMarketData7d.sort((a, b) => {
		const aChange = a?.price_change_percentage_24h || 0;
		const bChange = b?.price_change_percentage_24h || 0;

		return bChange - aChange;
	})[0];

	const totalChange24h = bestPerformer?.price_change_percentage_24h || 0;
	const isPositive = totalChange24h >= 0;

	return (
		<div className="space-y-6 flex items-center justify-between">
			{/* main balance */}
			<div className="space-y-2 flex flex-col items-start">
				<div className="flex items-center justify-center gap-2 text-muted-foreground">
					<span className="text-sm font-medium">Best Performer</span>
				</div>
				<div className="space-y-1">
					<div className="flex items-center gap-2">
						<TokenAvatar src={bestPerformer.image || ""} />
						<h1 className="text-xl font-bold text-foreground">
							{bestPerformer.symbol}
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
								{isPositive ? "+" : ""}
								{totalChange24h.toFixed(2)}%
							</span>
						</div>
					</div>
					<span className="text-muted-foreground">24h performance</span>
				</div>
			</div>
		</div>
	);
}
