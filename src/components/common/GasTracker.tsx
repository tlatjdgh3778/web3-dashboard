const gasPriceCardStyle = {
	green: {
		type: "text-green-700 dark:text-green-400",
		font: "text-sm font-medium text-green-800 dark:text-green-300",
		bg: "bg-green-50 dark:bg-green-900/20",
	},
	yellow: {
		type: "text-yellow-700 dark:text-yellow-400",
		font: "text-sm font-medium text-yellow-800 dark:text-yellow-300",
		bg: "bg-yellow-50 dark:bg-yellow-900/20",
	},
	red: {
		type: "text-red-700 dark:text-red-400",
		font: "text-sm font-medium text-red-800 dark:text-red-300",
		bg: "bg-red-50 dark:bg-red-900/20",
	},
};

export default function GasTracker({
	slow,
	standard,
	fast,
}: {
	slow: number;
	standard: number;
	fast: number;
}) {
	return (
		<div className="grid grid-cols-3 gap-3">
			<GasPriceCard title="Slow" value={slow} color="green" />
			<GasPriceCard title="Standard" value={standard} color="yellow" />
			<GasPriceCard title="Fast" value={fast} color="red" />
		</div>
	);
}

export function GasPriceCard({
	title,
	value,
	color,
}: {
	title: string;
	value: number;
	color: string;
}) {
	const colorStyle = gasPriceCardStyle[color as keyof typeof gasPriceCardStyle];
	const typeStyle =
		gasPriceCardStyle[color as keyof typeof gasPriceCardStyle].type;
	const fontStyle =
		gasPriceCardStyle[color as keyof typeof gasPriceCardStyle].font;

	return (
		<div className={`${colorStyle.bg} rounded-lg p-3 text-center`}>
			<div className={`text-xs font-bold ${typeStyle} mb-1`}>{title}</div>
			<div className={`text-sm font-medium ${fontStyle}`}>
				{value.toFixed(2)} gwei
			</div>
		</div>
	);
}
