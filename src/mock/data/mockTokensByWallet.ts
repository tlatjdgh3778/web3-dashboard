import type { Network, GetTokensByWalletResponse } from "alchemy-sdk";

export const mockTokens: GetTokensByWalletResponse["data"]["tokens"] = [
	{
		address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		network: "eth-mainnet",
		tokenBalance: "0.000094116265058986",
		tokenMetadata: {
			decimals: 18,
			logo: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
			name: "Ethereum",
			symbol: "ETH",
		},
		tokenPrices: [
			{
				currency: "usd",
				value: "3424.0608133768",
				lastUpdatedAt: "2025-07-17T14:43:26Z",
			},
		],
	},
	{
		address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		network: "arb-mainnet",
		tokenBalance: "0.000395268761936101",
		tokenMetadata: {
			decimals: 18,
			logo: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
			name: "Ethereum",
			symbol: "ETH",
		},
		tokenPrices: [
			{
				currency: "usd",
				value: "0.4501206979",
				lastUpdatedAt: "2025-07-17T14:43:04Z",
			},
		],
	},
	{
		address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		network: "arb-mainnet",
		tokenAddress: "0x306fd3e7b169aa4ee19412323e1a5995b8c1a1f4",
		tokenBalance: "15000",
		tokenMetadata: {
			logo: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
			name: "Black Agnus",
			symbol: "FTW",
		},
		tokenPrices: [
			{
				currency: "usd",
				value: "0.000000003853",
				lastUpdatedAt: "2025-07-17T14:43:32.311908751Z",
			},
		],
	},
	{
		address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		network: "eth-mainnet",
		tokenAddress: "0x85f138bfee4ef8e540890cfb48f620571d67eda3",
		tokenBalance: "0.219984073463235903",
		tokenMetadata: {
			decimals: 18,
			name: "Wrapped AVAX (Wormhole)",
			symbol: "WAVAX",
		},
		tokenPrices: [
			{
				currency: "usd",
				value: "23.180097554917",
				lastUpdatedAt: "2025-07-17T14:43:54.464302267Z",
			},
		],
	},
	{
		address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		network: "eth-mainnet",
		tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
		tokenBalance: "1.659343",
		tokenMetadata: {
			decimals: 6,
			logo: "https://static.alchemyapi.io/images/assets/3408.png",
			name: "USDC",
			symbol: "USDC",
		},
		tokenPrices: [
			{
				currency: "usd",
				value: "0.998154719698",
				lastUpdatedAt: "2025-07-17T14:43:31.162375528Z",
			},
		],
	},
	{
		address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		network: "eth-mainnet",
		tokenAddress: "0xd31a59c85ae9d8edefec411d448f90841571b89c",
		tokenBalance: "0.009",
		tokenMetadata: {
			decimals: 9,
			logo: "https://static.alchemyapi.io/images/assets/16116.png",
			name: "Wrapped Solana",
			symbol: "SOL",
		},
		tokenPrices: [
			{
				currency: "usd",
				value: "175.085317059307",
				lastUpdatedAt: "2025-07-17T14:43:26.995803350Z",
			},
		],
	},
	{
		address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		network: "eth-mainnet",
		tokenAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
		tokenBalance: "1.485587",
		tokenMetadata: {
			decimals: 6,
			logo: "https://static.alchemyapi.io/images/assets/825.png",
			name: "Tether USDt",
			symbol: "USDT",
		},
		tokenPrices: [
			{
				currency: "usd",
				value: "0.998750833115",
				lastUpdatedAt: "2025-07-17T14:43:51.679601353Z",
			},
		],
	},
	{
		address: "0x4808eb5719d8912a61eff9eda275fbab863c1778",
		network: "arb-mainnet",
		tokenAddress: "0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0",
		tokenBalance: "0.163231044152248472",
		tokenMetadata: {
			decimals: 18,
			logo: "https://static.alchemyapi.io/images/assets/7083.png",
			name: "Uniswap",
			symbol: "UNI",
		},
		tokenPrices: [
			{
				currency: "usd",
				value: "8.941584590678",
				lastUpdatedAt: "2025-07-17T14:43:08.508663130Z",
			},
		],
	},
] as any;

export const mockNetworks = [
	...new Set(mockTokens.map((token) => token.network)),
];

export const mockTokensByWallet: {
	tokens: GetTokensByWalletResponse["data"]["tokens"];
	networks: Network[];
} = {
	tokens: mockTokens,
	networks: mockNetworks,
};
