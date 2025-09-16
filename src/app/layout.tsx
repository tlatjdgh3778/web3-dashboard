import Header from "@/components/common/header";
import WalletGuard from "@/components/common/wallet-guard";
import { Toaster } from "@/components/ui/sonner";

import { geistMono, geistSans } from "./ui/fonts";
import ClientProviders from "./client-providers";

import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<title>Web3 Dashboard</title>
				<meta name="description" content="Web3 Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
			>
				<ClientProviders>
					<div className="min-h-screen flex flex-col">
						<Header />
						<main className="flex flex-1">
							<Toaster position="top-right" />
							<WalletGuard>{children}</WalletGuard>
						</main>
					</div>
				</ClientProviders>
			</body>
		</html>
	);
}
