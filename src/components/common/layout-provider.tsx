"use client";

import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

import "@rainbow-me/rainbowkit/styles.css";

import config from "@/lib/walletConfig";

export default function LayoutProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<WagmiProvider config={config}>
			<RainbowKitProvider>{children}</RainbowKitProvider>
		</WagmiProvider>
	);
}
