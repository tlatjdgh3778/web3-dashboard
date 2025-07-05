"use client";

import { useAccount, useBalance } from "wagmi";

import GasTracker from "@/components/common/GasTracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const slow = 0.283199859;
const standard = 0.303199859;
const fast = 0.323199859;

export default function DashboardPage() {
	const { address } = useAccount();
	const { data, isLoading } = useBalance({
		address: address,
	});

	return (
		<div className="flex flex-col flex-1">
			<div className="grid grid-cols-3 gap-4">
				<Card className="w-full">
					<CardHeader>
						<CardTitle>Total Portfolio Value</CardTitle>
					</CardHeader>
					<CardContent>
						{isLoading ? (
							<p>Loading...</p>
						) : (
							<p>
								{" "}
								{JSON.stringify(
									data,
									(_, v) => (typeof v === "bigint" ? v.toString() : v),
									2,
								)}
							</p>
						)}
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
