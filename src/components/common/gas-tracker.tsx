"use client";

import useGetEthGasPrice from "@/hooks/useGetEthGasPrice";
import { Fuel, Clock, Zap, Activity } from "lucide-react";

const gasPriceCardStyle = {
	green: {
		type: "text-green-700 dark:text-green-400",
		font: "text-sm font-medium text-green-800 dark:text-green-300",
		bg: "bg-green-50 dark:bg-green-900/20",
		border: "border-green-200 dark:border-green-800",
		icon: "text-green-600 dark:text-green-400",
	},
	yellow: {
		type: "text-yellow-700 dark:text-yellow-400",
		font: "text-sm font-medium text-yellow-800 dark:text-yellow-300",
		bg: "bg-yellow-50 dark:bg-yellow-900/20",
		border: "border-yellow-200 dark:border-yellow-800",
		icon: "text-yellow-600 dark:text-yellow-400",
	},
	red: {
		type: "text-red-700 dark:text-red-400",
		font: "text-sm font-medium text-red-800 dark:text-red-300",
		bg: "bg-red-50 dark:bg-red-900/20",
		border: "border-red-200 dark:border-red-800",
		icon: "text-red-600 dark:text-red-400",
	},
};

const gasTypeConfig = {
	slow: {
		icon: Clock,
		title: "Slow",
		description: "~30 sec",
		color: "green",
	},
	standard: {
		icon: Activity,
		title: "Standard",
		description: "~30 sec",
		color: "yellow",
	},
	fast: {
		icon: Zap,
		title: "Fast",
		description: "~30 sec",
		color: "red",
	},
};

export default function GasTracker() {
	const { data: gasPrice, isLoading } = useGetEthGasPrice();

	const gasData = [
		{ type: "slow", value: Number(gasPrice?.SafeGasPrice) || 0 },
		{ type: "standard", value: Number(gasPrice?.ProposeGasPrice) || 0 },
		{ type: "fast", value: Number(gasPrice?.FastGasPrice) || 0 },
	];

	// calculate average gas price
	const averageGas =
		((Number(gasPrice?.SafeGasPrice) || 0) +
			(Number(gasPrice?.ProposeGasPrice) || 0) +
			(Number(gasPrice?.FastGasPrice) || 0)) /
		3;

	return (
		<div className="space-y-4">
			{/* header info */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Fuel className="h-4 w-4 text-muted-foreground" />
					<span className="text-sm font-medium text-muted-foreground">
						Ethereum Gas Prices
					</span>
				</div>
				<div className="text-right">
					<div className="text-sm font-medium">
						Avg: {averageGas ? averageGas.toFixed(2) : 0} gwei
					</div>
					<div className="text-xs text-muted-foreground">Live prices</div>
				</div>
			</div>

			{/* gas price cards */}
			<div className="grid grid-cols-3 gap-3">
				{gasData?.map((gas) => {
					const config = gasTypeConfig[gas.type as keyof typeof gasTypeConfig];
					return (
						<GasPriceCard
							key={gas.type}
							title={config.title}
							description={config.description}
							value={gas.value}
							color={config.color}
							icon={config.icon}
							isLoading={isLoading}
						/>
					);
				})}
			</div>

			{/* gas saving tip */}
			<div className="bg-muted/50 rounded-lg p-3">
				<div className="text-xs font-medium text-muted-foreground mb-1">
					💡 Gas Saving Tip
				</div>
				<div className="text-xs text-muted-foreground">
					Use slow gas for non-urgent transactions to save on fees
				</div>
			</div>
		</div>
	);
}

export function GasPriceCard({
	title,
	description,
	value,
	color,
	icon: Icon,
	isLoading,
}: {
	title: string;
	description: string;
	value: number | string;
	color: string;
	icon: React.ElementType;
	isLoading: boolean;
}) {
	const colorStyle = gasPriceCardStyle[color as keyof typeof gasPriceCardStyle];

	return (
		<div
			className={`${colorStyle.bg} ${colorStyle.border} border rounded-lg p-3 text-center space-y-2 hover:shadow-sm transition-shadow`}
		>
			{/* icon */}
			<div className="flex justify-center">
				<Icon className={`h-4 w-4 ${colorStyle.icon}`} />
			</div>

			{/* title */}
			<div className={`text-xs font-bold ${colorStyle.type}`}>{title}</div>

			{/* price */}
			{isLoading ? (
				<div className="flex justify-center items-center h-6">
					<div className="h-4 w-4 rounded-full border-2 border-t-transparent border-muted-foreground/30 animate-spin"></div>
				</div>
			) : (
				<div className={`text-lg font-bold ${colorStyle.font}`}>
					{value ? Number(value).toFixed(1) : "0"} gwei
				</div>
			)}

			{/* description */}
			<div className="text-xs text-muted-foreground">{description}</div>
		</div>
	);
}
