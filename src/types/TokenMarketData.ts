export interface TokenMarketData {
	id?: string;
	symbol?: string;
	name?: string;
	image?: string;
	current_price?: number;
	market_cap?: number;
	market_cap_rank?: number;
	fully_diluted_valuation?: number;
	total_volume?: number;
	high_24h?: number;
	low_24h?: number;
	price_change_24h?: number;
	price_change_percentage_24h?: number;
	market_cap_change_24h?: number;
	market_cap_change_percentage_24h?: number;
	circulating_supply?: number;
	total_supply?: number;
	max_supply?: number | null;
	ath?: number;
	ath_change_percentage?: number;
	ath_date?: string;
	atl?: number;
	atl_change_percentage?: number;
	atl_date?: string;
	roi?: {
		times: number;
		currency: string;
		percentage: number;
	} | null;
	last_updated?: string;
	sparkline_in_7d?: {
		price: number[];
	};
	price_change_percentage_24h_in_currency?: number;
	price_change_percentage_7d_in_currency?: number;
	price_change_percentage_14d_in_currency?: number;
	price_change_percentage_30d_in_currency?: number;
	price_change_percentage_60d_in_currency?: number;
	price_change_percentage_200d_in_currency?: number;
	price_change_percentage_1y_in_currency?: number;
}
