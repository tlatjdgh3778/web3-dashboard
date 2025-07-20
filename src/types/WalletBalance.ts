import type { OwnedToken } from "alchemy-sdk";

export interface WalletBalance extends OwnedToken {
	usdValue: number;
	usd_24h_change: number;
	usd_24h_vol: number;
	usd_market_cap: number;
}
