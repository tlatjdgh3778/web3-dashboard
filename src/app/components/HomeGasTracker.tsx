import { Zap } from "lucide-react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GasTracker from "@/components/common/gas-tracker";
import { fetchEthGasPrice } from "@/hooks/useGetEthGasPrice";
import { getQueryClient } from "@/lib/get-query-client";

export default async function HomeGasTracker() {
	const queryClient = getQueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["ethGasPrice"],
		queryFn: fetchEthGasPrice,
	});

	return (
		<Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
			<CardHeader className="text-center">
				<div className="flex items-center justify-center gap-2 mb-2">
					<Zap className="h-5 w-5 text-yellow-500" />
					<CardTitle className="text-xl">Live Gas Tracker</CardTitle>
					<Badge variant="outline" className="animate-pulse">
						Live
					</Badge>
				</div>
				<CardDescription>
					Current Ethereum network gas prices updated in real-time
				</CardDescription>
			</CardHeader>
			<CardContent>
				<HydrationBoundary state={dehydrate(queryClient)}>
					<GasTracker />
				</HydrationBoundary>
			</CardContent>
		</Card>
	);
}
