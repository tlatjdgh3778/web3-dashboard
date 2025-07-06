"use client";

import { useAccount } from "wagmi";

import GasTracker from "@/components/common/GasTracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { mockErc20Tokens } from "@/mock/data/mockErc20Tokens";
import type { ERC20TokenResponse } from "@/types/ERC20Token";
import { Skeleton } from "@/components/ui/skeleton";

const slow = 0.283199859;
const standard = 0.303199859;
const fast = 0.323199859;

export default function DashboardPage() {
	const { address } = useAccount();

	// const { data, isLoading } = useGetERC20Tokens(address as string);
	console.log(address);
	const tokens = mockErc20Tokens;

	return (
		<div className="flex flex-col flex-1">
			<div className="grid grid-cols-3 gap-4">
				<Card className="w-full">
					<CardHeader>
						<CardTitle>Total Balances</CardTitle>
					</CardHeader>
					<CardContent>
						<TotalBalances data={tokens} isLoading={false} />
					</CardContent>
				</Card>
				<Card className="w-full">
					<CardHeader>
						<CardTitle>Gas Tracker</CardTitle>
					</CardHeader>
					<CardContent>
						<GasTracker slow={slow} standard={standard} fast={fast} />
					</CardContent>
				</Card>
				<Card className="w-full">
					<CardHeader>
						<CardTitle>Asset Distribution</CardTitle>
					</CardHeader>
					<CardContent>
						<p>1000</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

const TotalBalances = ({
	data,
	isLoading,
}: {
	data: ERC20TokenResponse;
	isLoading: boolean;
}) => {
	if (isLoading) {
		return <Skeleton className="h-[20px] w-[100px] rounded-full" />;
	}

	const totalBalance = data.result.reduce((acc, token) => {
		return acc + Number(token.usd_value);
	}, 0);

	return (
		<div>
			<h1 className="text-3xl font-bold text-green-600 dark:text-green-400">
				$ {totalBalance.toFixed(2)}
			</h1>
			<p className="text-sm text-muted-foreground">
				Total balance of all tokens ({data.result.length} tokens)
			</p>
		</div>
	);
};
