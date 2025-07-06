import type { ChartConfig } from "@/components/ui/chart";
import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import type { ERC20TokenResponse } from "@/types/ERC20Token";
import { Pie, PieChart } from "recharts";

interface AssetDistributionProps {
	data: ERC20TokenResponse;
	isLoading: boolean;
}

// token brand colors
const TOKEN_BRAND_COLORS: Record<string, string> = {
	ETH: "#627EEA", // Ethereum
	BTC: "#F7931A", // Bitcoin
	USDC: "#2775CA", // USD Coin
	USDT: "#26A17B", // Tether
	MATIC: "#8247E5", // Polygon
	LINK: "#375BD2", // Chainlink
	UNI: "#FF007A", // Uniswap
	AAVE: "#B6509E", // Aave
	SOL: "#9945FF", // Solana
	ADA: "#0033AD", // Cardano
	DOT: "#E6007A", // Polkadot
	AVAX: "#E84142", // Avalanche
	BNB: "#F3BA2F", // Binance
	DOGE: "#C2A633", // Dogecoin
	LTC: "#BFBBBB", // Litecoin
	SHIB: "#FFA409", // Shiba Inu
	ATOM: "#2E3148", // Cosmos
	FTT: "#5FCADE", // FTX Token
	NEAR: "#00C08B", // NEAR Protocol
	ALGO: "#000000", // Algorand
};

// fallback colors
const FALLBACK_COLORS = [
	"#627EEA",
	"#F7931A",
	"#26A17B",
	"#8247E5",
	"#375BD2",
	"#FF007A",
	"#B6509E",
	"#9945FF",
	"#0033AD",
	"#E6007A",
	"#E84142",
	"#F3BA2F",
	"#C2A633",
	"#BFBBBB",
	"#FFA409",
];

// get token color
function getTokenColor(symbol: string, index: number): string {
	return (
		TOKEN_BRAND_COLORS[symbol] ||
		FALLBACK_COLORS[index % FALLBACK_COLORS.length]
	);
}

export default function AssetDistribution({
	data,
	isLoading,
}: AssetDistributionProps) {
	if (isLoading) {
		return <Skeleton className="h-[150px] w-full rounded-lg" />;
	}

	// chart data
	const chartData = data.result.map((token, index) => ({
		name: token.symbol,
		fullName: token.name,
		value: token.portfolio_percentage,
		usdValue: token.usd_value,
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
		<ChartContainer
			config={chartConfig}
			className="mx-auto aspect-square max-h-[250px] w-full"
		>
			<PieChart>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent hideLabel />}
				/>
				<Pie
					data={chartData}
					dataKey="value"
					nameKey="name"
					innerRadius={60}
					outerRadius={90}
					paddingAngle={2}
					label={({ name, value }) => `${name} ${Number(value).toFixed(1)}%`}
				/>
				<ChartLegend
					content={<ChartLegendContent nameKey="name" payload={chartData} />}
					className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
				/>
			</PieChart>
		</ChartContainer>
	);
}
