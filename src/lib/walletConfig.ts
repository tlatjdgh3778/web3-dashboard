"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, mainnet, sepolia, zksync } from "viem/chains";

const config = getDefaultConfig({
	appName: "My RainbowKit App",
	projectId: "YOUR_PROJECT_ID",
	chains: [mainnet, zksync, sepolia, anvil],
	ssr: true,
	// TODO:
	// storage: createStorage({
	// 	storage: cookieStorage, // ✅ SSR 안전
	// }),
});

export default config;
