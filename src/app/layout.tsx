import { Geist, Geist_Mono } from "next/font/google";
import LayoutProvider from "@/components/common/LayoutProvider";

import "./globals.css";
import Header from "@/components/common/Header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<LayoutProvider>
					<Header />
					{children}
				</LayoutProvider>
			</body>
		</html>
	);
}
