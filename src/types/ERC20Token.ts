export interface ERC20TokenResponse {
	cursor: string | null;
	page: number;
	page_size: number;
	block_number: number;
	result: ERC20Token[];
}

interface ERC20Token {
	token_address: string;
	symbol: string;
	name: string;
	logo: string;
	thumbnail: string;
	decimals: number;
	balance: string;
	possible_spam: boolean;
	verified_contract: boolean;
	total_supply: string | null;
	total_supply_formatted: string | null;
	percentage_relative_to_total_supply: number | null;
	security_score: number | null;
	balance_formatted: string;
	usd_price: number;
	usd_price_24hr_percent_change: number;
	usd_price_24hr_usd_change: number;
	usd_value: number;
	usd_value_24hr_usd_change: number | null;
	native_token: boolean;
	portfolio_percentage: number;
}
