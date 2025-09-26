import TokenAvatar from "@/components/common/token-avatar";
import { useGetTokenMetadata } from "@/hooks/useGetTokenMetadata";

export default function TokenFromMetadata({
	tokenAddress,
}: {
	tokenAddress: string;
}) {
	const { data: tokenMetadata } = useGetTokenMetadata({ tokenAddress });

	if (!tokenMetadata) return null;
	return (
		<div className="flex items-center gap-2">
			<TokenAvatar src={tokenMetadata.logo || ""} />
			<p className="text-sm font-medium">{tokenMetadata.name}</p>
			<p className="text-sm text-muted-foreground">({tokenMetadata.symbol})</p>
		</div>
	);
}
