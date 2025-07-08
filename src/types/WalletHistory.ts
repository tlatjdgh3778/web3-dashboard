export interface WalletHistoryResponse {
	page?: number;
	page_size?: number;
	limit?: string;
	cursor?: string;
	result?: WalletHistory[];
}

export interface WalletHistory {
	hash?: string;
	nonce?: string;
	transaction_index?: string;
	from_address_entity?: string;
	from_address_entity_logo?: string;
	from_address?: string;
	from_address_label?: string;
	to_address_entity?: string;
	to_address_entity_logo?: string;
	to_address?: string;
	to_address_label?: string;
	value?: string;
	gas?: string;
	gas_price?: string;
	receipt_cumulative_gas_used?: string;
	receipt_gas_used?: string;
	receipt_contract_address?: string;
	receipt_root?: string;
	receipt_status?: string;
	block_timestamp?: string;
	block_number?: string;
	block_hash?: string;
	transaction_fee?: string;
	method_label?: string;
	internal_transactions?: InternalTransaction[];
	nft_transfers?: NftTransfer[];
	erc20_transfers?: Erc20Transfer[];
	native_transfers?: NativeTransfer[];
	contract_interactions?: ContractInteraction;
	summary?: string;
	possible_spam?: boolean;
	category?: string;
}

export interface InternalTransaction {
	transaction_hash?: string;
	block_number?: string;
	block_hash?: string;
	type?: string; // CALL, CREATE, etc.
	from?: string;
	to?: string;
	value?: string;
	gas?: string;
	gas_used?: string;
	input?: string;
	output?: string;
}

export interface NftTransfer {
	token_address?: string;
	token_id?: string;
	from_address_entity?: string;
	from_address_entity_logo?: string;
	from_address?: string;
	from_address_label?: string;
	to_address_entity?: string;
	to_address_entity_logo?: string;
	to_address?: string;
	to_address_label?: string;
	value?: string;
	amount?: string;
	contract_type?: string; // ERC721, etc.
	block_number?: string;
	block_timestamp?: string;
	block_hash?: string;
	transaction_hash?: string;
	transaction_type?: string;
	transaction_index?: number;
	log_index?: number;
	operator?: string;
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
	to_address_entity?: string;
	to_address_entity_logo?: string;
	to_address?: string;
	to_address_label?: string;
	from_address_entity?: string;
	from_address_entity_logo?: string;
	from_address?: string;
	from_address_label?: string;
	value?: string;
	transaction_index?: number;
	log_index?: number;
	possible_spam?: boolean;
	verified_contract?: boolean;
	security_score?: number;
	direction?: string;
	value_formatted?: string;
}

export interface NativeTransfer {
	from_address_entity?: string;
	from_address_entity_logo?: string;
	from_address?: string;
	from_address_label?: string;
	to_address_entity?: string;
	to_address_entity_logo?: string;
	to_address?: string;
	to_address_label?: string;
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
	value?: string;
	value_formatted?: string;
	token?: {
		address?: string;
		address_label?: string;
		token_name?: string;
		token_logo?: string;
		token_symbol?: string;
	};
	spender?: {
		address?: string;
		address_label?: string;
		entity?: string;
		entity_logo?: string;
	};
}
