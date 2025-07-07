import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import type { ERC20TokenResponse } from "@/types/ERC20Token";
import TokenAvatar from "@/components/common/token-avatar";

export default function TotalBalances({
	data,
	isLoading,
}: {
	data: ERC20TokenResponse | undefined;
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

	if (!data) {
		return <div>No data</div>;
	}

	const totalBalance = data.result.reduce((acc, token) => {
		return acc + Number(token.usd_value);
	}, 0);

	const totalChange24h = data.result.reduce((acc, token) => {
		return acc + (token.usd_value_24hr_usd_change || 0);
	}, 0);

	const changePercentage =
		totalBalance > 0 ? (totalChange24h / totalBalance) * 100 : 0;
	const isPositive = totalChange24h >= 0;

	const top3Holdings = data.result
		.sort((a, b) => (b.usd_value || 0) - (a.usd_value || 0))
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
								<TokenAvatar src={token.thumbnail || ""} />
								<span className="text-sm font-medium">{token.symbol}</span>
							</div>
							<div className="text-right">
								<div className="text-sm font-medium">
									${token.usd_value?.toFixed(2) || 0}
								</div>
								<div className="text-xs text-muted-foreground">
									{token.portfolio_percentage?.toFixed(1) || 0}%
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
