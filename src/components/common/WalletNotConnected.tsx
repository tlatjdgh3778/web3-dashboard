"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Wallet } from "lucide-react";
import GasTracker from "./GasTracker";
import { mockEthGasPrice } from "@/mock/data/mockEthGasPrice";

export default function WalletNotConnected() {
	// const { data: ethGasPrice } = useGetEthGasPrice();

	return (
		<div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
			<div className="max-w-md w-full space-y-8">
				{/* 메인 카드 */}
				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
					{/* 아이콘 */}
					<div className="text-center">
						<div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
							<Wallet className="h-8 w-8 text-white" />
						</div>

						{/* 제목 */}
						<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
							Web3 Dashboard
						</h1>

						{/* 설명 */}
						<p className="text-gray-600 dark:text-gray-400 mb-8">
							Connect your wallet to view your crypto portfolio
						</p>
					</div>

					{/* 연결 버튼 */}
					<div className="flex justify-center mb-8">
						<ConnectButton label="Connect Wallet" />
					</div>

					{/* 구분선 */}
					<div className="border-t border-gray-200 dark:border-gray-700 my-6" />

					{/* Live Eth gas  */}
					<div className="space-y-4">
						{/* 제목 */}
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
