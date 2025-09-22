import TotalPortfolioValue from "./total-portfolio-value";
import TopThreeHoldings from "./top-three-holdings";

export function TotalBalances() {
	return (
		<div className="space-y-6">
			<TotalPortfolioValue />
			<TopThreeHoldings />
		</div>
	);
}

export default function TotalBalancesClient() {
	return <TotalBalances />;
}
