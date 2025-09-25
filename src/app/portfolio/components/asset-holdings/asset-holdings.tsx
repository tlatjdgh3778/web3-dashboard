import type { GetTokensByWalletResponse, OwnedToken } from "alchemy-sdk";
import { Network } from "alchemy-sdk";
import { useAccount } from "wagmi";

import { useGetTokensByWallet } from "@/hooks/useGetTokensByWallet";
import { useGetTotalBalances } from "@/hooks/useGetTotalBalances";
import { PriceChangePercentage } from "@/types/PriceChangePercentage";
import { useGetTokenMarketData } from "@/hooks/useGetTokenMarketData";
import TableLoadingSkeleton from "@/components/common/data-table/table-loading-skeleton";
import { DataTable } from "@/components/common/data-table/data-table";

import { columns } from "./columns";

function AssetHoldingsTable({
	walletBalances,
	filteredTokens,
}: {
	walletBalances: OwnedToken[];
	filteredTokens: GetTokensByWalletResponse["data"]["tokens"];
}) {
	const symbols = walletBalances
		?.map((token) => token.symbol?.toLowerCase())
		.filter(Boolean) as string[];

	const { data: tokenMarketData7d, isPending } = useGetTokenMarketData({
		symbols,
		time: PriceChangePercentage.ONE_WEEK,
	});

	const tokensWithMarketData = filteredTokens.map((token) => {
		const symbol = token.tokenMetadata?.symbol;
		const marketData = tokenMarketData7d?.find(
			(data) => data.symbol === symbol?.toLowerCase(),
		);
		return {
			...token,
			price_change_percentage_24h: marketData?.price_change_percentage_24h || 0,
			current_price: marketData?.current_price || 0,
		};
	});

	if (isPending) {
		return <TableLoadingSkeleton />;
	}

	return <DataTable columns={columns} data={tokensWithMarketData ?? []} />;
}

export default function AssetHoldings() {
	const { address } = useAccount();
	const { data: tokensByWallet, isLoading } = useGetTokensByWallet({
		address: address as string,
	});

	const { data: walletBalances, isLoading: isWalletBalancesLoading } =
		useGetTotalBalances({
			address: address as string,
		});

	const filteredTokens = tokensByWallet?.tokens.filter(
		(token) => token.network === Network.ETH_MAINNET,
	);

	if (isLoading || isWalletBalancesLoading) {
		return <TableLoadingSkeleton />;
	}

	return (
		<div className="mx-auto flex flex-col">
			<AssetHoldingsTable
				walletBalances={walletBalances}
				filteredTokens={filteredTokens ?? []}
			/>
		</div>
	);
}
