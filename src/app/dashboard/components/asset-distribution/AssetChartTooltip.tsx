export default function AssetChartTooltip({ active, payload }: any) {
	if (active && payload && payload.length) {
		const data = payload[0].payload;
		const isPositive = data.priceChange >= 0;

		return (
			<div className="bg-background border border-border rounded-lg shadow-lg p-4 min-w-[200px]">
				{/* Header */}
				<div className="flex items-center gap-3 mb-3">
					<div
						className="w-4 h-4 rounded-full"
						style={{ backgroundColor: data.fill }}
					/>
					<div>
						<div className="font-semibold text-foreground">{data.name}</div>
						<div className="text-sm text-muted-foreground">{data.fullName}</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-border my-3" />

				{/* Stats */}
				<div className="space-y-2">
					{/* Portfolio Percentage */}
					<div className="flex justify-between items-center">
						<span className="text-sm text-muted-foreground">Portfolio</span>
						<span className="font-semibold text-foreground">
							{data.value.toFixed(2)}%
						</span>
					</div>

					{/* USD Value */}
					<div className="flex justify-between items-center">
						<span className="text-sm text-muted-foreground">Value</span>
						<span className="font-semibold text-foreground">
							${data.usdValue.toFixed(2)}
						</span>
					</div>

					{/* Balance */}
					<div className="flex justify-between items-center">
						<span className="text-sm text-muted-foreground">Balance</span>
						<span className="font-semibold text-foreground">
							{Number(data.balance).toFixed(4)} {data.name}
						</span>
					</div>

					{/* Price */}
					<div className="flex justify-between items-center">
						<span className="text-sm text-muted-foreground">Price</span>
						<span className="font-semibold text-foreground">
							${data.price?.toFixed(2)}
						</span>
					</div>

					{/* 24h Change */}
					<div className="flex justify-between items-center">
						<span className="text-sm text-muted-foreground">24h Change</span>
						<span
							className={`font-semibold ${
								isPositive
									? "text-green-600 dark:text-green-400"
									: "text-red-600 dark:text-red-400"
							}`}
						>
							{isPositive ? "+" : ""}
							{data.priceChange.toFixed(2)}%
						</span>
					</div>
				</div>
			</div>
		);
	}
	return null;
}
