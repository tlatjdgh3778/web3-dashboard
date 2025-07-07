"use client";

import { useAccount } from "wagmi";

import GasTracker from "@/components/common/gas-tracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { mockEthGasPrice } from "@/mock/data/mockEthGasPrice";
import { mockErc20Tokens } from "@/mock/data/mockErc20Tokens";

import TotalBalances from "./components/total-balances/TotalBalances";
import AssetDistribution from "./components/asset-distribution/AssetDistribution";
import RecentTransaction from "./components/recent-transactions/recent-transaction";
// import { useGetERC20Tokens } from "@/hooks/useGetERC20Tokens";

export default function DashboardPage() {
	const { address } = useAccount();

	// const { data: tokens, isLoading } = useGetERC20Tokens(address as string);
	console.log(address);
	const tokens = mockErc20Tokens;

	return (
		<div className="flex flex-col flex-1 space-y-6">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Total Balances Card */}
				<Card className="lg:col-span-1">
					<CardHeader className="pb-3">
						<CardTitle className="text-lg">Total Balances</CardTitle>
					</CardHeader>
					<CardContent>
						<TotalBalances data={tokens} isLoading={false} />
					</CardContent>
				</Card>

				{/* Gas Tracker Card */}
				<Card className="lg:col-span-1">
					<CardHeader className="pb-3">
						<CardTitle className="text-lg">Gas Tracker</CardTitle>
					</CardHeader>
					<CardContent>
						<GasTracker
							slow={mockEthGasPrice.slow}
							standard={mockEthGasPrice.standard}
							fast={mockEthGasPrice.fast}
						/>
					</CardContent>
				</Card>

				{/* Asset Distribution Card */}
				<Card className="lg:col-span-1">
					<CardHeader className="pb-3">
						<CardTitle className="text-lg">Asset Distribution</CardTitle>
					</CardHeader>
					<CardContent className="pt-0">
						<AssetDistribution data={tokens} isLoading={false} />
					</CardContent>
				</Card>
			</div>

			{/* 추가 섹션을 위한 공간 */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Recent Transactions */}
				<RecentTransaction />
			</div>
		</div>
	);
}
