import { Card, CardContent } from "@/components/ui/card";
import { mockTotalBalance } from "@/mock/data/mockTotalBalances";

import TotalBalances from "./components/TotalBalances";
// import TotalBalances from "../dashboard/components/total-balances/total-balances";

export default function PortfolioPage() {
	const walletBalances = mockTotalBalance;
	return (
		<div className="flex flex-col flex-1 space-y-6">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<Card className="lg:col-span-1">
					<CardContent>
						<TotalBalances walletBalances={walletBalances} isLoading={false} />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
