// token brand colors
const TOKEN_BRAND_COLORS: Record<string, string> = {
	ETH: "#627EEA", // Ethereum
	BTC: "#F7931A", // Bitcoin
	USDC: "#2775CA", // USD Coin
	USDT: "#26A17B", // Tether
	MATIC: "#8247E5", // Polygon
	LINK: "#375BD2", // Chainlink
	UNI: "#FF007A", // Uniswap
	AAVE: "#B6509E", // Aave
	SOL: "#9945FF", // Solana
	ADA: "#0033AD", // Cardano
	DOT: "#E6007A", // Polkadot
	AVAX: "#E84142", // AVAX
	WAVAX: "#E84142", // Wrapped AVAX
	BNB: "#F3BA2F", // Binance
	DOGE: "#C2A633", // Dogecoin
	LTC: "#BFBBBB", // Litecoin
	SHIB: "#FFA409", // Shiba Inu
	ATOM: "#2E3148", // Cosmos
	FTT: "#5FCADE", // FTX Token
	NEAR: "#00C08B", // NEAR Protocol
	ALGO: "#000000", // Algorand
};

// fallback colors
const FALLBACK_COLORS = [
	"#627EEA",
	"#F7931A",
	"#26A17B",
	"#8247E5",
	"#375BD2",
	"#FF007A",
	"#B6509E",
	"#9945FF",
	"#0033AD",
	"#E6007A",
	"#E84142",
	"#F3BA2F",
	"#C2A633",
	"#BFBBBB",
	"#FFA409",
];

// get token color
export function getTokenColor(symbol: string, index: number): string {
	return (
		TOKEN_BRAND_COLORS[symbol] ||
		FALLBACK_COLORS[index % FALLBACK_COLORS.length]
	);
}
