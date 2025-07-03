"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, mainnet, sepolia, zksync } from "viem/chains";

const config = getDefaultConfig({
	appName: "My RainbowKit App",
	projectId: "YOUR_PROJECT_ID",
	chains: [mainnet, zksync, sepolia, anvil],
	ssr: true, // If your dApp uses server side rendering (SSR)
});

export default config;
