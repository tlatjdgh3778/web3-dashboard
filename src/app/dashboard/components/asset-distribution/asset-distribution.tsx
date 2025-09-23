"use client";

import { Skeleton } from "@/components/ui/skeleton";

import AssetDistributionChart from "./asset-distribution-chart";
import { useGetWalletTotalBalance } from "../../hooks/useGetWalletTotalBalance";
import { useGetAssetDistributionChart } from "../../hooks/useGetAssetDistributionChart";

export default function AssetDistribution() {
	const { totalBalance, tokenPrices, isLoading } = useGetWalletTotalBalance();

	const { assetDistributionChartData, assetDistributionChartConfig } =
		useGetAssetDistributionChart({
			totalBalance,
			tokenPrices,
		});

	if (isLoading) {
		return <Skeleton className="h-[300px] w-full rounded-lg" />;
	}

	return (
		<div className="w-full h-[350px]">
			<AssetDistributionChart
				chartConfig={assetDistributionChartConfig}
				chartData={assetDistributionChartData}
			/>
		</div>
	);
}
