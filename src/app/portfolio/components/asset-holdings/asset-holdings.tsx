import { DataTable } from "@/components/common/data-table/data-table";
import type { GetTokensByWalletResponse } from "alchemy-sdk";
import { Network } from "alchemy-sdk";

import { columns } from "./columns";
import { mockTokenMarketData7d } from "@/mock/data/mockTokenMarketData";

export default function AssetHoldings({
	tokensByWallet,
}: {
	tokensByWallet: {
		tokens: GetTokensByWalletResponse["data"]["tokens"];
		networks: Network[];
	};
}) {
	const filteredTokens = tokensByWallet.tokens.filter(
		(token) => token.network === Network.ETH_MAINNET,
	);
	console.log(filteredTokens);

	// const symbols = walletBalances
	// ?.map((token) => token.symbol)
	// .filter(Boolean) as string[];

	// const { data: tokenMarketData7d } = useGetTokenMarketData({
	// 	symbols
	// });

	const tokenMarketData7d = mockTokenMarketData7d;

	const tokensWithMarketData = filteredTokens.map((token) => {
		const symbol = token.tokenMetadata?.symbol;
		const marketData = tokenMarketData7d.find(
			(data) => data.symbol === symbol?.toLowerCase(),
		);
		return {
			...token,
			price_change_percentage_24h: marketData?.price_change_percentage_24h || 0,
			current_price: marketData?.current_price || 0,
		};
	});

	return (
		<div className="mx-auto flex flex-col">
			<DataTable columns={columns} data={tokensWithMarketData ?? []} />
		</div>
	);
}
