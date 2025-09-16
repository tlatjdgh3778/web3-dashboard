import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Wallet, Zap } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import GasTracker from "./gas-tracker";

export default function WalletNotConnected() {
	return (
		<div className="flex-1 bg-gradient-to-br from-background via-muted/20 to-muted/40 flex items-center justify-center p-4 min-h-screen">
			<div className="max-w-4xl w-full space-y-8">
				{/* Main Hero Section */}
				<div className="text-center space-y-6">
					<div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg animate-pulse">
						<Wallet className="h-10 w-10 text-white" />
					</div>

					<div className="space-y-4">
						<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
							Web3 Dashboard
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Connect your wallet to access your portfolio, track transactions,
							and monitor the latest DeFi metrics
						</p>
					</div>

					<div className="flex justify-center">
						<ConnectButton label="Connect Wallet" />
					</div>
				</div>

				{/* Live Gas Tracker */}
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
						<GasTracker />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
