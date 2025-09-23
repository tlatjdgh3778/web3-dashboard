import type { ChartConfig } from "@/components/ui/chart";
import type { WalletBalance } from "@/types/WalletBalance";
import { getTokenColor } from "@/utils/getTokenColor";

export const useGetAssetDistributionChart = ({
	totalBalance,
	tokenPrices,
}: {
	totalBalance: number;
	tokenPrices: WalletBalance[];
}) => {
	const assetDistributionChartData = tokenPrices.map((token, index) => ({
		name: token.symbol,
		fullName: token.name,
		value: (token.usdValue / totalBalance) * 100,
		usdValue: token.usdValue,
		balance: token.balance,
		price: token.usdValue,
		priceChange: token.usd_24h_change,
		fill: getTokenColor(token.symbol || "", index),
	}));

	const assetDistributionChartConfig = tokenPrices.reduce(
		(config, token, index) => {
			config[token.symbol || ""] = {
				label: token.symbol || "",
				color: getTokenColor(token.symbol || "", index),
			};
			return config;
		},
		{} as ChartConfig,
	);

	return {
		assetDistributionChartData,
		assetDistributionChartConfig,
	};
};
