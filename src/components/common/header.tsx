"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wallet } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center flex-1">
						<Logo />
					</div>

					<Navigation />

					<div className="flex items-center justify-end flex-1 space-x-2">
						<ModeToggle />
						<ConnectButton label="Connect Wallet" />
					</div>
				</div>
			</div>
		</header>
	);
}

const Logo = () => {
	return (
		<Link
			href="/"
			className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
		>
			<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
				<Wallet className="h-5 w-5 text-white" />
			</div>
			<span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
				Web3 Dashboard
			</span>
		</Link>
	);
};

const Navigation = () => {
	const pathname = usePathname();

	const navItems = [
		{ href: "/dashboard", label: "Dashboard" },
		{ href: "/portfolio", label: "Portfolio" },
		{ href: "/transactions", label: "Transactions" },
	];

	return (
		<nav className="hidden md:flex items-center space-x-1 flex-1 justify-center">
			{navItems.map((item) => {
				const isActive = pathname === item.href;
				return (
					<Button key={item.href} variant="ghost" asChild className="relative">
						<Link
							href={item.href}
							className={`text-sm font-medium transition-colors px-4 py-2 rounded-md ${
								isActive
									? "text-foreground bg-accent"
									: "text-muted-foreground hover:text-foreground hover:bg-accent"
							}`}
						>
							{item.label}
							{isActive && (
								<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
							)}
						</Link>
					</Button>
				);
			})}
		</nav>
	);
};
