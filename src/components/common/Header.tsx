"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { Wallet } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center flex-1">
						<Logo />
					</div>

					<Navigation />

					<div className="flex items-center justify-end flex-1">
						<ConnectButton label="Connect Wallet" />
					</div>
				</div>
			</div>
		</header>
	);
}

const Logo = () => {
	return (
		<Link href="/" className="flex items-center space-x-2">
			<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
				<Wallet className="h-5 w-5 text-white" />
			</div>
			<span className="text-xl font-bold text-gray-900 dark:text-white">
				Web3 Dashboard
			</span>
		</Link>
	);
};

const Navigation = () => {
	return (
		<nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
			<Button variant="ghost" asChild>
				<Link
					href="/dashboard"
					className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
				>
					Dashboard
				</Link>
			</Button>

			<Button variant="ghost" asChild>
				<Link
					href="/portfolio"
					className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
				>
					Portfolio
				</Link>
			</Button>
		</nav>
	);
};
