"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Wallet } from "lucide-react";

const slow = 0.283199859;
const standard = 0.303199859;
const fast = 0.323199859;

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

						{/* Gas Price Cards */}
						<div className="grid grid-cols-3 gap-3">
							<GasPriceCard title="Slow" value={slow} color="green" />
							<GasPriceCard title="Standard" value={standard} color="yellow" />
							<GasPriceCard title="Fast" value={fast} color="red" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const gasPriceCardStyle = {
	green: {
		type: "text-green-700 dark:text-green-400",
		font: "text-sm font-medium text-green-800 dark:text-green-300",
		bg: "bg-green-50 dark:bg-green-900/20",
	},
	yellow: {
		type: "text-yellow-700 dark:text-yellow-400",
		font: "text-sm font-medium text-yellow-800 dark:text-yellow-300",
		bg: "bg-yellow-50 dark:bg-yellow-900/20",
	},
	red: {
		type: "text-red-700 dark:text-red-400",
		font: "text-sm font-medium text-red-800 dark:text-red-300",
		bg: "bg-red-50 dark:bg-red-900/20",
	},
};

const GasPriceCard = ({
	title,
	value,
	color,
}: {
	title: string;
	value: number;
	color: string;
}) => {
	const colorStyle = gasPriceCardStyle[color as keyof typeof gasPriceCardStyle];
	const typeStyle =
		gasPriceCardStyle[color as keyof typeof gasPriceCardStyle].type;
	const fontStyle =
		gasPriceCardStyle[color as keyof typeof gasPriceCardStyle].font;

	return (
		<div className={`${colorStyle.bg} rounded-lg p-3 text-center`}>
			<div className={`text-xs font-bold ${typeStyle} mb-1`}>{title}</div>
			<div className={`text-sm font-medium ${fontStyle}`}>
				{value.toFixed(2)} gwei
			</div>
		</div>
	);
};
