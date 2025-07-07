export interface WalletHistoryResponse {
	page?: number;
	page_size?: number;
	limit?: string | null;
	cursor?: string | null;
	result?: WalletHistory[];
}

export interface WalletHistory {
	hash?: string;
	nonce?: string;
	transaction_index?: string;
	from_address_entity?: string | null;
	from_address_entity_logo?: string | null;
	from_address?: string;
	from_address_label?: string | null;
	to_address_entity?: string | null;
	to_address_entity_logo?: string | null;
	to_address?: string;
	to_address_label?: string | null;
	value?: string;
	gas?: string;
	gas_price?: string;
	receipt_cumulative_gas_used?: string;
	receipt_gas_used?: string;
	receipt_contract_address?: string | null;
	receipt_root?: string | null;
	receipt_status?: string | null;
	block_timestamp?: string | null;
	block_number?: string | null;
	block_hash?: string | null;
	transaction_fee?: string | null;
	method_label?: string | null;
	internal_transactions?: InternalTransaction[] | null;
	nft_transfers?: NftTransfer[] | null;
	erc20_transfers?: Erc20Transfer[] | null;
	native_transfers?: NativeTransfer[] | null;
	contract_interactions?: ContractInteraction | null;
	summary?: string | null;
	possible_spam?: boolean;
	category?: string | null;
}

export interface InternalTransaction {
	transaction_hash?: string;
	block_number?: string;
	block_hash?: string | null;
	type?: string; // CALL, CREATE, etc.
	from?: string | null;
	to?: string | null;
	value?: string;
	gas?: string;
	gas_used?: string;
	input?: string;
	output?: string;
}

export interface NftTransfer {
	token_address?: string;
	token_id?: string;
	from_address_entity?: string | null;
	from_address_entity_logo?: string | null;
	from_address?: string;
	from_address_label?: string | null;
	to_address_entity?: string | null;
	to_address_entity_logo?: string | null;
	to_address?: string;
	to_address_label?: string | null;
	value?: string;
	amount?: string;
	contract_type?: string; // ERC721, etc.
	block_number?: string | null;
	block_timestamp?: string | null;
	block_hash?: string | null;
	transaction_hash?: string;
	transaction_type?: string;
	transaction_index?: number;
	log_index?: number;
	operator?: string | null;
	possible_spam?: boolean;
	verified_collection?: boolean;
}

export interface Erc20Transfer {
	token_name?: string;
	token_symbol?: string;
	token_logo?: string;
	token_decimals?: string;
	transaction_hash?: string;
	address?: string; // ERC20 contract address
	block_timestamp?: string;
	block_number?: string;
	block_hash?: string;
	to_address_entity?: string | null;
	to_address_entity_logo?: string | null;
	to_address?: string;
	to_address_label?: string | null;
	from_address_entity?: string | null;
	from_address_entity_logo?: string | null;
	from_address?: string;
	from_address_label?: string | null;
	value?: string;
	transaction_index?: number;
	log_index?: number;
	possible_spam?: boolean;
	verified_contract?: boolean;
	security_score?: number | null;
	direction?: string;
	value_formatted?: string;
}

export interface NativeTransfer {
	from_address_entity?: string | null;
	from_address_entity_logo?: string | null;
	from_address?: string;
	from_address_label?: string | null;
	to_address_entity?: string | null;
	to_address_entity_logo?: string | null;
	to_address?: string | null;
	to_address_label?: string | null;
	value?: string;
	value_formatted?: string;
	direction?: string; // incoming | outgoing
	internal_transaction?: boolean;
	token_symbol?: string;
	token_logo?: string;
}

export interface ContractInteraction {
	approvals?: Approvals[];
}

export interface Approvals {
	value?: string | null;
	value_formatted?: string | null;
	token?: {
		address?: string;
		address_label?: string | null;
		token_name?: string | null;
		token_logo?: string | null;
		token_symbol?: string | null;
	};
	spender?: {
		address?: string;
		address_label?: string | null;
		entity?: string | null;
		entity_logo?: string | null;
	};
}
