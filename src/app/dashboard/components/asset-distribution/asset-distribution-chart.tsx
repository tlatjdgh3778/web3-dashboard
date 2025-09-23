"use client";

import { Pie, PieChart, Legend, ResponsiveContainer } from "recharts";

import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
} from "@/components/ui/chart";
import AssetChartTooltip from "./asset-chart-tooltip";
import AssetChartLegend from "./asset-chart-legend";

export default function AssetDistributionChart({
	chartConfig,
	chartData,
}: {
	chartConfig: ChartConfig;
	chartData: any;
}) {
	return (
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
						label={({ name, value }) => `${name} ${Number(value).toFixed(1)}%`}
					/>
					<Legend
						content={<AssetChartLegend />}
						wrapperStyle={{ paddingTop: "20px" }}
					/>
				</PieChart>
			</ResponsiveContainer>
		</ChartContainer>
	);
}
