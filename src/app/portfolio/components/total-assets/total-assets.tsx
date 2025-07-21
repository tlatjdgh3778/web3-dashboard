import type { GetTokensByWalletResponse, Network } from "alchemy-sdk";

import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function TotalAssets({
	tokensByWallet,
	isLoading,
}: {
	tokensByWallet: {
		tokens: GetTokensByWalletResponse["data"]["tokens"];
		networks: Network[];
	};
	isLoading: boolean;
}) {
	if (isLoading) {
		return (
			<div className="space-y-4">
				<Skeleton className="h-12 w-full" />
				<div className="grid grid-cols-2 gap-4">
					<Skeleton className="h-16 w-full" />
					<Skeleton className="h-16 w-full" />
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-6 flex items-center justify-between">
			<div className="space-y-2 flex flex-1 flex-col items-start">
				<div className="flex w-full items-center justify-between gap-2 text-muted-foreground">
					<span className="text-sm font-medium">Total Assets</span>
					<Badge variant="outline">
						{tokensByWallet.networks?.length || 0} networks
					</Badge>
				</div>
				<div className="space-y-1">
					<h1 className="text-3xl font-medium text-foreground">
						{tokensByWallet.tokens?.length || 0}
					</h1>
				</div>
			</div>
		</div>
	);
}
