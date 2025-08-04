export default function Price24h({
	change,
	price,
}: {
	change: number;
	price: number;
}) {
	const isPositive = change >= 0;

	return (
		<div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
			<div className="flex-grow">
				<div className="font-medium">$ {price.toFixed(2)}</div>
				<div
					className={`gap-1 text-sm ${
						isPositive
							? "text-green-600 dark:text-green-400"
							: "text-red-600 dark:text-red-400"
					}`}
				>
					{isPositive ? "+" : ""}
					{change.toFixed(1)}%
				</div>
			</div>
		</div>
	);
}
