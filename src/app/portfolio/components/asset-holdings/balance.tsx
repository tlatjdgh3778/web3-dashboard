import type { TokenPrice, TokenPriceByAddressResult } from "alchemy-sdk";

export default function Balance({
	balance,
	price,
	symbol,
}: {
	balance: string | undefined;
	price: TokenPriceByAddressResult | undefined;
	symbol: string | undefined;
}) {
	const tokenPrice = price as any as TokenPrice[];

	const tokenBalance = Number(balance) * Number(tokenPrice?.[0]?.value || 0);
	return (
		<div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
			<div className="flex-grow">
				<div className="font-medium">$ {tokenBalance.toFixed(2)}</div>
				<div className="text-sm text-muted-foreground">
					{Number(balance)?.toFixed(4)} {symbol}
				</div>
			</div>
		</div>
	);
}
