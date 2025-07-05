"use client";

import LayoutProvider from "@/components/common/LayoutProvider";

import "./globals.css";
import Header from "@/components/common/Header";
import WalletGuard from "@/components/common/WalletGuard";
import { geistMono, geistSans } from "./ui/fonts";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
			>
				<LayoutProvider>
					<div className="min-h-screen flex flex-col">
						<Header />
						<main className="flex flex-1">
							<WalletGuard>{children}</WalletGuard>
						</main>
					</div>
				</LayoutProvider>
			</body>
		</html>
	);
}
