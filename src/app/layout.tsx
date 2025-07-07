"use client";

import LayoutProvider from "@/components/common/layout-provider";

import "./globals.css";
import Header from "@/components/common/header";
import WalletGuard from "@/components/common/wallet-guard";
import { geistMono, geistSans } from "./ui/fonts";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<title>Web3 Dashboard</title>
				<meta name="description" content="Web3 Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
			>
				<LayoutProvider>
					<div className="min-h-screen flex flex-col">
						<Header />
						<main className="flex flex-1">
							<Toaster position="top-right" />
							<WalletGuard>{children}</WalletGuard>
						</main>
					</div>
				</LayoutProvider>
			</body>
		</html>
	);
}
