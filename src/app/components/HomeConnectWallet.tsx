"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Wallet } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function HomeConnectWallet() {
	const { isConnected } = useAccount();
	const router = useRouter();

	useEffect(() => {
		if (isConnected) {
			router.replace("/dashboard");
		}
	}, [isConnected, router]);

	return (
		<div className="text-center space-y-6">
			<div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg animate-pulse">
				<Wallet className="h-10 w-10 text-white" />
			</div>

			<div className="space-y-4">
				<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
					Web3 Dashboard
				</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Connect your wallet to access your portfolio, track transactions, and
					monitor the latest DeFi metrics
				</p>
			</div>

			<div className="flex justify-center">
				<ConnectButton label="Connect Wallet" />
			</div>
		</div>
	);
}
