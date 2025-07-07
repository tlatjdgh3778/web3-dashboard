"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Wallet } from "lucide-react";

import { mockEthGasPrice } from "@/mock/data/mockEthGasPrice";

import GasTracker from "./gas-tracker";

export default function WalletNotConnected() {
	return (
		<div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
			<div className="max-w-lg w-full space-y-8">
				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
					<div className="text-center">
						<div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
							<Wallet className="h-8 w-8 text-white" />
						</div>

						<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
							Web3 Dashboard
						</h1>

						<p className="text-gray-600 dark:text-gray-400 mb-8">
							Connect your wallet or view any portfolio
						</p>
					</div>

					<div className="space-y-6">
						<div className="text-center ">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
								Connect Your Wallet
							</h3>
							<div className="flex justify-center">
								<ConnectButton label="Connect Wallet" />
							</div>
						</div>
					</div>

					<div className="border-t border-gray-200 dark:border-gray-700 my-8" />

					{/* Live Gas Tracker */}
					<div className="space-y-4">
						<h2 className="text-lg font-bold text-gray-900 dark:text-white text-center">
							Live Gas Tracker
						</h2>

						<GasTracker
							slow={mockEthGasPrice.slow}
							standard={mockEthGasPrice.standard}
							fast={mockEthGasPrice.fast}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
