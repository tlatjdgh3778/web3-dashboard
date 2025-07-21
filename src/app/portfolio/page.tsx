"use client";

import { useAccount } from "wagmi";

import { Card, CardContent } from "@/components/ui/card";
import { mockTotalBalance } from "@/mock/data/mockTotalBalances";

import TotalBalances from "./components/total-balances/total-balances";
import TotalAssets from "./components/total-assets/total-assets";
import { mockTokensByWallet } from "@/mock/data/mockTokensByWallet";
import BestPerformer from "./components/best-performer/best-performer";
// import { useGetTokensByWallet } from "@/hooks/useGetTokensByWallet";

export default function PortfolioPage() {
	const { address } = useAccount();
	console.log(address);
	// const { data: totalBalances } = useGetTotalBalances({
	// 	address: address as string,
	// });
	const walletBalances = mockTotalBalance;
	// const { data: tokens } = useGetTokensByWallet({
	// 	address: address as string,
	// });

	const tokensByWallet = mockTokensByWallet;
	// console.log(tokens);

	return (
		<div className="flex flex-col flex-1 space-y-6">
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
				<Card className="lg:col-span-2">
					<CardContent>
						<TotalBalances walletBalances={walletBalances} isLoading={false} />
					</CardContent>
				</Card>

				<Card className="lg:col-span-1">
					<CardContent>
						<TotalAssets tokensByWallet={tokensByWallet} isLoading={false} />
					</CardContent>
				</Card>

				<Card className="lg:col-span-1">
					<CardContent>
						<BestPerformer walletBalances={walletBalances} isLoading={false} />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
