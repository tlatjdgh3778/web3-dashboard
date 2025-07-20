"use client";

import { useAccount } from "wagmi";

import GasTracker from "@/components/common/gas-tracker";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { mockEthGasPrice } from "@/mock/data/mockEthGasPrice";
import { mockTotalBalance } from "@/mock/data/mockTotalBalances";

import TotalBalances from "./components/total-balances/total-balances";
import AssetDistribution from "./components/asset-distribution/asset-distribution";
import RecentTransactions from "./components/recent-transactions/recent-transactions";

export default function DashboardPage() {
	const { address } = useAccount();
	console.log(address);

	// const { data: walletBalances, isLoading } = useGetTotalBalances({
	// 	address: address as string,
	// });

	const walletBalances = mockTotalBalance;

	// TODO: walletBalances => mockTokensByWallet
	return (
		<div className="flex flex-col flex-1 space-y-6">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Total Balances Card */}
				<Card className="lg:col-span-1">
					<CardHeader className="pb-3">
						<CardTitle className="text-xl">Total Balances</CardTitle>
					</CardHeader>
					<CardContent>
						<TotalBalances walletBalances={walletBalances} isLoading={false} />
					</CardContent>
				</Card>

				{/* Gas Tracker Card */}
				<Card className="lg:col-span-1">
					<CardHeader className="pb-3">
						<CardTitle className="text-xl">Gas Tracker</CardTitle>
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
						<CardTitle className="text-xl">Asset Distribution</CardTitle>
					</CardHeader>
					<CardContent className="pt-0">
						<AssetDistribution
							walletBalances={walletBalances}
							isLoading={false}
						/>
					</CardContent>
				</Card>
			</div>

			{/* 추가 섹션을 위한 공간 */}
			<Card className="lg:col-span-1">
				<CardHeader className="pb-3">
					<CardTitle className="text-xl">Recent Transactions</CardTitle>
					<CardDescription>Your latest 5 transactions</CardDescription>
				</CardHeader>
				<CardContent className="pt-0">
					<RecentTransactions />
				</CardContent>
			</Card>
		</div>
	);
}
