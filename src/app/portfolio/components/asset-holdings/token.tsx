import TokenAvatar from "@/components/common/token-avatar";
import type { TokenMetadataResponse } from "alchemy-sdk";

export default function Token({
	token,
}: {
	token: TokenMetadataResponse | undefined;
}) {
	if (!token) return null;

	const tokenLogo = token.logo || "";
	const tokenName = token.name || "";
	const tokenSymbol = token.symbol || "";

	return (
		<div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
			<TokenAvatar src={tokenLogo} />
			<div className="flex-grow">
				<div className="font-medium">{tokenSymbol}</div>
				<div className="text-sm text-muted-foreground">{tokenName}</div>
			</div>
		</div>
	);
}
