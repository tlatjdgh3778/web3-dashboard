import { Pie, PieChart, Legend, ResponsiveContainer } from "recharts";
import type { OwnedToken } from "alchemy-sdk";

import type { ChartConfig } from "@/components/ui/chart";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import { getTokenColor } from "@/utils/getTokenColor";
import { mockTokenPrice } from "@/mock/data/mockTokenPrice";
import { getTotalWalletBalance } from "@/utils/getTotalWalletBalance";
import { getTokenPrices } from "@/utils/getTokenPrices";

import AssetChartLegend from "./asset-chart-legend";
import AssetChartTooltip from "./asset-chart-tooltip";

interface AssetDistributionProps {
	walletBalances: OwnedToken[] | undefined;
	isLoading: boolean;
}

export default function AssetDistribution({
	walletBalances,
	isLoading,
}: AssetDistributionProps) {
	if (isLoading) {
		return <Skeleton className="h-[300px] w-full rounded-lg" />;
	}
	if (!walletBalances) {
		return <div>No data</div>;
	}

	const tokenPriceData = mockTokenPrice;

	/**
	 * Process the data to get the token prices
	 */
	const tokenPrices = getTokenPrices({
		walletBalances,
		tokenPriceData,
	});

	/**
	 * Calculate the total balance
	 */
	const totalBalance = getTotalWalletBalance({ walletBalances: tokenPrices });

	const chartData = tokenPrices.map((token, index) => ({
		name: token.symbol,
		fullName: token.name,
		value: (token.usdValue / totalBalance) * 100,
		usdValue: token.usdValue,
		balance: token.balance,
		price: token.usdValue,
		priceChange: token.usd_24h_change,
		fill: getTokenColor(token.symbol || "", index),
	}));

	const chartConfig = tokenPrices.reduce((config, token, index) => {
		config[token.symbol || ""] = {
			label: token.symbol || "",
			color: getTokenColor(token.symbol || "", index),
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
