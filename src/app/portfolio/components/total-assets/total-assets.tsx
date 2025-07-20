import type { OwnedToken } from "alchemy-sdk";

import { Skeleton } from "@/components/ui/skeleton";

export default function TotalAssets({
	walletBalances,
	isLoading,
}: {
	walletBalances: OwnedToken[] | undefined;
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
			<div className="space-y-2 flex flex-col items-start">
				<div className="flex items-center justify-center gap-2 text-muted-foreground">
					<span className="text-sm font-medium">Total Assets</span>
				</div>
				<div className="space-y-1">
					<h1 className="text-3xl font-medium text-foreground">
						{walletBalances?.length || 0}
					</h1>
				</div>
			</div>
		</div>
	);
}
