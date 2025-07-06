import { Pie, PieChart, Legend, ResponsiveContainer } from "recharts";

import type { ChartConfig } from "@/components/ui/chart";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import type { ERC20TokenResponse } from "@/types/ERC20Token";
import { getTokenColor } from "@/utils/getTokenColor";

import AssetChartLegend from "./AssetChartLegend";
import AssetChartTooltip from "./AssetChartTooltip";

interface AssetDistributionProps {
	data: ERC20TokenResponse;
	isLoading: boolean;
}

export default function AssetDistribution({
	data,
	isLoading,
}: AssetDistributionProps) {
	if (isLoading) {
		return <Skeleton className="h-[300px] w-full rounded-lg" />;
	}

	// chart data
	const chartData = data.result.map((token, index) => ({
		name: token.symbol,
		fullName: token.name,
		value: token.portfolio_percentage,
		usdValue: token.usd_value,
		balance: token.balance_formatted,
		price: token.usd_price,
		priceChange: token.usd_price_24hr_percent_change,
		fill: getTokenColor(token.symbol, index),
	}));

	// chart config
	const chartConfig = data.result.reduce((config, token, index) => {
		config[token.symbol] = {
			label: token.symbol,
			color: getTokenColor(token.symbol, index),
		};
		return config;
	}, {} as ChartConfig);

	return (
		<div className="w-full h-[300px]">
			<ChartContainer config={chartConfig} className="w-full h-full">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<ChartTooltip cursor={false} content={<AssetChartTooltip />} />
						<Pie
							data={chartData}
							dataKey="value"
							nameKey="name"
							cx="50%"
							cy="45%"
							innerRadius={50}
							outerRadius={80}
							paddingAngle={2}
							label={({ name, value }) =>
								`${name} ${Number(value).toFixed(1)}%`
							}
						/>
						<Legend
							content={<AssetChartLegend />}
							wrapperStyle={{ paddingTop: "20px" }}
						/>
					</PieChart>
				</ResponsiveContainer>
			</ChartContainer>
		</div>
	);
}
